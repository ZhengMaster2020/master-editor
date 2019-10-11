<template>
  <div class="markdown">
    <!-- 顶部功能按钮区 -->
    <div class="fun-area-menu">
      <div class="fun-area-menu-left">

        <span class="fun-menu-btn" @click=addBold>
          <span class="menu-hover-tip">加粗</span>
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-jiacu"></use>
          </svg>
        </span>

        <span class="fun-menu-btn">
          <span class="menu-hover-tip">标题</span>
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-biaotiziti"></use>
          </svg>
        </span>

        <span class="fun-menu-btn" @click=addDeleteLine>
          <span class="menu-hover-tip">删除线</span>
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-shanchuxian"></use>
          </svg>
        </span>

        <span class="fun-menu-btn" @click="addUnderLine">
          <span class="menu-hover-tip">下划线</span>
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-xiahuaxian"></use>
          </svg>
        </span>

        <span class="fun-menu-btn" @click="addItalic">
          <span class="menu-hover-tip">斜体</span>
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-qingxie"></use>
          </svg>
        </span>

        <span class="fun-menu-btn" @click="addOrderList">
          <span class="menu-hover-tip">有序列</span>
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-youxuliebiao"></use>
          </svg>
        </span>

        <span class="fun-menu-btn" @click="addUnorderList">
          <span class="menu-hover-tip">无序列</span>
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-wuxuliebiao"></use>
          </svg>
        </span>

        <span class="fun-menu-btn" @click="addCode">
          <span class="menu-hover-tip">代码</span>
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-code"></use>
          </svg>
        </span>

        <span class="fun-menu-btn" @click="addTable">
          <span class="menu-hover-tip">表格</span>
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-charubiaoge"></use>
          </svg>
        </span>

        <span class="fun-menu-btn">
          <span class="menu-hover-tip">链接</span>
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-link"></use>
          </svg>
        </span>

        <span class="fun-menu-btn">
          <span class="menu-hover-tip">图片</span>
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-tupian"></use>
          </svg>
        </span>

         <span class="fun-menu-btn">
           <span class="menu-hover-tip">表情</span>
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-emjio_"></use>
          </svg>
        </span>

         <span class="fun-menu-btn">
           <span class="menu-hover-tip">引用</span>
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-youjiantou"></use>
          </svg>
        </span>
      </div>
      <div class="fun-area-menu-right">
         <span class="fun-menu-btn">
           <span class="menu-hover-tip">保存</span>
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-save"></use>
          </svg>
        </span>

        <span class="fun-menu-btn">
          <span class="menu-hover-tip">双栏</span>
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-shuanglan"></use>
          </svg>
        </span>

         <span class="fun-menu-btn">
           <span class="menu-hover-tip">浏览</span>
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-yulanmoshi"></use>
          </svg>
        </span>

         <span class="fun-menu-btn">
           <span class="menu-hover-tip">全屏</span>
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-zidongsuofangmoshi"></use>
          </svg>
        </span>

        <span class="fun-menu-btn">
          <span class="menu-hover-tip">关于</span>
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
        <textarea ref="md-edit" class="md_textarea_content" v-model="markString">
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

    //给选中文字加粗
    addBold() {
      this.insertText('**', '**')
    },

    // 添加删除线
    addDeleteLine () {
      this.insertText('~~', '~~')
    },

    // 添加下划线
    addUnderLine () {
      this.insertText('<u>', '</u>')
    },

    // 斜体样式
    addItalic () {
      this.insertText('___', '___')
    }, 

    //添加有序列表
    addOrderList () {
      this.insertText(`1. xxx`, '')
    },

    // 添加无需列表
    addUnorderList () {
      this.insertText('+ xxx', '')
    },

    // 添加表格
    addTable () {
      this.insertText(
`|  表头   | 表头  |
|  ----  | ----  |
| 单元格  | 单元格 |
| 单元格  | 单元格 |`,
      '')
    },

    // 添加代码块
    addCode () {
      this.insertText( 
      '````javascript' + '\n' + 
      'write code area' + '\n' +
      '````'
      , '')
    },

    // 给当前鼠标所在的位置或者选中的文字动态添加样式
    insertText(startString,endString){
        // 获取编辑区的DOM结点
        let markTextNode = this.$refs['md-edit']
        // window.getSelection方法
        //返回一个 Selection 对象，表示用户选择的文本范围或光标的当前位置。
        if (window.getSelection) {
          // 光标选中内容的起始以及末尾位置
          if (markTextNode.selectionStart != undefined && markTextNode.selectionEnd != undefined) {
            // 光标0 到 electionStart 位置的内容
            let beforeSelectedTextVal = markTextNode.value.substring(0, markTextNode.selectionStart)
            // 光标所在的位置的内容或者选中的内容
            let selectedText = markTextNode.value.substring(markTextNode.selectionStart, markTextNode.selectionEnd)
            // 光标选中内容结束的位置之后的内容
            let afterSelectedTextVal = markTextNode.value.substring(markTextNode.selectionEnd)
            let newText = beforeSelectedTextVal + startString + selectedText + endString + afterSelectedTextVal
            markTextNode.value = newText
            this.markString = markTextNode.value
          }
        }
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
.fun-menu-btn .icon{
  width: 15px;
  line-height: 24px;
  height: 24px;
  font-size: 16px;
  text-align: center;
  margin: 5px;
}
.fun-menu-btn:hover .menu-hover-tip{
  display: block;
}
.fun-menu-btn .menu-hover-tip{
  color:rgba(53, 73, 94, 0.233);
  font-size: 10px;
  position: absolute;
  bottom: 0;
  min-width: 30px;
  display: none;
}
.fun-menu-btn{
  height: 40px;
  border-radius: 4px;
  outline: 0;
  cursor: pointer;
  background-color: transparent;
  border: none;
  margin-left: 15px;
  display: inline-block;
  position: relative;
}
.fun-area-menu{
  width: 100%;
  height: 45px;
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