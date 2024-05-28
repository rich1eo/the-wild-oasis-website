import { CapacityFilterOption } from '@/app/_types/cabinsFIlter';

import { getCabins } from '../services';
import { CabinCard } from './CabinCard';

type CabinListProps = {
  capacityFilter: CapacityFilterOption;
};

export async function CabinList({ capacityFilter }: CabinListProps) {
  let cabins = await getCabins();

  if (!cabins.length) {
    return null;
  }

  if (capacityFilter === 'small') {
    cabins = cabins.filter((cabin) => {
      return cabin.maxCapacity! <= 3;
    });
  }

  if (capacityFilter === 'medium') {
    cabins = cabins.filter((cabin) => {
      return cabin.maxCapacity! >= 4 && cabin.maxCapacity! <= 7;
    });
  }

  if (capacityFilter === 'large') {
    cabins = cabins.filter((cabin) => {
      return cabin.maxCapacity! >= 8;
    });
  }

  return (
    <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:gap-12 xl:gap-14">
      {cabins.map((cabin) => (
        <CabinCard cabin={cabin} key={cabin.id} />
      ))}
    </div>
  );
}
