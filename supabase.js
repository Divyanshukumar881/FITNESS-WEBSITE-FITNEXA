import { createClient } from 'https://esm.sh/@supabase/supabase-js@2';

export const supabase = createClient(
  'https://oezcfvvukbwsfmqlfeys.supabase.co',
  'sb_publishable_M6CEXpvp7dQvLm1TBr9tgw_JWE4iv_T',
  { auth: { persistSession: true, autoRefreshToken: true, detectSessionInUrl: true } }
);
