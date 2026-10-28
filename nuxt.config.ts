
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },

  devServer: {
    port: 3002,
  },

  css: ['~/assets/css/main.css'],

  app: {
    head: {
      title: 'Chhunly (Lycody) | Full-Stack Web Developer',
      meta: [
        {
          name: 'description',
          content:
            'Chhunly, also known as Lycody, is a web developer specializing in Vue.js, Nuxt.js, Node.js, Express.js, and practical DevOps learning.',
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
