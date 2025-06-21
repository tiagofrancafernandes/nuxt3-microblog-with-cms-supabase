<template>
    <div class="flex gap-x-1">
        <div class="block md:hidden">
            <button
                type="button"
                @click.stop.prevent="toggle"
                class="cursor-pointer px-1 pb-1 rounded-full flex items-center content-center justify-center text-xl"
            >
                <span class="sr-only">Color mode: {{ $colorMode.value }}</span>
                <span v-if="$colorMode.value === 'dark'">🌙</span>
                <span v-else-if="$colorMode.value === 'system'">💻</span>
                <span v-else-if="$colorMode.value === 'light'">☀️</span>
                <span v-else>🌙</span>
            </button>
        </div>

        <div class="hidden md:block">
            <select
                v-model="$colorMode.preference"
                class="cursor-pointer border border-transparent hover:border-gray-300 dark:hover:border-gray-100 px-1 pb-1 rounded-full flex items-center content-center justify-center text-xl"
            >
                <option value="system">💻 System</option>
                <option value="light">☀️ Light</option>
                <option value="dark">🌙 Dark</option>
                <option v-if="false" value="sepia">Sepia</option>
            </select>
        </div>
    </div>
</template>
<script setup lang="ts">
const colorMode = useColorMode();

const toggle = () => {
    if (import.meta.client && !import.meta.env.SSR) {
        console.log(colorMode.preference, colorMode);
    }

    let values = [
        'light',
        'dark',
        // 'system',
    ];
    let index = values.indexOf(colorMode.preference);
    index++;

    if (index >= values.length) {
        index = 0;
    }

    let newValue = values[index];

    colorMode.preference = newValue;
};
</script>

<style>
body {
    background-color: #fff;
    color: rgba(0, 0, 0, 0.8);
}
.dark-mode body {
    background-color: #091a28;
    color: #ebf4f1;
}
.sepia-mode body {
    background-color: #f1e7d0;
    color: #433422;
}
</style>
