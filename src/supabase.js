import { createClient } from "@supabase/supabase-js";

// Create a single supabase client for interacting with your database
const supabaseUrl = import.meta.env.SUPABASE_URL || process.env.SUPABASE_URL
const supabaseKey = import.meta.env.SUPABASE_KEY || process.env.SUPABASE_KEY

export const supabase = createClient(supabaseUrl, supabaseKey);
