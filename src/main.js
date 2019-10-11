import Vue from 'vue'
import App from './App.vue'
import store from './store.js'

// inconfont图标
import './assets/iconfont/iconfont.js'
import './assets/iconfont/iconfont.css'

import 'highlight.js/styles/github.css'
import './assets/css/style.css'
// import './assets/css/reset.css'



new Vue({
  store,
  render: h => h(App)
}).$mount('#app')