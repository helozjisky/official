module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    meta: [
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:site', content: '@pixelgram' },
      { name: 'twitter:title', content: 'Pixelgram | 合同会社ピクセルグラム' },
      { name: 'twitter:description', content: '合同会社ピクセルグラム（Pixelgram LLC）はウェブサイトやサービスの企画・運営・開発を行っています。' },
      { name: 'twitter:image', content: 'https://pixelgram.jp/card.jpg' },
      { name: 'twitter:image:alt', content: 'Pixelgram Logo' },

      { name: 'og:title', content: 'Pixelgram | 合同会社ピクセルグラム' },
      { name: 'og:description', content: '合同会社ピクセルグラム（Pixelgram LLC）はウェブサイトやサービスの企画・運営・開発を行っています。' },
      { name: 'og:type', content: 'website' },
      { name: 'og:url', content: 'https://pixelgram.jp' },
      { name: 'og:image', content: 'https://pixelgram.jp/card.jpg' }
    ]
  },
  plugins: [
    { src: '~/plugins/scrollto', ssr: false },
    { src: '~/plugins/p5.js', ssr: false }
  ],
  modules: [
    '@nuxtjs/pwa'
  ],
  workbox: {
    dev: true
  },
  meta: {
    mobileAppIOS: true,
    viewport: 'width=device-width, initial-scale=1',
    name: 'Pixelgram | 合同会社ピクセルグラム',
    description: '合同会社ピクセルグラム（Pixelgram LLC）はウェブサイトやサービスの企画・運営・開発を行っています。',
    theme_color: '#000',
    lang: 'ja'
  },
  manifest: {
    name: 'Pixelgram',
    short_name: 'Pixelgram',
    start_url: '/',
    display: 'standalone',
    background_color: '#fff',
    description: '合同会社ピクセルグラム（Pixelgram LLC）はウェブサイトやサービスの企画・運営・開発を行っています。'
  },
  /*
  ** Customize the progress-bar color
  */
  loading: {
    color: '#000',
    height: '0px'
  },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLINT on save
    */
    extend (config, ctx) {
      if (ctx.dev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: new RegExp('(js|vue)$'),
          exclude: new RegExp('(node_modules)')
        })
      }
      if (ctx.isClient) {
        config.module.rules.push({
          test: new RegExp('.stylus'),
          use:
            [
              'stylus-loader'
            ]
        })
      }
    }
  }
}
