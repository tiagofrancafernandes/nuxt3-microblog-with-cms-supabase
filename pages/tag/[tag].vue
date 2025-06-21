<template>
    <div class="container mx-auto py-6">
        <h1 class="text-2xl font-bold mb-4">#{{ tag }}</h1>
        <div v-if="loading" class="text-center">Carregando...</div>
        <div v-else>
            <!--
            <div v-for="post in posts" :key="post.id" class="mb-6 bg-neutral-800 rounded-lg p-4 shadow">
                <NuxtLink :to="`/post/${post.id}`">
                    <img :src="post.image_url" :alt="post.caption" class="w-full rounded mb-2 max-h-64 object-cover" />
                </NuxtLink>
                <div class="text-sm text-neutral-400">{{ post.caption }}</div>
            </div>
            -->
            <template v-for="post in posts" :key="post.id">
                <PostItem :post="post" />
            </template>
        </div>
    </div>
</template>

<script setup lang="ts">
const route = useRoute();
const tag = route.params.tag as string;
const { $supabase } = useNuxtApp();
const posts = ref([]);
const loading = ref(true);

import PostItem from '~/components/Posts/PostItem.vue';

onMounted(async () => {
    const { data } = await $supabase
        .from('posts')
        .select('*')
        .contains('tags', [tag])
        .eq('visibility', 'public')
        .order('created_at', { ascending: false });
    posts.value = data || [];
    loading.value = false;
});
</script>
