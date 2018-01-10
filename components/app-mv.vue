<template>
  <div id="home" class="root">
    <div id="bg"></div>
    <div class="moon"></div>
    <div class="copy"></div>
    <div class="scroll" v-scroll-to="'#policy'"></div>
  </div>
</template>

<script>
  import Fish from '~/assets/Fish.js'
  export default{
    mounted(){
      this.p5 = new this.$p5(this.sketch)
      this.initWindowSize()
      window.addEventListener('resize', this.onResize)
    },
    beforeDestroy () {
      window.removeEventListener('resize', this.onResize)
    },
    data(){
      return {
        fishImageMap: [],
        fishes: [],
        fishType: 5,
        width: null,
        height: null,
        p5: null,
        render: null,
      }
    },
    methods: {
      sketch (p) {
        p.preload = this.preload(p)
        p.setup = this.setup(p)
        p.draw = this.draw(p)
      },
      initWindowSize () {
        this.width = window.innerWidth
        this.height = window.innerHeight
      },
      onResize () {
        this.initWindowSize()
        this.p5.resizeCanvas(this.width, this.height)
        this.fishes.forEach((fish) => {
          fish.resizeCanvasSize(this.width, this.height)
        })
      },
      displayFish(p){
        this.fishes = Array.from({length: 10}, (_, i) => {
          const type = Math.floor(Math.random() * this.fishType)
          const fish = new Fish(p, this.width, this.height, this.fishImageMap[type])
          fish.display()
          return fish
        })
      },
      preload(p){
        this.fishImageMap = Array.from({length: this.fishType}, (_, i) => {
          const path = `/fish${i + 1}.svg`
          return p.loadImage(path)
        })
      },
      setup(p){
        return () => {
          this.render = p.createCanvas(this.width, this.height)
          this.render.parent('#bg')
          this.displayFish(p)
        }
      },
      draw(p){
        return () => {
          p.clear()
          this.fishes.forEach((fish) => {
            fish.swim()
          })
        }
      }
    }
  }
</script>

<style scoped>
  .root {
    position: relative;
    width: 100vw;
    height: calc(100vh + 1px);
    background: url('/town.svg') repeat-x bottom;
    background-size: 1200px;
    overflow: hidden;
  }
  #bg {
    position: absolute;
    top: 0;
    left: 0;
    z-index: 1;
  }
  .moon {
    background: url('/tuki_mv.svg') no-repeat;
    width: 74px;
    height: 72px;
    position: absolute;
    top: 75px;
    left: 50px;
  }
  .copy {
    background: url('/txt_mv.svg') no-repeat;
    width: 500px;
    height: 22px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-size: contain;
  }
  .scroll {
    background: url('/scroll.svg') no-repeat;
    width: 35px;
    height: 31px;
    position: absolute;
    bottom: 70px;
    left: 50%;
    transform: translateX(-50%);
    cursor: pointer;
    z-index: 999;
  }
  @media screen and (max-width: 600px) {
    .root {
      background-size: contain;
    }
    .moon {
      top: 80px;
      left: 20px;
    }
    .copy {
      width: 320px;
      height: 15px;
    }
  }
</style>
