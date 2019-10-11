<template>
  <div class="app">
    <VueMarkdown/>
  </div>
</template>

<script>
import VueMarkdown from './components/VueMarkdown.vue'
export default {
  name: 'App',
  components: {
    VueMarkdown
  }
}
</script>

<style>
.app{
  margin: 20px 30px;
}
</style>