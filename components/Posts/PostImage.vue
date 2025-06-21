<template>
    <div class="mb-2">
        <img
            v-if="!linkToPost"
            :src="post.image_url"
            :alt="post.caption"
            class="w-full rounded max-h-64 object-cover"
        />
        <NuxtLink v-else :to="`/post/${post.id}`">
            <img :src="post.image_url" :alt="post.caption" class="w-full rounded max-h-64 object-cover" />
        </NuxtLink>
    </div>
</template>

<script setup lang="ts">
interface Props {
    post: {
        id: string;
        image_url: string;
        caption: string;
    };
    linkToPost: boolean;
}

defineProps<Props>();
</script>
