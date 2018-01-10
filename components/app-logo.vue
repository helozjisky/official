<template>
  <div class="root">
    <div class="inner">
      <div class="logo">
        <a href="/">
          <img src="/hdr_logo.svg" alt="Pixelgram">
        </a>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
  }
</script>

<style scoped>
  .root {
    position: absolute;
    top: 30px;
    left: 0;
    width: 100%;
    z-index: 10;
  }
  .inner {
    padding: 0 10px;
    max-width: 980px;
    width: 100%;
    margin: 0 auto;
  }
  .logo {
    position: relative;
    display: inline-block;
  }
</style>