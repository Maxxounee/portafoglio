// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    compatibilityDate: '2024-04-03',
    devtools: {enabled: true},
    modules: [
        '@nuxt/eslint',
        '@nuxt/image',
        '@pinia/nuxt',
        '@hypernym/nuxt-gsap',
        '@nuxtjs/stylelint-module',
        // ['@nuxtjs/stylelint-module', {}],
    ],
    image: {
        quality: 80,
        format: ['webp'],

        presets: {
            default: {
                quality: 80,
                format: 'webp',
            },
        },
    },
    composables: true,
    extraPlugins: {
        scrollTrigger: true,
        draggable: true,
    },
    gsap: {
        composables: true,
        extraPlugins: {
            scrollTrigger: true,
            draggable: true,
        },
    },
    eslint: {
        // checker: true,
        config: {
            stylistic: {
                indent: 'tab',
                semi: true,
            },
        },
    },
    css: ['@/assets/styles/global.scss'],
})
