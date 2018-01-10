<template>
  <div>
    <h1 :class="['title', isBlack ? 'black' : 'white']">
      <img :src="title" alt="">
    </h1>
  </div>
</template>

<script>
  export default {
    props: [
      'title',
      'type'
    ],
    computed: {
      isBlack () {
        return this.type === 'black'
      }
    }
  }
</script>

<style scoped>
  .title {
    text-align: center;
    padding-bottom: 50px;
    margin-bottom: 30px;
  }
  .title.black {
    background: url('/title-b.svg') no-repeat center bottom;
  }
  .title.white {
    background: url('/title-w.svg') no-repeat center bottom;
  }
</style>
