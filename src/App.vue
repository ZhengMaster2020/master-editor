<template>
  <div class="app">
    <SelfMarkdown/>
  </div>
</template>

<script>
import SelfMarkdown from './components/self-markdown/index.js'
export default {
  name: 'App',
  components: {
    SelfMarkdown
  }
}
</script>

<style>
.app{
  margin: 20px 30px;
}
</style>