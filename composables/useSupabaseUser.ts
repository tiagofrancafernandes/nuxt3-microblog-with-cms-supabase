import type { User, UserResponse } from '@supabase/supabase-js';
import { ref, onMounted } from 'vue';

// const user = ref<any>(null);
// const user = ref<null|User>(null);
const user = ref<null | any | User>(null);

export async function useSupabaseUser() {
    const { $supabase } = useNuxtApp();

    onMounted(async () => {
        const { data } = await $supabase.auth.getUser();

        user.value = data.user;

        $supabase.auth.onAuthStateChange((_, session) => {
            user.value = session?.user as any;
        });
    });

    return user;
}
