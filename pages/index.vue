<template>
  <div class="root">
    <app-mv />
    <app-policy />
    <app-news :news="news" />
    <app-products :products="products" />
    <app-about />
  </div>
</template>

<script>
  import appMv from '~/components/app-mv'
  import appPolicy from '~/components/app-policy'
  import appNews from '~/components/app-news'
  import appProducts from '~/components/app-products'
  import appAbout from '~/components/app-about'
  export default {
    components: {
      appMv,
      appPolicy,
      appNews,
      appProducts,
      appAbout
    },
    computed: {
      news () {
        return this.$store.state.news
      },
      products () {
        return this.$store.state.products
      }
    },
    async fetch ({store}) {
      if (!store.state.news) {
        await store.dispatch('fetchNews')
      }
      if (!store.state.products) {
        await store.dispatch('fetchProducts')
      }
    }
  }
</script>

<style scoped>
</style>

