<template>
    <header
        class="sticky top-0 z-40 bg-neutral-100 dark:bg-neutral-900 border-b border-neutral-200 dark:border-neutral-800 flex items-center px-4 h-16"
    >
        <NuxtLink
            to="/"
            class="font-bold text-lg mr-4 text-neutral-900 dark:text-neutral-100 hover:text-neutral-600 dark:hover:text-neutral-300 transition-colors"
        >
            Microblog
        </NuxtLink>

        <SearchForm class="flex-1 max-w-md" />
        <ThemeToggle class="ml-4" />
    </header>
</template>
