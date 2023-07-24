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
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        { rel: 'stylesheet', href: 'https://cdn.jsdelivr.net/npm/swiper@10/swiper-bundle.min.css' },
        { rel: 'preload', type: 'image/x-icon', href: '@/assets/images/profil-armand.png' }
      ],
      script: [
        // <script src="https://kit.fontawesome.com/628c8d2499.js" crossOrigin="anonymous"></script>
        { src: 'https://kit.fontawesome.com/628c8d2499.js', crossOrigin: 'anonymous' }
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

  swiper: {
    modules: ['mousewheel']
  },

  runtimeConfig: {
    public: {
      backend: process.env.BACKEND
    }
  }
})
