'use client';

import { usePathname, useRouter, useSearchParams } from 'next/navigation';

import { CapacityFilterOption } from '../_types/cabinsFilter';

const capacityFilter: {
  title: string;
  paramValue: CapacityFilterOption;
}[] = [
  {
    title: 'All cabins',
    paramValue: 'all',
  },
  {
    title: '1\u20143 guests',
    paramValue: 'small',
  },
  {
    title: '4\u20147 guests',
    paramValue: 'medium',
  },
  {
    title: '8\u201412 guests',
    paramValue: 'large',
  },
];

export function Filter() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  const activeFilter = searchParams.get('capacity') ?? 'all';

  const handleFilter = (filter: CapacityFilterOption) => {
    const params = new URLSearchParams(searchParams);
    params.set('capacity', filter);
    router.replace(`${pathname}?${params.toString()}`, { scroll: false });
  };

  return (
    <div className="flex border border-primary-800">
      {capacityFilter.map((option) => (
        <button
          key={crypto.randomUUID()}
          className={`px-5 py-2 hover:bg-primary-700 ${activeFilter === option.paramValue ? 'bg-primary-700 text-primary-50' : ''}`}
          onClick={() => handleFilter(option.paramValue)}
        >
          {option.title}
        </button>
      ))}
    </div>
  );
}
