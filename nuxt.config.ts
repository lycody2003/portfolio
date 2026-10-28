
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },

  devServer: {
    port: 3002,
  },

  css: ['~/assets/css/main.css'],

  app: {
  baseURL: process.env.NUXT_APP_BASE_URL || '/',

  head: {
    title: 'Chhunly (Lycody) | Full-Stack Web Developer',
      meta: [
        {
          name: 'description',
          content:
            'Portfolio of Chhunly (Lycody), a developer working with Vue.js, Nuxt.js, Node.js, Express.js, and DevOps technologies.',
        },
        {
          name: 'theme-color',
          content: '#10110f',
        },
        {
          name: 'viewport',
          content: 'width=device-width, initial-scale=1',
        },
      ],
    },
  },
})
