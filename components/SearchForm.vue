<template>
    <form @submit.prevent="handleSearch">
        <input
            v-model="searchQuery"
            type="text"
            placeholder="Buscar..."
            class="w-full px-3 py-1 rounded bg-white dark:bg-neutral-800 text-neutral-900 dark:text-neutral-100 placeholder-neutral-500 dark:placeholder-neutral-400 border border-neutral-300 dark:border-neutral-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        />
    </form>
</template>

<script setup>
const searchQuery = ref('');

const handleSearch = () => {
    if (searchQuery.value.trim()) {
        navigateTo(`/search?q=${encodeURIComponent(searchQuery.value)}`);
    }
};
</script>
