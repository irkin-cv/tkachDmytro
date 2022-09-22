<template>
  <svg
    v-bind="$attrs"
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    xmlns:xlink="http://www.w3.org/1999/xlink"
    fill="none"
  >
    <slot />
  </svg>
</template>

<script>
export default {
  name: 'SvgWrapper'
}
</script>

<style scoped>

</style>
