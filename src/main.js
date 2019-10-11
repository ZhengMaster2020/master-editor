import Vue from 'vue'
import App from './App.vue'
import store from './store.js'

// inconfont图标
import './assets/iconfont/iconfont.js'
import './assets/iconfont/iconfont.css'

import 'marked'

new Vue({
  store,
  render: h => h(App)
}).$mount('#app')