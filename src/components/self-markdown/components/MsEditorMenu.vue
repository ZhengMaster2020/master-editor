<template>
  <!-- 顶部功能按钮区 -->
  <div class="fun-area-menu">
    <div class="fun-area-menu-left" style="padding: 10px 5px;">

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

      <span class="fun-menu-btn" @click="addLink">
        <span class="menu-hover-tip">链接</span>
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-link"></use>
        </svg>
      </span>

      <span class="fun-menu-btn" @click="addImg">
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

        <span class="fun-menu-btn" @click="addQuote">
          <span class="menu-hover-tip">引用</span>
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-youjiantou"></use>
        </svg>
      </span>
    </div>
    <div class="fun-area-menu-right" style="margin-right: 10px;">
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

        <span class="fun-menu-btn" @click="fullScreen">
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
</template>

<script>
import insertContent from '../../../utils/insertContent.js'

export default {
  name: 'MsEditorMenu',
  data () {
    return {
      isZoom: true,
      width: this.$parent.width,
      height: this.$parent.height
    }
  },
  methods: {
     // 全屏展示
    fullScreen () {
      const mdNode = document.querySelector('.markdown')
      if (this.isZoom) {
      mdNode.style.cssText = `
          position: fixed;
          z-index: 999;
          left: 0;
          top: 0;
          margin: 0;
          width: 100%;
          height: 100%;`
        this.isZoom = false
      } else {
         mdNode.style.cssText = `
                width: ${this.$parent.width};
                height: ${this.$parent.height};`
          this.isZoom = true
      }
    },

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


    // 添加链接
    addLink () {
      this.insertText("[link]('')", '')
    },

    // 添加图片
    addImg(){},

    // 添加引用
    addQuote () {
      this.insertText('> 引用', '')
    },

    // 添加表格
    addTable () {
      this.insertText(
`|  表头   | 表头  |
|  ----  | ----  |
| 单元格  | 单元格 |
| 单元格  | 单元格 |`, '\n')
    },

    // 添加代码块
    addCode () {
      this.insertText( 
      '````javascript' + '\n' + 
      'write code area' + '\n' +
      '````'
      , '\n')
    },

    insertText (startString,endString) {
      const markTextNode = document.querySelector('.md_textarea_content')
       this.markString  = insertContent(markTextNode, startString, endString)
    }
  },
}
</script>

<style scoped>
.fun-area-menu{
  width: 100%;
  height: 45px;
  overflow: hidden;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #fff;
  color: rgb(105, 146, 191);
  border: 1px solid rgba(53, 73, 94, 0.233);
  border-radius: 4px 4px 0px 0px;
  box-sizing: border-box;
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
.fun-menu-btn .menu-hover-tip{
  color:rgba(53, 73, 94, 0.233);
  font-size: 10px;
  position: absolute;
  bottom: 0;
  min-width: 30px;
  display: none;
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
</style>