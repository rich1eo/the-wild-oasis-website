import { supabase } from '@/app/_lib/supabase';
import { Tables } from '@/app/_types/database';

// The updatedFields is an object which should ONLY contain the updated data

export async function updateGuest(
  id: number,
  updatedFields: Omit<Tables<'guests'>, 'id'>,
) {
  const { data, error } = await supabase
    .from('guests')
    .update(updatedFields)
    .eq('id', id)
    .select()
    .single();

  if (error) {
    console.error(error);
    throw new Error('Guest could not be updated');
  }
  return data;
}
