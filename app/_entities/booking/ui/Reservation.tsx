import { getBookedDatesByCabinId } from '@/app/_entities/booking';
import { getSettings } from '@/app/_entities/settings';
import { Tables } from '@/app/_types/database';

import { DateSelector } from './DateSelector';
import { ReservationForm } from './ReservationForm';

type ReservationProps = {
  cabin: Tables<'cabins'>;
};

export async function Reservation({ cabin }: ReservationProps) {
  const [settings, bookedDates] = await Promise.all([
    getSettings(),
    getBookedDatesByCabinId(+cabin.id),
  ]);

  return (
    <div className="grid min-h-[400px] grid-cols-2 border border-primary-800 text-accent-400">
      <DateSelector
        cabin={cabin}
        settings={settings}
        bookedDates={bookedDates}
      />
      <ReservationForm cabin={cabin} />
    </div>
  );
}
