<template>
  <div id="products" class="root">
    <div class="inner">
      <app-title title="/ttl_products.svg" type="black" />
      <div class="products">
        <app-products-item v-for="product in products" :key="product.id" :product="product" />
      </div>
    </div>
  </div>
</template>

<script>
import appTitle from '~/components/app-title'
import appProductsItem from '~/components/app-products-item'
export default {
  props: [
    'products'
  ],
  components: {
    appTitle,
    appProductsItem
  },
}
</script>


<style scoped>
  .root {
    background: #fff;
    padding: 120px 0;
    border-bottom: dotted 2px #999999;
  }
  .inner {
    max-width: 980px;
    width: 100%;
    padding: 0 20px;
    margin: 0 auto;
  }
  .product:not(:last-child) {
    padding-bottom: 40px;
    margin-bottom: 40px;
    border-bottom: dotted 2px #ddd;
  }
  @media screen and (max-width: 600px) {
    .root {
      padding: 60px 0;
    }
  }
</style>
