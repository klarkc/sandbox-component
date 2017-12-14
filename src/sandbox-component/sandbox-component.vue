<template lang="html">
  <strong>{{ text }}</strong>
</template>

<script>
/**
 * Component documentation
 */
export default {
  name: 'sandbox-component',
  props: {
    /**
     * The component text
     */
    text: {
      type: String,
      default: '',
      required: true
    },
  },
}
</script>
