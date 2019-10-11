import Vue from 'vue'
import App from './App.vue'
import store from './store.js'

// inconfont图标
import './assets/iconfont/iconfont.js'
import './assets/iconfont/iconfont.css'

import 'highlight.js/styles/vs.css'
import './assets/css/style.css'



new Vue({
  store,
  render: h => h(App)
}).$mount('#app')