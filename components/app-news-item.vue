<template>
  <div class="news">
    <div class="publishedAt">
      {{toDateFormat(news.datetime)}}
    </div>
    <div class="title">
      {{news.title}}
    </div>
    <div class="detail" v-html="news.detail"></div>
  </div>
</template>

<script>
  import m from 'moment'
  export default {
    props: ['news'],
    methods: {
      toDateFormat (str) {
        return m(str).format('YYYY.MM.DD')
      }
    }
  }
</script>

<style scoped>
  .publishedAt {
    color: #000;
    font-size: 10px;
    margin-bottom: 5px;
  }
  .title {
    font-weight: bold;
    color: #222222;
    font-size: 14px;
    padding-bottom: 5px;
    margin-bottom: 10px;
    border-bottom: dotted 2px #ddd;
  }
  .detail {
    font-size: 12px;
  }
  .news {
    margin-bottom: 40px;
  }
</style>

