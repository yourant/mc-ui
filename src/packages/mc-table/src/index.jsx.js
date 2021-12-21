export default {
  name: 'McTableJsx',
  props: {
    tableConfig: {
      type: Array,
      default: () => []
    },
    renderData: {
      type: Array,
      default: () => []
    }
  },
  data () {
    return {}
  },
  computed: {
    tableRef: {
      get () {
        return this.$refs && this.$refs.table
      }
    }
  },
  timeoutKey: null,
  mounted () {
    // 每次页面尺寸变化时刷新一下表格布局
    window.addEventListener('resize', this.resizeHandle, false)
  },
  beforeDestroy () {
    window.removeEventListener('resize', this.resizeHandle, false)
  },
  methods: {
    resizeHandle () {
      if (this.timeoutKey) {
        clearTimeout(this.timeoutKey)
      }
      this.timeoutKey = setTimeout(() => {
        if (this.$refs && this.$refs.table) {
          this.$refs.table.doLayout()
        }
      }, 500)
    },
    bindScopedSlots (scopedSlots) {
      const events = {}
      for (const key in scopedSlots) {
        events[key] = scopedSlots[key].bind(this)
      }
      return events
    },
    transParams (params) {
      const obj = { props: {} }
      for (const key in params) {
        if (['attrs', 'listeners', 'scopedSlots'].includes(key)) {
          obj[key] = key === 'scopedSlots' ? this.bindScopedSlots(params[key]) : params[key]
        } else {
          obj.props[key] = params[key]
        }
      }
      return obj
    },
    renderColumn (columns) {
      return columns.map((item, index) => (
        !item.children ? <el-table-column
          key={index}
          {...this.transParams(item)}
        /> : <el-table-column
          key={index}
          {...this.transParams(item)}
        >{this.renderColumn(item.children)}</el-table-column>
      ))
    }
  },
  render () {
    return (
      <el-table
        ref="table"
        data={this.renderData}
        {...{
          attrs: this.$attrs,
          props: this.$props,
          on: this.$listeners
        }}
      >
        {this.renderColumn(this.tableConfig)}
      </el-table>
    )
  }
}
