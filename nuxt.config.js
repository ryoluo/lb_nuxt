import axios from 'axios'
import head from './config/head'
import { isLocal, baseURL, proxyURL } from './const'

export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  generate: {
    fallback: true,
    routes() {
      return axios.get(`${baseURL}/api/posts/index`).then((res) => {
        return res.data.map((post) => {
          return `/blog/${post.id}`
        })
      })
    },
  },

  publicRuntimeConfig: { baseURL },

  // Global page headers: https://go.nuxtjs.dev/config-head
  head,

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
    '@nuxtjs/google-analytics',
    '@nuxtjs/sitemap',
    '@nuxtjs/style-resources',
  ],

  router: {},

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: { proxy: true },
  proxy: { '/api/': proxyURL },
  http: { baseURL },
  googleAnalytics: {
    id: 'UA-142986852-1',
    dev: isLocal,
  },
  sitemap: {
    exclude: ['/open/*'],
    hostname: baseURL,
    trailingSlash: true,
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
}
