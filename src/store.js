import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

const state = {
  markString: `### 三级标题\n`,
  htmlString: '',
  mdEdit: 'md-edit'
}

const mutations = {
  handleHtmlString (state, HtmlStr) {
    state.htmlString = HtmlStr.htmlString
  },
  handleMarkString (state, MarkStr) {
    state.markString = MarkStr.markString
  }
}

const actions = {}

const store = new Vuex.Store({
  state,
  mutations,
  actions,
})

export default store