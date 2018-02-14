<template>
  <div id="color" class="root">
    <app-title title="/ttl_color.svg" type="black" />
    <p class="text">ロゴの色は、原則として黒と白のみです。それ以外の色は使用しないでください。</p>
    <div class="black">
      <div class="inner">
        <img src="/guidline-color-black.svg" alt="">
      </div>
    </div>
    <div class="white">
      <div class="inner">
        <img src="/guidline-color-white.svg" alt="">
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
    padding: 50px 10px;
  }
  .white {
    background: #000;
    text-align: center;
    padding: 50px 10px;
  }
  @media screen and (max-width: 600px){
    .root {
      padding: 60px 0;
    }
  }
</style>
