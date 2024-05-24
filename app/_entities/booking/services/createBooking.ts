import { supabase } from '@/app/_lib/supabase';
import { Tables } from '@/app/_types/database';

export async function createBooking(newBooking: Tables<'bookings'>) {
  const { data, error } = await supabase
    .from('bookings')
    .insert([newBooking])
    // So that the newly created object gets returned!
    .select()
    .single();

  if (error) {
    console.error(error);
    throw new Error('Booking could not be created');
  }

  return data;
}
