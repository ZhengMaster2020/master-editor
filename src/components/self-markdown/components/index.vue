<template>
  <div :style="{width: width, height: height}">
    <VueMarkdown/>
  </div>
</template>

<script>
import VueMarkdown from './VueMarkdown.vue'
export default {
  name: 'SelfMarkDown',
  components: {
    VueMarkdown
  },
  props: {
    width: {
      type: String,
      default: '900px'
    },
    height: {
      type: String,
      default: '500px'
    }
  }
}
</script>