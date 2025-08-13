// src/lib/supabaseClient.ts

import { createClient } from '@supabase/supabase-js'


const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error("Supabase variables are missing from your .env.local file. Did you forget to restart the server?");
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey)