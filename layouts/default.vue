<template>
    <div class="min-h-screen bg-neutral-50 dark:bg-neutral-900 text-neutral-900 dark:text-neutral-100 flex">
        <!-- Leftbar (desktop only) -->
        <aside
            class="hidden md:flex flex-col w-64 bg-neutral-200 dark:bg-neutral-800 md:border-r border-neutral-400 dark:border-neutral-800 p-4"
        >
            <!-- Adicione navegação aqui -->
            <NuxtLink to="/" class="mb-4 font-bold text-xl">Microblog</NuxtLink>
            <!-- ... -->
        </aside>
        <div class="flex-1 flex flex-col">
            <!-- Topbar -->
            <header
                class="sticky top-0 z-40 bg-neutral-200 dark:bg-neutral-900 border-b border-neutral-400 dark:border-neutral-800 flex items-center px-4 h-16"
            >
                <NuxtLink to="/" class="font-bold text-lg mr-4">Microblog</NuxtLink>
                <form class="flex-1 max-w-md">
                    <input
                        type="text"
                        placeholder="Buscar..."
                        class="w-full px-3 py-1 rounded bg-neutral-400 dark:bg-neutral-800 text-neutral-100"
                    />
                </form>
                <ThemeToggle class="ml-4" />
            </header>
            <!-- Content -->
            <main class="flex-1 p-4">
                <slot />
            </main>
        </div>
    </div>
</template>

<script setup>
useHead({
    titleTemplate: '%s - Microblog',
    htmlAttrs: {
        lang: 'pt-BR',
    },
});
</script>
