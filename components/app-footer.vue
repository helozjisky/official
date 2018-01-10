<template>
  <div class="root">
    <div class="inner">
      <div class="links">
        <div class="link">
          <a href="mailto:info@pixelgram.jp">
            <div class="logo">
              <img src="/ftr_mail.svg" alt="mail">
            </div>
            <div class="url">
              info@pixelgram.jp
            </div>
          </a>
        </div>
        <div class="link">
          <a href="https://github.com/pixelgram" target="_blank" rel="noopener">
            <div class="logo">
              <img src="/ftr_github.svg" alt="GitHub">
            </div>
            <div class="url">
              github.com<span>/pixelgram</span>
            </div>
          </a>
        </div>
        <div class="link">
          <a href="https://medium.com/pixelgram" target="_blank" rel="noopener">
            <div class="logo">
              <img src="/ftr_medium.svg" alt="Medium">
            </div>
            <div class="url">
              medium.com<span>/pixelgram</span>
            </div>
          </a>
        </div>
      </div>
      <div class="company">
        <img src="/ftr_logo.svg" alt="Pixelgram LLC.">
      </div>
      <div class="copylight">
        © 2017 Pixelgram LLC.
      </div>
    </div>
  </div>
</template>

<style scoped>
  .root {
    background: #000;
    padding: 60px 0 20px;
  }
  .inner {
    max-width: 980px;
    width: 100%;
    padding: 0 20px;
    margin: 0 auto;
  }
  .links {
    display: flex;
    justify-content: center;
    margin-bottom: 60px;
  }
  .link {
    width: 33.33333%;
    text-align: center;
  }
  .link a {
    display: inline-block;
  }
  .link:not(:last-child) {
    border-right: dotted 3px #999999;
  }
  .link .url{
    color: #fff;
    font-size: 12px;
    margin-top: 15px;
  }
  .link .url span {
    color: #009688;
  }
  .company {
    text-align: center;
    margin-bottom: 50px;
  }
  .copylight {
    color: #8d8d8d;
    font-size: 10px;
    text-align: center;
  }
  @media screen and (max-width: 425px) {
    .root {
      padding: 0;
      padding-bottom: 10px;
    }
    .links {
      flex-direction: column;
    }
    .link {
      width: 100%;
      border-bottom: 1px dotted #999;
    }
    .link:not(:last-child) {
      border-right: none;
    }
    .link a {
      display: block;
      padding: 40px 0 35px;
    }
    .link .url {
      font-size: 15px;
    }
  }
</style>