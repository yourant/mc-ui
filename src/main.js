import Vue from 'vue'
import App from './App.vue'

import ElementUI from 'element-ui'
// 某些基于element-ui再封装的组件
import 'element-ui/lib/theme-chalk/index.css'

import mcUi from './packages/index'
import './packages/theme-default/lib/index.css'

Vue.use(ElementUI, {
  size: 'small'
})

Vue.use(mcUi)
Vue.config.productionTip = false

new Vue({
  render: (h) => h(App)
}).$mount('#app')
