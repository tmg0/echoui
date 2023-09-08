// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss', '@nuxt/content'],
  css: ['~/assets/css/main.css'],
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
