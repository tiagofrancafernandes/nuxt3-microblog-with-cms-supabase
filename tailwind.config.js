module.exports = {
    darkMode: 'class',
    //   darkMode: 'selector',
    // darkMode: 'media', // or 'class' for class-based dark mode
    content: [
        './components/**/*.{vue,js,ts}',
        './layouts/**/*.vue',
        './pages/**/*.vue',
        './app.vue',
        './plugins/**/*.{js,ts}',
        './nuxt.config.{js,ts}',
    ],
    theme: {
        extend: {},
    },
    plugins: [],
};
