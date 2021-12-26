# McTable 配置化表格

若对该组件有问题请咨询 <span style="color:#1890ff;">@雪人</span>

---

用以解决element-ui中的el-table组件当再列非常多的时候导致大量冗余代码问题。

建议使用<a href="#jsx-mark">mc-table-jsx</a>组件

## 使用方法

首先, 你得先定义你的表格的结构, 也就是在element-ui中`el-table-column`标签的属性值, 这些属性最终都会被赋值给被封装起来的`el-table-column`组件.

所以知道具体的可配置属性, 直接看[element-ui官方文档中的el-table-column部分](https://element.eleme.cn/#/zh-CN/component/table)

在`el-table-column`原有的属性基础上, 增加了两个属性去增强它的能力

- 第一个是`slotName`, 指定slotName之后, 我们就可以自定义这一列的具体表现了.

- 第二个是`children`, 我们可以通过这个值去配置二级标题

参考如下表格

<script>
  const tableConfig = [
    {
      fixed: true,
      type: 'selection',
      align: 'center',
      width: 40
    },
    {
      fixed: true,
      label: '采购单号',
      align: 'center',
      prop: 'purchaseOrderNo',
      slotName: 'purchaseOrderNo'
    },
    {
      label: '订单类型',
      'min-width': 110,
      align: 'center',
      prop: 'orderTypeName',
      sortable: 'custom'
    },
    {
      label: '尺码',
      align: 'center',
      children: [
        {
          label: 'x',
          width: 80,
          align: 'center',
          prop: 'x'
        },
        {
          label: 'y',
          width: 80,
          align: 'center',
          prop: 'y'
        }
      ]
    },
    {
      label: '操作',
      'min-width': 110,
      align: 'center',
      slotName: 'operation'
    }
  ]
  export default {
    data() {
      return {
        tableConfig,
        tableConfigJSX: [],
        tableData: [
          {
            purchaseOrderNo: '采购单号',
            orderTypeName: '订单类型',
            x: 10,
            y: 20
          },
          {
            purchaseOrderNo: '采购单号2',
            orderTypeName: '订单类型2',
            x: 30,
            y: 40
          }
        ]
      }
    }
  }
</script>


<demo-block>
::: slot source
<mc-table
  :table-config="tableConfig"
  :render-data="tableData"
>
  <template v-slot:purchaseOrderNo="scope">
    <div>采购单号: {{scope.row.purchaseOrderNo}}</div>
  </template>
  <template v-slot:operation>
    <a href="#">操作按钮</a>
  </template>
</mc-table>
:::

::: slot highlight

```html
<script>
  const tableConfig = [
    {
      fixed: true,
      type: 'selection',
      align: 'center',
      width: 40
    },
    {
      fixed: true,
      label: '采购单号',
      align: 'center',
      prop: 'purchaseOrderNo',
      slotName: 'purchaseOrderNo'
    },
    {
      label: '订单类型',
      'min-width': 110,
      align: 'center',
      prop: 'orderTypeName',
      sortable: 'custom'
    },
    {
      label: '尺码',
      align: 'center',
      children: [
        {
          label: 'x',
          width: 80,
          align: 'center',
          prop: 'x'
        },
        {
          label: 'y',
          width: 80,
          align: 'center',
          prop: 'y'
        }
      ]
    },
    {
      label: '操作',
      'min-width': 110,
      align: 'center',
      slotName: 'operation'
    }
  ] 
  export default {
    data() {
      return {
        tableConfig,
        tableData: [
          {
            purchaseOrderNo: '采购单号',
            orderTypeName: '订单类型',
            x: 10,
            y: 20
          },
          {
            purchaseOrderNo: '采购单号2',
            orderTypeName: '订单类型2',
            x: 30,
            y: 40
          }
        ]
      }
    }
  }
</script>
<div>
  <mc-table
    :table-config="tableConfig"
    :render-data="tableData"
  >
    <template v-slot:purchaseOrderNo="scope">
      <div>采购单号: {{scope.row.purchaseOrderNo}}</div>
    </template>
    <template v-slot:operation>
      <a href="#">操作按钮</a>
    </template>
  </mc-table>
</div>
```
:::
</demo-block>


看完实例之后你可能会觉得, 这也没有减少多少代码量啊? 但是在实际使用中, 应该将`tableJson`提取到另外一个js文件中, 最终你的vue组件剩下的内容就没多少了, 如下:

<demo-block>
::: slot highlight
```html
<script>
  import tableConfig from './tableConfig'
  export default {
    data() {
      return {
        tableConfig,
        tableData: []
      }
    }
  }
</script>
<div>
  <mc-table
    :table-config="tableConfig"
    :render-data="tableData"
  >
    <template v-slot:purchaseOrderNo="scope">
      <div>采购单号: {{scope.row.purchaseOrderNo}}</div>
    </template>
    <template v-slot:operation>
      <a href="#">操作按钮</a>
    </template>
  </mc-table>
</div>
```
:::
</demo-block>

### JSX用法

<b> 更推荐使用jsx写法 </b>

<div class="demo-block" id="jsx-mark" style="text-align:center;font-size:18px;color:blue;padding:10px 0;">点击查看mc-table-jsx使用方式</div>

<demo-block>

::: slot highlight
```js
// js文件
// 建议将tableConfig的配置单独提取到一个js文件，避免因配置导致的文件过长。
const tableConfig = self => [
  {
    fixed: true,
    type: 'selection',
    align: 'center',
    width: 40
  },
  {
    fixed: true,
    label: '采购单号',
    align: 'center',
    scopedSlots: {
      // 插槽，更多插槽可以查看element-ui的文档
      default (scope) {
        const { purchaseOrderNo } = scope.row
        return <div>采购单号: {purchaseOrderNo}</div>
      }
    }
  },
  {
    label: '订单类型',
    'min-width': 110,
    align: 'center',
    prop: 'orderTypeName',
    sortable: 'custom',
    'class-name': 'order-type2',
    listeners: {
      click () {
        console.log('click')
      }
    }
  },
  {
    label: '尺码',
    align: 'center',
    children: [
      {
        label: 'x',
        width: 80,
        align: 'center',
        prop: 'x'
      },
      {
        label: 'y',
        width: 80,
        align: 'center',
        scopedSlots: {
          default (scope) {
            const { y } = scope.row
            return <div>y: {y}</div>
          }
        }
      }
    ]
  },
  {
    label: '操作',
    'min-width': 110,
    align: 'center',
    scopedSlots: {
      default (...args) {
        // 注意这里的this指向的是mc-table-jsx的实例，如果需要访问当前组件的实例，则需要显式传入this, 如下操作调用访问
        return <div><a href="#" onClick={self.log}>操作</a></div>
      }
    }
  }
]
export default {
  data () {
    return {
      name: 'test',
      tableConfig: [],
      tableData: [
        {
          purchaseOrderNo: '采购单号',
          orderTypeName: '订单类型',
          x: 10,
          y: 20
        },
        {
          purchaseOrderNo: '采购单号2',
          orderTypeName: '订单类型2',
          x: 30,
          y: 40
        }
      ]
    }
  },
  created () {
    this.tableConfig = tableConfig(this) // 显式指定scopedSlots中的this
  },
  mounted () {
    console.log('this table', this.$refs.table.tableRef) // 引用底层el-table
  },
  methods: {
    log (...args) {
      console.log('this.name => ', this.name, args)
    }
  },
  render () {
    return (
      <el-card>
        <mc-table-jsx
          ref="table"
          border
          tableConfig={this.tableConfig}
          renderData={this.tableData}
          onCell-click={this.log}
          onSelect={this.log}
          onSort-change={this.log}
        />
      </el-card>
    )
  }
}
```
:::
</demo-block>

使用jsx写法能够让页面组件更灵活，组件的拆分能够更加的细粒度，可以将一些组件拆分到方法内。所以强烈建议使用jsx开发。但是需要注意jsx的参数传递和方法绑定跟vue文件组件略有区别。常见使用场景在上面的demo中已经列出，有function绑定，参数传递，插槽使用等。

需要额外注意的是在插槽中的`this`默认指向`mc-table-jsx`组件的`this`，所以如果想要在插槽中的使用当前组件的实例，需要显示传入`this`并使用该参数。也就是上述demo中这样。同时经过简单的尝试大部分`el-table`的方法和参数都能够被支持，如果遇到个别属性不支持的情况，可以尝试修改组件。

## 更多参数

同上面说的一样, 关于table的可选参数完全参照[element-ui的el-table](https://element.eleme.cn/#/zh-CN/component/table), 在此基础上, 我们将数据传入到`render-data`, 将表格配置传入到`table-config`. 仅此而已.

而`el-table-column` 也和`el-table`一样, 在`tableConfig`中参照[element-ui的el-table](https://element.eleme.cn/#/zh-CN/component/table)配置即可.

同时, 对于`el-table`的所有事件支持, `mc-table`会同样传递给底层的`el-table`.

### 引用 el-table 的ref

我们可以通过调用`mc-table`实例下的`getElTableRef`获取到底层的`el-table`实例, 比如主动全选表单代码如下


<demo-block>

::: slot highlight
```html
<script>
  import tableConfig from './tableConfig'
  export default {
    data() {
      return {
        tableConfig,
        tableData: []
      }
    },
    mounted() {
      const elTable = this.$refs.table.getElTableRef()
      elTable.toggleAllSelection() // 获取到el-table的引用，直接调用其方法
    }
  }
</script>
<div>
  <mc-table
    :table-config="tableConfig"
    :render-data="tableData"
  />
</div>
```
:::
</demo-block>