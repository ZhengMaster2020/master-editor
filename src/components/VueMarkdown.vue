<template>
  <div class="markdown">
    <!-- 顶部功能按钮区 -->
    <div class="fun-area-menu" style="">
      <div class="fun-area-menu-left">

        <span class="fun-menu-btn">
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-jiacu"></use>
          </svg>
        </span>

        <span class="fun-menu-btn">
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-biaotiziti"></use>
          </svg>
        </span>

        <span class="fun-menu-btn">
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-shanchuxian"></use>
          </svg>
        </span>

        <span class="fun-menu-btn">
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-xiahuaxian"></use>
          </svg>
        </span>

        <span class="fun-menu-btn">
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-qingxie"></use>
          </svg>
        </span>

        <span class="fun-menu-btn">
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-youxuliebiao"></use>
          </svg>
        </span>

        <span class="fun-menu-btn">
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-wuxuliebiao"></use>
          </svg>
        </span>

        <span class="fun-menu-btn">
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-code"></use>
          </svg>
        </span>

        <span class="fun-menu-btn">
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-charubiaoge"></use>
          </svg>
        </span>

        <span class="fun-menu-btn">
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-link"></use>
          </svg>
        </span>

        <span class="fun-menu-btn">
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-tupian"></use>
          </svg>
        </span>

         <span class="fun-menu-btn">
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-emjio_"></use>
          </svg>
        </span>
      </div>
      <div class="fun-area-menu-right">
         <span class="fun-menu-btn">
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-save"></use>
          </svg>
        </span>

        <span class="fun-menu-btn">
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-shuanglan"></use>
          </svg>
        </span>

         <span class="fun-menu-btn">
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-yulanmoshi"></use>
          </svg>
        </span>

         <span class="fun-menu-btn">
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-zidongsuofangmoshi"></use>
          </svg>
        </span>

        <span class="fun-menu-btn">
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-Markdown"></use>
          </svg>
        </span>
      </div>
    </div>
    <!-- 主要内容区域 -->
    <div class="editor-content">
       <!--markdown编辑器区-->
      <div class="markdown-body">
        <textarea ref="ref_md_edit" class="md_textarea_content" v-model="markString">
        </textarea>
      </div>
        <!--解析成html区-->
      <div class="html-body">
        <p v-html="htmlString"></p>
      </div>
    </div>
  </div>
</template>

<script>
//解析mardown语法的库
import marked from 'marked'
//对代码进行语法高亮的库
import hljs from 'highlight.js' 

export default {
  data () {
    return {
      markString: '',
      htmlString: ''
    }
  },
  methods: {
    handleHtmlStr () {},
    handleMarkStr () {},
  },
  watch: {
    markString (source) {
      // marked.js库 设置一些解析markdown源码配置
      marked.setOptions({
        renderer: new marked.Renderer(),
        gfm: true,
        pedantic: false,
        breaks: false,
        sanitize: false,
        smartLists: true,
        smartypants: false,
        xhtml: false
      })
      this.htmlString = marked(source)
    }
  },
  mounted () {
    this.markString = this.$store.state.markString
  }
}
</script>

<style scoped>
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
.editor-content{
  display: flex;
  position: relative;
  box-sizing: border-box;
  overflow: hidden;
  height: calc(100% - 40px);
  width: 100%;
  min-height: 600px;
  text-align: left;
  font-size: 16px;
  border: 1px solid #eeeff1;
  border-top: none;
}
.fun-menu-btn svg{
  width: 24px;
  line-height: 24px;
  font-size: 16px;
  text-align: center;
  margin: 5px;
}
.fun-menu-btn{
  height: 40px;
  border-radius: 4px;
  outline: 0;
  cursor: pointer;
  background-color: transparent;
  border: none;
  margin-left: 20px;
  display: inline-block;
}
.fun-area-menu{
  width: 100%;
  height: 40px;
  overflow: hidden;
  display: flex;
  justify-content: space-between;
  align-items: center;
  overflow:hidden;
  background-color: #fff;
  color: rgb(105, 146, 191);
  border: 1px solid rgba(53, 73, 94, 0.233);
  border-radius: 4px 4px 0px 0px;
  box-sizing: border-box;
}
.markdown{
  width: 100%;
  height: 100%;
  border-radius: 4px;
  min-width: 700px;
  min-height: 300px;
  margin: 5px;
  overflow: hidden;
}
.markdown:hover{
  box-shadow: 0 0 10px #41b883;
}
</style>