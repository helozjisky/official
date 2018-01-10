<template>
  <div class="root">
    <div class="inner">
      <div class="links">
        <div class="link" v-scroll-to="'#home'">
          Home
        </div>
        <div class="link" v-scroll-to="'#policy'">
          Policy
        </div>
        <div class="link" v-scroll-to="'#news'">
          News
        </div>
        <div class="link" v-scroll-to="'#products'">
          Products
        </div>
        <div class="link" v-scroll-to="'#about'">
          About
        </div>
        <div class="link">
          <a href="https://github.com/pixelgram" target="_blank" rel="noopener">
          GitHub
          </a>
        </div>
        <div class="link">
          <a href="https://medium.com/pixelgram" target="_blank" rel="noopener">
            Medium
          </a>
        </div>
        <div class="link">
          <a href="mailto:info@pixelgram.jp" >
            Contact
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
  .root {
    position: absolute;
    top: 31px;
    right: 0;
    width: 100%;
    z-index: 11;
  }
  .inner {
    padding: 0 10px;
    max-width: 980px;
    width: 100%;
    margin: 0 auto;
  }
  .links {
    text-align: right;
  }
  .link {
    display: inline-block;
    margin: 0 8px;
    cursor: pointer;
    color: #222222;
    font-size: 12px;
  }
  .link:hover, .link a:hover {
    color: #009688;
  }
  @media screen and (max-width: 600px) {
    .root {
      display: none;
    }
  }
</style>