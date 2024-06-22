import { Metadata } from 'next';

import { auth } from '../_lib/auth';

export const metadata: Metadata = {
  title: 'Account',
};

export default async function Page() {
  const session = await auth();
  const firstName = session?.user?.name?.split(' ').at(0);
  console.log(session);

  return <h1>Welcome, {firstName}</h1>;
}
