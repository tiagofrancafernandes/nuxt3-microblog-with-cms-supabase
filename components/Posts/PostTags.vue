<template>
    <div class="flex flex-wrap gap-2 mb-2">
        <NuxtLink
            v-for="tag in tags"
            :key="tag"
            :to="`/tag/${tag}`"
            class="px-2 py-1 rounded text-xs bg-neutral-300 hover:bg-neutral-400 dark:bg-neutral-700 dark:hover:bg-neutral-600 text-neutral-500 dark:text-neutral-300"
        >
            #{{ tag }}
        </NuxtLink>
    </div>
</template>

<script setup lang="ts">
interface Props {
    tags: string[];
}

defineProps<Props>();
</script>
