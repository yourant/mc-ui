// import Button from './Button.vue'
// import Icon from './Icon.vue'
// import ButtonGroup from './ButtonGroup.vue'
// const install = (Vue) => {
//   // 把所有的组件设成全局组件
//   // Vue.component(Button.name,Button)
//   // Vue.component(Icon.name,Icon)
//   // Vue.component(ButtonGroup.name,ButtonGroup)
//   // require.context()
//   const requireComponent = require.context('.', true, /\.vue/)
//   requireComponent.keys().forEach(fileName => {
//     const config = requireComponent(fileName)
//     // console.log(config);
//     Vue.component(config.default.name, config.default)
//   })
// }
// // script  vue是放在window下， 放在模块内
// if (typeof window.vue !== 'undefined') {
//   install(window.vue)
// }
// export default {
//   install
// }

import McQueryForm from './mc-query-form/index'
import McNestedTable from './mc-nested-table/index'

const components = {
  McQueryForm,
  McNestedTable
}

const install = function (Vue) {
  if (install.installed) return
  for (const key in components) {
    Vue.component(components[key].name, components[key])
  }
  // MetaInfo.install(Vue)
  // Vue.prototype.$loading = MLoadingBar
  // Vue.prototype.$create = Create
  // Vue.prototype.$tableScrollTop = tableScrollTop
  // Vue.use(McImgPreview)
}

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

export default {
  install,
  // compress,
  // tableScrollTop,
  ...components
}

// const requireComponent = require.context('.', true, /\.vue/)
// requireComponent.keys().forEach((fileName) => {
//   const config = requireComponent(fileName)
//   console.log(config, 'wsss')
//   // Vue.component(config.default.name, config.default)
// })
