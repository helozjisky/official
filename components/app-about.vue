<template>
  <div id="about" class="root">
    <div class="inner">
      <app-title title="/ttl_about.svg" type="black" />
      <div class="about">
        <div class="logo">
          <img src="/logo.svg" alt="">
        </div>
        <div class="info">
          <div v-for="item in about" :key="item.id" class="row">
            <div class="name">{{item.name}}</div>
            <div class="value">
              <div v-if="Array.isArray(item.value)">
                <div v-for="value in item.value" :key="value.id">
                  {{value}}
                </div>
              </div>
              <div v-else>
                {{item.value}}
              </div>
            </div>
          </div>
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
  },
  computed: {
    about () {
      return [
        {
          name: '代表者',
          value: '上平 千晶'
        },
        {
          name: '役員',
          value: [
            '濱田 真旗',
            '小川 裕暉'
          ]
        },
        {
          name: '資本金',
          value: '10万円'
        },
        {
          name: '従業員',
          value: '3人'
        },
        {
          name: '本社所在地',
          value: [
            '〒552-0003 大阪府大阪市港区磯路2-2-22',
            'カーサアトレ201'
          ]
        },
        {
          name: '設立',
          value: '2017.10.16'
        },
        {
          name: '事業内容',
          value: 'Webサイト・Webサービスの企画・製作・開発・運営'
        },
      ]
    }
  }
}
</script>


<style scoped>
  .root {
    background: #fff;
    padding: 120px 0;
  }
  .inner {
    max-width: 652px;
    width: 100%;
    padding: 0 20px;
    margin: 0 auto;
  }
  .about {
    border-top: dotted 2px #dddddd;
    border-bottom: dotted 2px #dddddd;
    padding:  40px 0;
    display: flex;
    align-items: center
  }
  .logo {
    padding-right: 40px;
  }
  .info {
    border-left: dotted 2px #dddddd;
    padding-left: 25px;
  }
  .row {
    display: flex;
    font-size: 12px;
  }
  .row:not(:last-child) {
    margin-bottom: 20px;
  }
  .row .name {
    font-weight: bold;
    min-width: 90px;
  }
  @media screen and (max-width: 600px){
    .root {
      padding: 60px 0;
    }
    .about {
      flex-direction: column;
      border-top: none;
      border-bottom: none;
      padding: 0;
    }
    .logo {
      padding-right: 0;
      margin-bottom: 40px;
    }
    .info {
      border-left: none;
      padding-left: 0;
    }
  }
</style>
