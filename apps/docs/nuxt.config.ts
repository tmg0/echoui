// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: false,
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss', '@nuxt/content'],
  css: ['~/assets/css/main.css'],
  nitro: { preset: 'service-worker' },
  content: {
    markdown: {
      tags: {
        h1: 'ProseH1',
        hr: 'ProseHr',
        p: 'ProseP'
      }
    }
  }
})
