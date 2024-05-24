import { supabase } from '@/app/_lib/supabase';

export async function deleteBooking(id: number) {
  const { data, error } = await supabase.from('bookings').delete().eq('id', id);

  if (error) {
    console.error(error);
    throw new Error('Booking could not be deleted');
  }
  return data;
}
