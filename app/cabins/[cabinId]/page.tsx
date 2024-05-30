import { Metadata } from 'next';
import { Suspense } from 'react';

import { Spinner } from '@/app/_components/Spinner';
import { Reservation } from '@/app/_entities/booking';
import { Cabin, getCabin, getCabins } from '@/app/_entities/cabin';

export async function generateMetadata({ params }: PageProps) {
  const cabin = await getCabin(+params.cabinId);
  const metadata: Metadata = {
    title: `Cabin ${cabin?.name ?? 'unknown'}`,
  };
  return metadata;
}

export async function generateStaticParams() {
  const cabins = await getCabins();

  const ids = cabins.map((cabin) => ({ cabinId: String(cabin.id) }));

  return ids;
}

type PageProps = {
  params: {
    cabinId: string;
  };
};

export default async function Page({ params }: PageProps) {
  const { cabinId } = params;
  const cabin = await getCabin(+cabinId);

  return (
    <div className="mx-auto mt-8 max-w-6xl">
      <Cabin cabin={cabin} />

      <div>
        <h2 className="mb-10 text-center text-5xl font-semibold text-accent-400">
          Reserve {cabin.name} today. Pay on arrival.
        </h2>

        <Suspense fallback={<Spinner />}>
          <Reservation cabin={cabin} />
        </Suspense>
      </div>
    </div>
  );
}
