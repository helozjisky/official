<template>
  <div id="news" class="root">
    <div class="inner">
      <app-title title="/ttl_news.svg" type="black" />
      <div class="news">
        <app-news-item v-for="item in displayNews" :key="item.id" :news="item" />
      </div>
      <app-pager :maxPage="maxPage" :currentPage="p" @change="onChange" />
    </div>
  </div>
</template>

<script>
import appTitle from '~/components/app-title'
import appNewsItem from '~/components/app-news-item'
import appPager from '~/components/app-pager'
import moment from 'moment'
export default {
  props: [
    'news'
  ],
  data () {
    return {
      p: 1
    }
  },
  components: {
    appTitle,
    appNewsItem,
    appPager
  },
  methods: {
    onChange (p) {
      this.p = p
    }
  },
  computed: {
    per () {
      return 3
    },
    offset () {
      return (this.p - 1) * this.per
    },
    maxCount () {
      return this.news.length
    },
    maxPage () {
      return Math.ceil(this.maxCount / this.per)
    },
    displayNews () {
      const news = [...this.news].sort((a, b) => {
        return moment(a.datetime).isAfter(moment(b.datetime)) ? -1 : 1
      })
      return news.slice(this.offset, this.offset + this.per)
    }
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
  @media screen and (max-width: 600px){
    .root {
      padding: 60px 0;
    }
  }
</style>
