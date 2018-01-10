<template>
  <div id="policy" class="root">
    <div class="inner">
      <app-title title="/ttl_policy.svg" type="white" />
      <div class="copy">
        Possibility to reach the moon.
        <br />
        月まで届く可能性を求めて。
      </div>
      <div class="moon">
        <img src="/tuki_policy.svg" alt="moon">
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
    background: #000;
    padding: 120px 0;
  }
  .inner {
    max-width: 980px;
    width: 100%;
    padding: 0 10px;
    margin: 0 auto;
  }
  .copy {
    text-align: center;
    font-size: 12px;
    line-height: 2;
    letter-spacing: 1;
    margin-bottom: 40px;
    color: #fff;
  }
  .moon {
    text-align: center;
  }
  @media screen and (max-width: 600px) {
    .root {
      padding: 60px 0;
    }
  }
</style>
