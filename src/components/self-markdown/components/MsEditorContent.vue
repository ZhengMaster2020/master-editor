<template>
  <!-- 主要内容区域 -->
  <div class="editor-content">
      <!--markdown编辑器区-->
    <div class="markdown-body">
      <textarea :ref="mdEdit" class="md_textarea_content" v-model="markString">
      </textarea>
    </div>
      <!--解析成html区-->
    <div class="html-body">
      <p v-html="htmlString"></p>
    </div>
  </div>
</template>

<script>
//解析mardown语法的库
import marked from 'marked'
//对代码进行语法高亮的库
import hljs from 'highlight.js'

export default {
  name: 'MsEditorContent',
  data () {
    return {
      markString: '',
      htmlString: '',
      mdEdit: ''
    }
  },
  watch: {
    // 监测markdown的源码值，如有变动则进行编译
    markString (source) {
      // marked.js库 设置一些解析markdown源码配置
      marked.setOptions({
        renderer: new marked.Renderer(),
        highlight: function(code) {
          return hljs.highlightAuto(code).value
        },
        gfm: true,
        pedantic: false,
        breaks: false,
        sanitize: false,
        smartLists: true,
        smartypants: false,
        xhtml: false
      })
      this.htmlString = marked(source)
    },
  },
  mounted () {
    this.markString = this.$store.state.markString
    this.mdEdit = this.$store.state.mdEdit
  }
}
</script>

<style scoped>
.editor-content{
  display: flex;
  position: relative;
  box-sizing: border-box;
  overflow: hidden;
  height: calc(100% - 40px);
  width: 100%;
  min-height: 500px;
  text-align: left;
  font-size: 16px;
  border: 1px solid #eeeff1;
  border-top: none;
}
.html-body{
  background-color: rgb(247, 247, 247);
  padding: 15px;
  overflow: auto;
  flex-grow: 1;
  word-wrap: break-word;
}
.md_textarea_content{
  width: 100%;
  height: 100%;
  padding: 15px;
  overflow: auto;
  box-sizing: border-box;
  resize: none;
  outline: none;
  border: none;
  background-color: transparent;
  font-size: 14px;
  color: #232323;
  line-height: 24px;
}
.markdown-body{
  background-color: rgb(247, 247, 247);
  width: 50%;
  box-sizing: border-box;
  outline: none;
  border-right: 1px solid #d3cdcd;
  flex-shrink: 0;
}
</style>