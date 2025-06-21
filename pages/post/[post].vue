<template>
    <div class="container mx-auto py-6">
        <div v-if="loading" class="text-center">Carregando...</div>
        <div v-else-if="!post" class="text-center text-red-400">Postagem não encontrada ou privada.</div>
        <template v-else>
            <PostItem :post="post" :showDetail="true" :linkToPost="false" />
        </template>
    </div>
</template>
<script setup lang="ts">
const route = useRoute();
const postId = route.params.post as string;
const { $supabase } = useNuxtApp();
const post = ref(null);
const loading = ref(true);

import PostItem from '~/components/Posts/PostItem.vue';

onMounted(async () => {
    const { data } = await $supabase.from('posts').select('*').eq('id', postId).eq('visibility', 'public').single();
    post.value = data;
    loading.value = false;
});
</script>
