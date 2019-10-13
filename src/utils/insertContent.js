function insertContent (textNode, startString, endString) {
  textNode.focus()
  if (window.getSelection) {
    // 光标选中内容的起始以及末尾位置
    if (textNode.selectionStart != undefined && textNode.selectionEnd != undefined) {
      // 光标0 到 electionStart 位置的内容
      let beforeSelectedTextVal = textNode.value.substring(0, textNode.selectionStart)
      // 光标所在的位置的内容或者选中的内容
      let selectedText = textNode.value.substring(textNode.selectionStart, textNode.selectionEnd)
      // 光标选中内容结束的位置之后的内容
      let afterSelectedTextVal = textNode.value.substring(textNode.selectionEnd)
      let newText = beforeSelectedTextVal + startString + selectedText + endString + afterSelectedTextVal
      textNode.value = newText
      return textNode.value
    }
  }
}
export default insertContent