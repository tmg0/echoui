// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss', '@nuxt/content'],
  css: ['~/assets/css/main.css'],
  content: {
    documentDriven: true,
    markdown: {
      tags: {
        h1: 'ProseH1',
        h2: 'ProseH2',
        h3: 'ProseH3',
        hr: 'ProseHr',
        p: 'ProseP'
      }
    }
  }
})
