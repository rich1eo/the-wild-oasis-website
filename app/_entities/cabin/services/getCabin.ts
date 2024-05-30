import { notFound } from 'next/navigation';

import { supabase } from '@/app/_lib/supabase';

export async function getCabin(id: number) {
  const { data, error } = await supabase
    .from('cabins')
    .select('*')
    .eq('id', id)
    .single();

  // For testing
  // await new Promise((res) => setTimeout(res, 2000));

  if (error) {
    console.error(error);
    notFound();
  }
  data?.created_at;

  return data;
}
