<template>
  <div id="isolation" class="root">
    <app-title title="/ttl_isolation.svg" type="black" />
    <p class="text">各ロゴの周囲に決められたスペースを作成してください。</p>
    <div class="black">
      <div class="inner">
        <img src="/guidline-isolation-logo.svg" alt="">
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
  }
  .inner {
    max-width: 960px;
    width: 100%;
    padding: 0 20px;
    margin: 0 auto;
  }
  .text {
    text-align: center;
    margin-bottom: 40px;
    font-size: 14PX;
    line-height: 2.5;
  }
  .black {
    background: #F1F1F1;
    text-align: center;
    padding: 50px 10px 40px;
  }
  @media screen and (max-width: 600px){
    .root {
      padding: 60px 0;
    }
  }
</style>
