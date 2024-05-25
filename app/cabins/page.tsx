import { Metadata } from 'next';
import { Suspense } from 'react';

import { Spinner } from '../_components/Spinner';
import { CabinList } from '../_entities/cabin';

export const metadata: Metadata = {
  title: 'Cabins',
};

export default function Page() {
  return (
    <section>
      <h1 className="mb-5 text-4xl font-medium text-accent-400">
        Our Luxury Cabins
      </h1>
      <p className="mb-10 text-lg text-primary-200">
        Cozy yet luxurious cabins, located right in the heart of the Italian
        Dolomites. Imagine waking up to beautiful mountain views, spending your
        days exploring the dark forests around, or just relaxing in your private
        hot tub under the stars. Enjoy nature&apos;s beauty in your own little
        home away from home. The perfect spot for a peaceful, calm vacation.
        Welcome to paradise.
      </p>

      <Suspense fallback={<Spinner />}>
        <CabinList />
      </Suspense>
    </section>
  );
}
