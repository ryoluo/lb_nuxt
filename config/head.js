import { baseURL, isLocal } from '../const'
import favicons from './favicons'

export default {
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
  script: isLocal
    ? []
    : [
        { async: true, src: 'https://www.googletagmanager.com/gtag/js?id=G-W9KELVBTN2' },
        {
          vmid: 'gtag',
          hid: 'gtag',
          type: 'text/javascript',
          innerHTML: `window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());

                    gtag('config', 'G-W9KELVBTN2');`,
        },
      ],
  __dangerouslyDisableSanitizersByTagID: {
    gtag: ['innerHTML'],
  },
  link: favicons,
}
