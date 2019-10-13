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
  margin: 10px;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
}
</style>