import { createClient, SupabaseClient, User, Session, PostgrestError } from '@supabase/supabase-js';

let supabase: SupabaseClient;

const createSupabaseClient = (useServiceKey: boolean = false) => {
  if (supabase === undefined) {
    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
    const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;
    const supabaseServiceKey = process.env.SUPABASE_SERVICE_KEY!;
    supabase = createClient(supabaseUrl, useServiceKey ? supabaseServiceKey : supabaseAnonKey);
  }
  return supabase;
};

export { createSupabaseClient, SupabaseClient };
export type { User, Session, PostgrestError };
