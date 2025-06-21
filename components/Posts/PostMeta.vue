<template>
    <div>
        <div class="text-sm text-neutral-500 italic truncate mb-1">
            {{ category }}
        </div>
        <h3 class="text-lg text-neutral-500 dark:text-neutral-300 font-semibold">
            {{ caption }}
        </h3>
    </div>
</template>

<script setup lang="ts">
interface Props {
    category: string;
    caption: string;
}

defineProps<Props>();
</script>
