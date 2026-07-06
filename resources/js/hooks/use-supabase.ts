import { supabase } from '@/lib/supabase';

export function useSupabase() {
    return {
        supabase,
        storage: supabase.storage,
        realtime: supabase.channel,
    };
}
