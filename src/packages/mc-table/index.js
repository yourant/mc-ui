
import McTable from './src/index.vue'
import McTableTSX from './src/index.jsx.js'

McTableTSX.install = function (Vue) {
  Vue.component(McTableTSX.name, McTableTSX)
}

export const McTableTsx = McTableTSX

McTable.install = function (Vue) {
  Vue.component(McTable.name, McTable)
}

export default McTable
