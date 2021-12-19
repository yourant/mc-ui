<script>
import { throttle, debounce, isType } from '../../../utils'
export default {
  name: 'McNestedTable',
  props: {
    titles: {
      type: Array,
      default () {
        return []
      }
    },
    load: {
      type: Function,
      default: () => {}
    },
    wait: {
      // 节流时间
      type: Number,
      default: 400
    }
  },
  watch: {
    '$attrs.data' () {
      this.updateMegerTableHeight()
    }
  },
  mounted () {
    this.updateMegerTableHeight()
    // 节流 防抖
    const throttleFn = throttle(this.updateMegerTableHeight, this.wait)
    const debounceFn = debounce(this.updateMegerTableHeight, this.wait)
    this.handleResize = () => {
      throttleFn()
      debounceFn()
    }
    window.addEventListener('resize', this.handleResize)
  },
  beforeDestroy () {
    // 注销清除绑定
    window.removeEventListener('resize', this.handleResize)
  },
  methods: {
    updateMegerTableHeight () {
      this.$nextTick(() => {
        try {
          const mcMegerTable = [
            ...this.$refs.mcTreeTable.$el.querySelectorAll('.mc__meger-table__')
          ]
          mcMegerTable.map(dom => {
            const Parent = dom.parentNode.parentNode
            // 先恢复默认高 使其不影响父级的真实高度
            dom.querySelector('table').style.height = 'auto'
            setTimeout(() => {
              // 重新获取父级高，并赋值给table
              dom.querySelector('table').style.height =
                Parent.clientHeight + 'px'
            })
          })
        } catch (e) {}
      })
    },
    async loadFetch (tree, treeNode, resolve) {
      try {
        const data = await this.load(tree, treeNode)
        resolve(data || [])
      } catch (error) {
        resolve([])
      }
    },
    getSlotContent (scope, { prop }, align) {
      const fn = this.$scopedSlots[prop]
      const value = scope.row[prop]
      if (fn) {
        return fn(scope)
      }

      if (isType(value, 'object')) {
        return (
          <el-table
            class="mc__meger-table__"
            ref="childTable"
            data={[value]}
            show-header={false}
            row-key={this.$attrs.rowKey}
          >
            {(() => {
              const arr = new Array(value.props.length).fill().map((_, i) => i)
              return arr.map((_, index) => (
                <el-table-column
                  className="mc__meger-table__td"
                  align={align}
                  prop={value.props[index]}
                />
              ))
            })()}
          </el-table>
        )
      }
      return value
    },
    tableCellClassName ({ row, column, rowIndex, columnIndex }) {
      return columnIndex && row.mergeCell ? 'mc__merge-cell__' : ''
    },
    getChildren (data, align) {
      return data.map(item => (
        <el-table-column
          align={align}
          {...{
            props: item
          }}
          className="mc__nested-table__td"
          scopedSlots={{
            default: scope => this.getSlotContent(scope, item, align)
          }}
        >
          {
            item.children && item.children.length
              ? this.getChildren(item.children, align)
              : ''
          }
        </el-table-column>
      ))
    }
  },
  render () {
    const Titles = this.titles
    const align = this.$attrs.align || 'center'
    return (
      <el-table
        load={this.loadFetch}
        {...{
          props: this.$attrs,
          on: this.$listeners
        }}
        cell-class-name={this.tableCellClassName}
        ref="mcTreeTable"
        class="mc__nested-table__"
      >
        {this.$scopedSlots.default
          ? this.$scopedSlots.default() // 如果使用默认的插槽内容则使用默认的内容
          : this.getChildren(Titles, align)
        }
      </el-table>
    )
  }
}
</script>

<style lang="scss">
.mc__merge-cell__,
.mc__merge-cell__ > .cell {
  padding: 0 !important;
}
.mc__meger-table__::before {
  content: "";
  display: none;
}
.mc__meger-table__td {
  border-bottom: 0 !important;
  .cell {
    padding: 0 8px;
  }
  &:last-child {
    border-right: 0 !important;
  }
}
// .el-table__row .mc__nested-table__td:first-child {
//   text-align: left !important;
// }
</style>
