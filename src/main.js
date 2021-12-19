// import Vue from 'vue'
// import App from './App.vue'

// Vue.config.productionTip = false

// new Vue({
//   render: h => h(App)
// }).$mount('#app')
import Vue from 'vue'
import App from './App.vue'

import ElementUI from 'element-ui'
// for某些基于element-ui再封装的组件
import 'element-ui/lib/theme-chalk/index.css'

import mcUi from './packages/index'
Vue.use(ElementUI, {
  size: 'small'
})
// import zfUi from "z-feng-ui";
// import "z-feng-ui/dist/zf-ui.css";
Vue.use(mcUi) // install
Vue.config.productionTip = false

new Vue({
  render: (h) => h(App)
}).$mount('#app')
