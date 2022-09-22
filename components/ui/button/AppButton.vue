<template>
  <b-button variant="success" v-on="$listeners">
    <slot name="prepend" />

    <span v-if="$slots.default !== undefined" class="button-text">
      <slot />
    </span>

    <slot name="append" />
  </b-button>
</template>

<script>
export default {
  name: 'AppButton'
}
</script>

<style scoped lang="scss">

</style>
