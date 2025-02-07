import { FileSystemIconLoader } from 'unplugin-icons/loaders'

export default defineNuxtConfig({
  app: {
    head: {
      title: 'yuyinws',
    },
  },
  devtools: { enabled: true },
  extends: '@nuxt-themes/typography',
  modules: [
    '@nuxt/content',
    'unplugin-turbo-console/nuxt',
    '@unocss/nuxt',
    '@nuxtjs/color-mode',
    '@vueuse/nuxt',
    'nuxt-time',
    [
      'unplugin-icons/nuxt',
      {
        customCollections: {
          custom: FileSystemIconLoader(
            'assets/icons',
            svg => svg.replace(/^<svg /, '<svg fill="currentColor" '),
          ),
        },
      },
    ],
  ],
  css: [
    'assets/style/main.css',
  ],
  content: {
    documentDriven: true,
    highlight: {
      preload: ['ini'],
      theme: {
        // Default theme (same as single string)
        default: 'vitesse-light',
        // Theme used if `html.dark`
        dark: 'vitesse-dark',
        // Theme used if `html.sepia`
        sepia: 'monokai',
      },
    },
  },
  devServer: {
    host: '0.0.0.0',
    port: 3000,
  },
  colorMode: {
    classSuffix: '',
  },
  routeRules: {
    '/articles/**': { prerender: true },
    '/': { prerender: true },
    '/articles': { prerender: true },
  },
  nitro: {
    prerender: {
      crawlLinks: true,
    },
  },
})
