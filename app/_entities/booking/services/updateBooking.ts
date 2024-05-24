import { supabase } from '@/app/_lib/supabase';
import { Tables } from '@/app/_types/database';

export async function updateBooking(
  id: number,
  updatedFields: Omit<Tables<'bookings'>, 'id'>,
) {
  const { data, error } = await supabase
    .from('bookings')
    .update(updatedFields)
    .eq('id', id)
    .select()
    .single();

  if (error) {
    console.error(error);
    throw new Error('Booking could not be updated');
  }
  return data;
}
