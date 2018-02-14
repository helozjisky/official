<template>
  <div id="purpose" class="root">
    <div class="inner">
      <app-title title="/ttl_purpose.svg" type="black" />
      <p class="text">ロゴの使用は下記の場合のみ利用できます。</p>
      <div class="list">
        ・自社サービスによる掲載<br>
        ・スポンサー、紹介等を目的とする掲載
      </div>
    </div>
  </div>
</template>

<script>
import appTitle from '~/components/app-title'
export default {
  components: {
    appTitle
  }
}
</script>


<style scoped>
  .root {
    background: #fff;
    padding: 120px 0;
    border-bottom: dotted 2px #999999;
  }
  .inner {
    max-width: 652px;
    width: 100%;
    padding: 0 20px;
    margin: 0 auto;
  }
  .text {
    text-align: center;
    margin-bottom: 40px;
    font-size: 14PX;
  }
  .list {
    font-size: 12px;
    line-height: 2.5;
  }
  @media screen and (max-width: 600px){
    .root {
      padding: 60px 0;
    }
  }
</style>
