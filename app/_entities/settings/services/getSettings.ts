import { supabase } from '@/app/_lib/supabase';

export async function getSettings() {
  const { data, error } = await supabase.from('settings').select('*').single();

  // await new Promise((res) => setTimeout(res, 2000));

  if (error) {
    console.error(error);
    throw new Error('Settings could not be loaded');
  }

  return data;
}
