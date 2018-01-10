<template>
  <div class="pager">
    <div class="inner">
      <div class="prev" @click="onChange(currentPage - 1)"><img src="/arrow_l.svg" alt=""></div>
      <div class="numbers">
        <div
          v-for="i in maxPage"
          :class="[currentPage == i ? 'current' : '', 'number']"
          :key="i"
          @click="onChange(i)"
        >
          {{ i }}
        </div>
      </div>
      <div class="next" @click="onChange(currentPage + 1)"><img src="/arrow_r.svg" alt=""></div>
    </div>
  </div>
</template>

<script>
export default {
  props: [
    'maxPage',
    'currentPage'
  ],
  methods: {
    onChange (p) {
      if (p > 0 && p < this.maxPage + 1) {
        this.$emit('change', p)
      }
    }
  }
}
</script>

<style scoped>
  .pager {
    text-align: center;
  }
  .inner {
    display: flex;
    justify-content: center;
    align-items: center
  }
  .numbers {
    display: flex;
  }
  .prev,.next,
  .number {
    cursor: pointer;
    font-size: 12px;
    padding: 5px;
    margin: 0 5px;
    font-weight: bold;
  }
  .number:hover, .number.current {
    color: #005f56;
  }
</style>
