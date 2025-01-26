export default defineNuxtConfig({
  app: {
    head: {
      title: '@camarm - French Junior Developer',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { hid: 'description', name: 'description', content: '' },
        { name: 'format-detection', content: 'telephone=no' },
        { name: 'og:name', content: 'camarm, 15yo french developer and growing sysadmin.' },
        { name: 'og:image', content: 'https://github.com/camarm-dev/www.camarm.dev/raw/master/.github/header.png' }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/icon.png' },
        { rel: 'preload', type: 'image/x-icon', href: '@/assets/images/profil-armand.png' },
        { rel: 'preload', href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.1/js/all.min.js' },
        { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.1/css/all.min.css' }
      ],
      script: [
        // <script src="https://kit.fontawesome.com/628c8d2499.js" crossOrigin="anonymous"></script>
        { src: '/landing.js', body: true, defer: true },
        { src: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.1/js/all.min.js', defer: true, body: true }
      ]
    }
  },

  css: [
    '@/assets/css/base.css',
    '@/assets/fonts/Amiko/Amiko.css',
    '@/assets/fonts/Emoji/Emoji.css'
  ],

  components: true,

  buildModules: [
    '@nuxt/typescript-build'
  ],

  runtimeConfig: {
    public: {
      backend: process.env.BACKEND
    }
  }
})
