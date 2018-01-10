<template>
  <div class="product">
    <div class="image">
      <img :src="product.src.url" alt="">
    </div>
    <div class="info">
      <div class="name">
        {{product.name}}
      </div>
      <div class="detail">
        {{product.detail}}
      </div>
      <div class="releasedAt">
        リリース: {{toDateFormat(product.releasedAt)}}
      </div>
      <div class="link">
        <span class="text">詳細</span>
        <img class="arrow" src="/arrow_r.svg" alt="">
        <a class="href" :href="product.href" target="_blank" rel="noopener">{{product.href}}</a>
      </div>
    </div>
  </div>
</template>

<script>
  import m from 'moment'
  export default {
    props: ['product'],
    methods: {
      toDateFormat (str) {
        return m(str).format('YYYY.MM.DD')
      }
    }
  }
</script>

<style scoped>
  .product {
    display: flex;
    font-family:"Yu Gothic Medium", "游ゴシック Medium", YuGothic, "游ゴシック体", "ヒラギノ角ゴ Pro W3", "メイリオ", sans-serif;
  }
  .product:nth-child(2n) {
    flex-direction: row-reverse;
  }
  .product:nth-child(2n-1) .image{
    margin-right: 50px;
  }
  .product:nth-child(2n) .image{
    margin-left: 50px;
  }
  .product:nth-child(2n-1) .info{
    border-left: 2px dotted #ddd;
    padding: 20px 0 20px 20px;
  }
  .product:nth-child(2n) .info{
    border-right: 2px dotted #ddd;
    padding: 20px 20px 20px 0;
  }
  .image {
    max-width: 365px;
    width: 100%;
  }
  .name {
    font-weight: bold;
    font-size: 15px;
    margin-bottom: 15px;
  }
  .detail {
    font-size: 12px;
    color: #222222;
    margin-bottom: 10px;
  }
  .releasedAt {
    color: #666666;
    font-size: 10px;
    padding-bottom: 20px;
    border-bottom: dotted 2px #ddd;
    margin-bottom: 30px;
  }
  .link {
    color: #222222;
    font-size: 12px;
  }
  .link .text {
    margin-right: 3px;
  }
  .link .href {
    margin-left: 30px;
  }
  .link .href:hover {
    color: #009688;
  }
  @media screen and (max-width: 600px){
    .product {
      flex-direction: column !important;
    }
    .product:nth-child(2n) .image {
      margin-left: 0;
    }
    .product:nth-child(2n-1) .image {
      margin-right: 0;
    }
    .image {
      max-width: none;
      text-align: center;
    }
    .image img {
      width: 100%;
    }
    .product:nth-child(2n-1) .info {
      border-left: none;
      padding: 20px 0 0;
    }
    .product:nth-child(2n) .info {
      border-right: none;
      padding: 20px 0 0;
    }
    .link {
      text-align: right;
    }
    .releasedAt {
      margin-bottom: 10px;
      border-bottom: none;
      padding-bottom: 0;
    }
    .text, .arrow {
      display: none;
    }
  }
</style>

