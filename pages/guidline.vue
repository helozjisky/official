<template>
  <div class="root">
    <app-guidline-purpose />
    <app-guidline-prohibition />
    <app-guidline-size />
    <app-guidline-color />
    <app-guidline-isolation />
  </div>
</template>

<script>
  import appGuidlinePurpose from '~/components/app-guidline-purpose'
  import appGuidlineProhibition from '~/components/app-guidline-prohibition'
  import appGuidlineSize from '~/components/app-guidline-size'
  import appGuidlineColor from '~/components/app-guidline-color'
  import appGuidlineIsolation from '~/components/app-guidline-isolation'
  export default {
    layout: 'guidline',
    components: {
      appGuidlinePurpose,
      appGuidlineProhibition,
      appGuidlineSize,
      appGuidlineColor,
      appGuidlineIsolation
    }
  }
</script>

<style scoped>
</style>

