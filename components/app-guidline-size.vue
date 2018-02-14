<template>
  <div id="size" class="root">
    <div class="inner">
      <app-title title="/ttl_size.svg" type="black" />
      <p class="text">Webコンテンツで使用する場合、<br />下記のpx以上で使用してください。それ以下での使用はご遠慮ください。</p>
      <div class="logos">
        <div class="logo">
          <img src="/guidline-size-logo01.svg" alt="">
        </div>
        <div class="logo">
          <img src="/guidline-size-logo02.svg" alt="">
        </div>
        <div class="logo">
          <img src="/guidline-size-logo03.svg" alt="">
        </div>
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
    max-width: 1000px;
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
  .logos {
    text-align: center;
  }
  .logo {
    display: inline-block;
    margin: 0 20px;
    width: 200px;
  }
  @media screen and (max-width: 600px){
    .root {
      padding: 60px 0;
    }
  }
</style>
