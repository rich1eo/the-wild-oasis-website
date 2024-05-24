import { supabase } from '@/app/_lib/supabase';
import { Tables } from '@/app/_types/database';

export async function createGuest(newGuest: Tables<'guests'>) {
  const { data, error } = await supabase.from('guests').insert([newGuest]);

  if (error) {
    console.error(error);
    throw new Error('Guest could not be created');
  }

  return data;
}
