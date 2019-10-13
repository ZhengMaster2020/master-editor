<template>
  <div
    class="markdown" 
    ref="slef-md" 
    :style="{width: width, height: height}">
    <MsEditorMenu></MsEditorMenu>
    <MsEditorContent/>
  </div>
</template>

<script>
import MsEditorContent from './MsEditorContent.vue'
import MsEditorMenu from './MsEditorMenu.vue'

export default {
  name: 'SelfMarkDown',
  components: {
    MsEditorMenu,
    MsEditorContent
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
  },
  methods: {
    handleHtmlStr () {},
    handleMarkStr () {},
  },

  
}
</script>

<style scoped>
.markdown{
  width: 100%;
  height: 100%;
  border-radius: 5px;
  min-width: 700px;
  min-height: 300px;
  margin: 5px;
  overflow: hidden;
}
.markdown:hover{
  box-shadow: 0 0 10px #3e5048;
}
</style>