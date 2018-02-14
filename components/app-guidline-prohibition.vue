<template>
  <div id="prohibition" class="root">
    <div class="inner">
      <app-title title="/ttl_prohibition.svg" type="black" />
      <p class="text">以下の行為での使用は一切禁止しております。</p>
      <ul class="lists">
        <li>使用目的以外で許可なく無断で使用する。</li>
        <li>ロゴの変形、加工、改変</li>
        <li>他社の商品名、サービス名、商標、ロゴ、企業名等の一部として使用する。</li>
        <li>別途許諾を得ることなく、何らかの雇用関係、提携関係、パートナーシップ関係等があること。</li>
        <li>当社による承認・後援・推奨等を示唆するような方法でロゴを使用する。</li>
        <li>当社又は当社サービスの誹謗中傷又はその評判を貶めるような方法でロゴを使用すること。</li>
        <li>違法、反社会的勢力に関連する内容、わいせつ又は公序良俗に反する内容の媒体等でロゴを使用すること。</li>
        <li>その他、不適切と判断する方法でロゴを使用すること。</li>
      </ul>
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
  .lists {
    font-size: 12px;
    list-style-type: decimal;
    padding-left: 0px;
  }
  .lists li {
    margin-bottom: 15px;
  }
  @media screen and (max-width: 600px){
    .root {
      padding: 60px 0;
    }
  }
</style>
