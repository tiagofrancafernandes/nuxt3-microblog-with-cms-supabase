<template>
    <div class="min-h-screen bg-neutral-900 text-neutral-100 flex flex-col">
        <div class="flex flex-1">
            <!-- Leftbar -->
            <aside class="hidden md:flex flex-col w-60 bg-neutral-800 p-4">
                <NuxtLink to="/management" class="mb-4 font-bold text-xl">Admin</NuxtLink>
                <NuxtLink to="/management/posts" class="mb-2">Posts</NuxtLink>
                <NuxtLink to="/management/profile" class="mb-2">Perfil</NuxtLink>
            </aside>
            <div class="flex-1 flex flex-col">
                <!-- Topbar -->
                <header
                    class="sticky top-0 z-40 bg-neutral-900 border-b border-neutral-800 flex items-center px-4 h-16"
                >
                    <span class="font-bold text-lg">Painel de Administração</span>
                </header>
                <!-- Content -->
                <main class="flex-1 p-4">
                    <slot />
                </main>
            </div>
        </div>
        <!-- Footer -->
        <footer class="bg-neutral-800 text-center py-2 text-xs border-t border-neutral-700">
            &copy; {{ new Date().getFullYear() }} Microblog CMS
        </footer>
    </div>
</template>
