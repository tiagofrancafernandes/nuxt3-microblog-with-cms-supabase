<template>
    <div class="container mx-auto py-6">
        <h1 class="text-2xl font-bold mb-4">Postagens Públicas</h1>
        <div v-if="loading" class="text-center">Carregando...</div>
        <div v-else>
            <template v-for="post in posts" :key="post.id">
                <PostItem :post="post" />
            </template>
        </div>
    </div>
</template>
<script setup lang="ts">
const { $supabase } = useNuxtApp();
const posts = ref([]);
const loading = ref(true);

import PostItem from '~/components/Posts/PostItem.vue';

onMounted(async () => {
    const { data } = await $supabase
        .from('posts')
        .select('*')
        .eq('visibility', 'public')
        .order('created_at', { ascending: false });
    posts.value = data || [];
    loading.value = false;
});

definePageMeta({ layout: 'default' });
</script>
