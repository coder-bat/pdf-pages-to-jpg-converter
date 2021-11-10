export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'PDF pages to image converter - coder-bat',
    meta: [{
      charset: 'utf-8'
    },
    {
      name: 'viewport',
      content: 'width=device-width, initial-scale=1'
    },
    {
      hid: 'description',
      name: 'description',
      content: 'Convert individual pdf pages to jpg in selected quality'
    },
    {
      name: 'format-detection',
      content: 'telephone=no'
    },
    ],
    link: [{
      rel: 'icon',
      type: 'image/x-icon',
      href: '/favicon.ico'
    }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '@/assets/css/main.css',
    '~/node_modules/animate.css/animate.min.css'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    {
      src: '@/plugins/pdf',
      mode: 'client'
    }
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
    // https://go.nuxtjs.dev/stylelint
    '@nuxtjs/stylelint-module',
    '@nuxtjs/tailwindcss',
    '@nuxtjs/fontawesome',
    '@nuxtjs/dotenv'
  ],

  fontawesome: {
    icons: {
      solid: ['faArrowLeft', 'faComment', 'faShareAlt', 'faHome', 'faAdjust', 'faChevronLeft', 'faChevronRight', 'faQuoteRight', 'faTimes', 'faDownload'],
      brands: ['faWhatsapp', 'faFacebookF', 'faTwitter', 'faYoutube', 'faInstagram', 'faPinterest']
    }
  },

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    '@nuxtjs/proxy',
    'vue-social-sharing/nuxt',
    // '@nuxtjs/i18n',
  ],

  // i18n: {
  //   // baseUrl: 'https://my-nuxt-app.com'
  //   locales: [
  //     {
  //       code: 'en',
  //       iso: 'en-US',
  //       name: 'English',
  //       flag: 'australian-flag.png'
  //     },
  //     {
  //       code: 'hi',
  //       iso: 'hi-IN',
  //       name: 'Hindi',
  //       flag: 'indian-flag.png'
  //     },
  //   ],
  //   defaultLocale: 'hi',
  //   vueI18n: {
  //     fallbackLocale: 'en',
  //     messages: {
  //       en: {
  //         welcome: 'Welcomed',
  //       },
  //       hi: {
  //         welcome: 'Hi',
  //       },
  //     }
  //   },
  // },

  publicRuntimeConfig: { baseURL: process.env.NUXT_BASE_URL },

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    baseURL: 'headless.local',
    proxyHeaders: false,
    credentials: false
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},

  server: {
    port: process.env.PORT || 8081,
  }
}
