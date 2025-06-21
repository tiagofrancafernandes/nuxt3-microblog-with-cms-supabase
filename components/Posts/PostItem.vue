<template>
    <article
        class="bg-neutral-200 dark:bg-neutral-800 rounded-lg p-4 shadow hover:shadow-lg transition-shadow duration-300"
    >
        <PostImage :post="post" :linkToPost="linkToPost" />

        <PostTags :tags="post.tags" />

        <PostMeta :category="post.category" :caption="post.caption" />
    </article>
</template>

<script setup lang="ts">
import PostImage from '~/components/Posts/PostImage.vue';
import PostMeta from '~/components/Posts/PostMeta.vue';
import PostTags from '~/components/Posts/PostTags.vue';

interface Post {
    id: string;
    image_url: string;
    caption: string;
    tags: string[];
    category: string;
}

interface Props {
    post: Post;
    linkToPost?: boolean;
    showDetail?: boolean;
    showComments?: boolean;
    showLikeCount?: boolean;
    linkToPost?: boolean;
}

withDefaults(defineProps<Props>(), {
    linkToPost: true,
    showDetail: false,
    showComments: false,
    showLikeCount: false,
});
</script>
