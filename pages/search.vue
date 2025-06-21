<template>
    <div class="container mx-auto py-6">
        <h1 class="text-2xl font-bold mb-4">Buscar Postagens</h1>
        <form @submit.prevent="searchPosts" class="flex flex-col gap-2 mb-4">
            <input v-model="q" type="text" placeholder="Buscar..." class="input input-bordered" />
            <input v-model="af" type="date" class="input input-bordered" />
            <input v-model="bf" type="date" class="input input-bordered" />
            <button type="submit" class="btn btn-primary">Buscar</button>
        </form>
        <div v-if="loading" class="text-center">Carregando...</div>
        <div v-else>
            <div v-for="post in posts" :key="post.id" class="mb-6 bg-neutral-800 rounded-lg p-4 shadow">
                <NuxtLink :to="`/post/${post.id}`">
                    <img :src="post.image_url" :alt="post.caption" class="w-full rounded mb-2 max-h-64 object-cover" />
                </NuxtLink>
                <div class="flex flex-wrap gap-2 mb-2">
                    <NuxtLink
                        v-for="tag in post.tags"
                        :key="tag"
                        :to="`/tag/${tag}`"
                        class="px-2 py-1 bg-neutral-700 rounded text-xs"
                    >
                        #{{ tag }}
                    </NuxtLink>
                </div>
                <div class="text-sm text-neutral-400">{{ post.caption }}</div>
            </div>
        </div>
    </div>
</template>
<script setup lang="ts">
import { parseISO, isValid } from 'date-fns';
const { $supabase } = useNuxtApp();
const route = useRoute();
const posts = ref([]);
const loading = ref(false);
const q = ref(route.query.q || '');
const af = ref(route.query.af || '');
const bf = ref(route.query.bf || '');

async function searchPosts() {
    loading.value = true;
    let query = $supabase.from('posts').select('*').eq('visibility', 'public');
    if (q.value) {
        query = query.ilike('caption', `%${q.value}%`);
    }
    if (af.value && isValid(parseISO(af.value))) {
        query = query.gte('created_at', af.value);
    }
    if (bf.value && isValid(parseISO(bf.value))) {
        query = query.lte('created_at', bf.value);
    }
    query = query.order('created_at', { ascending: false });
    const { data } = await query;
    posts.value = data || [];
    loading.value = false;
}
onMounted(searchPosts);
</script>
