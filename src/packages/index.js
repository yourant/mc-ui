import MButton from './button/index'
import MRow from './row/index'
import MCol from './col/index'
import MTag from './tag/index'
import MShowMore from './show-more/index'
import MLimitTextArea from './limit-textarea/index'
import MetaInfo from './meta-info/index'
import MAlert from './alert/index'
import MLoadingBar from './loading-bar/index'
import Skeleton from './skeleton/index'
import McTable, { McTableTsx } from './mc-table/index'
import McMemorySelector from './mc-memory-selector/index'
import McDateRangePicker from './mc-date-range-picker/index'
import McImgPreview from './mc-img-preview/index'
import McMultipleInput from './mc-multiple-input/index'
import McQueryForm from './mc-query-form/index'
import McNestedTable from './mc-nested-table/index'
import Create from '../utils/create'
import compress from '../utils/compress'
import McDraggableUpload from './mc-draggable-upload/index'
import McSvgIcon from './mc-svg-icon/index'
import McRightNavigationBar from './mc-right-navigation-bar/index'
import McQueryShrink from './mc-query-shrink/index'
import tableScrollTop from '../utils/tableScrollTop'

const components = {
  MButton,
  MRow,
  MCol,
  MTag,
  MShowMore,
  MLimitTextArea,
  MAlert,
  Skeleton,
  McTable,
  McTableTsx,
  McMemorySelector,
  McDateRangePicker,
  McMultipleInput,
  McQueryForm,
  McNestedTable,
  McDraggableUpload,
  McSvgIcon,
  McRightNavigationBar,
  McQueryShrink
}

const install = function (Vue) {
  if (install.installed) return
  for (const key in components) {
    Vue.component(components[key].name, components[key])
  }

  // const requireComponent = require.context('.', true, /index\.vue/)
  // requireComponent.keys().forEach((fileName) => {
  //   const config = requireComponent(fileName)
  //   console.log(config.default.name, 'wsss')
  //   Vue.component(config.default.name, config.default)
  // })

  MetaInfo.install(Vue)
  Vue.prototype.$loading = MLoadingBar
  Vue.prototype.$create = Create
  Vue.prototype.$tableScrollTop = tableScrollTop
  Vue.use(McImgPreview)
}

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

export default {
  install,
  compress,
  tableScrollTop,
  ...components
}
