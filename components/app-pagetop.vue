<template>
  <div class="root">
    <div class="rocket" v-scroll-to="'#home'">
      <img src="/rocket_activ.svg" alt="">
    </div>
    <div class="dodai">
      <img src="/dodai.svg" alt="">
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      scrollY: null,
      windowH: null
    }
  },
  methods: {
    onResize () {
      this.windowH = window.innerHeight
    },
    onScroll () {
      this.scrollY = window.scrollY
    },
    getFooterY () {
      const footer = document.ge
    }
  },
  computed: {
    scrollYBottom () {
      return this.scrollY + this.windowH
    }
  },
  mounted () {
    window.addEventListener('scroll', this.onScroll)
    window.addEventListener('resize', this.onResize)
  }
}
</script>


<style scoped>
.root {
  width: calc(100%-100px);
  margin: 0 auto;
  position: relative;
}
.rocket {
  position: absolute;
  bottom: -47px;
  right: 12px;
  cursor: pointer;
}
.dodai {
  text-align: right;
}
</style>
