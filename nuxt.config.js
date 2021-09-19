import favicons from './config/favicons'
const baseURL = process.env.APP_ENV === 'local' ? 'http://localhost' : 'https://lotus-base.com'
export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  generate: {
    fallback: true,
  },

  publicRuntimeConfig: { baseURL },

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Lotus Base',
    htmlAttrs: {
      lang: 'ja',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'theme-color', name: 'theme-color', content: '#222222' },
      {
        hid: 'description',
        name: 'description',
        content: 'Music, Vietnam, Technology, and Many Good Things. | Ryo Kobayashi official website.',
      },
      { hid: 'og:site_name', property: 'og:site_name', content: 'Lotus Base' },
      { hid: 'og:type', property: 'og:type', content: 'article' },
      { hid: 'og:url', property: 'og:url', content: baseURL },
      { hid: 'og:title', property: 'og:title', content: 'Lotus Base' },
      {
        hid: 'og:description',
        property: 'og:description',
        content: 'Music, Vietnam, Technology, and Many Good Things. | Ryo Kobayashi official website.',
      },
      { hid: 'og:image', property: 'og:image', content: `${baseURL}/img/ogp/logo-fb.png` },
      { hid: 'twitter:card', name: 'twitter:card', content: 'summary_large_image' },
      { hid: 'twitter:site', name: 'twitter:site', content: '@ryoluo' },
    ],
    link: favicons,
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['@/assets/scss/_global.scss'],

  styleResources: {
    scss: ['@/assets/scss/_variables.scss'],
  },

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    '@nuxtjs/fontawesome',
  ],

  fontawesome: {
    icons: {
      solid: ['faExternalLinkAlt'],
      brands: ['faTwitter', 'faInstagram', 'faGithub'],
    },
  },
  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxt/http',
    '@nuxtjs/axios',
    '@nuxtjs/style-resources',
  ],

  router: {},

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: { baseURL },
  http: { baseURL },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
}
