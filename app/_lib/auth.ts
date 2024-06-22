import NextAuth, { DefaultSession, NextAuthConfig } from 'next-auth';
import Google from 'next-auth/providers/google';

import { createGuest, getGuest } from '../_entities/guest';

declare module 'next-auth' {
  interface Session {
    user: {
      // id from supabase guest table
      guestId: number | undefined;
    } & DefaultSession['user'];
  }
}

const authConfig: NextAuthConfig = {
  providers: [
    Google({
      clientId: process.env.AUTH_GOOGLE_ID,
      clientSecret: process.env.AUTH_GOOGLE_SECRET,
    }),
  ],
  callbacks: {
    authorized: ({ auth }) => {
      return !!auth?.user;
    },
    signIn: async ({ user }) => {
      try {
        const { email, name } = user;
        if (!email) throw new Error();
        const existingGuest = await getGuest(email);

        if (!existingGuest) {
          await createGuest({
            fullName: name,
            email,
          });
        }

        return true;
      } catch (err) {
        return false;
      }
    },
    session: async ({ session, user }) => {
      const guest = await getGuest(session.user.email);
      session.user.guestId = guest?.id;

      return session;
    },
  },
  pages: {
    signIn: '/login',
  },
};

export const {
  auth,
  signIn,
  signOut,
  handlers: { GET, POST },
} = NextAuth(authConfig);
