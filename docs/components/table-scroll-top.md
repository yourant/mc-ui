# tableScrollTop el-table表格滚动到顶部

版本: <span style="color:blue;"> > 1.1.42</span>

主要针对el-table表格body嵌套选中问题

---

### 使用方法

全局注册直接使用`this.$tableScrollTop(tableClassName)`，单独引用直接从`@mc/ui`引入:

```js
import { tableScrollTop } from '@mc/ui'
// todo....
tableScrollTop('table-classname')
```

<demo-block>
::: slot source
<script>
  export default {
    data() {
      return {
        tableData: Array.from({ length: 100 }).fill('').map((_, idx) => ({
          date: '2016-05-02',
          name: '王小虎',
          address: `上海市普陀区金沙江路 15${idx} 弄`
        }))
      }
    },
    methods: {
      scrollTo() {
        this.$tableScrollTop('target-table')
      }
    }
  }
</script>

<div class="demo-block">
  <el-button @click="scrollTo">滚动到顶部</el-button>
  <el-table
    class="target-table"
    :data="tableData"
    style="width: 100%"
    height="30vh"
  >
    <el-table-column
      prop="date"
      label="日期"
      width="180">
    </el-table-column>
    <el-table-column
      prop="name"
      label="姓名"
      width="180">
    </el-table-column>
    <el-table-column
      prop="address"
      label="地址">
    </el-table-column>
  </el-table>
</div>
:::

::: slot highlight
```html
<div class="demo-block">
  <el-button @click="scrollTo">滚动到顶部</el-button>
  <el-table
    class="target-table"
    :data="tableData"
    style="width: 100%"
    height="30vh"
  >
    <el-table-column
      prop="date"
      label="日期"
      width="180">
    </el-table-column>
    <el-table-column
      prop="name"
      label="姓名"
      width="180">
    </el-table-column>
    <el-table-column
      prop="address"
      label="地址">
    </el-table-column>
  </el-table>
</div>
<script>
  export default {
    data() {
      return {
        tableData: Array.from({ length: 100 }).fill('').map((_, idx) => ({
          date: '2016-05-02',
          name: '王小虎',
          address: `上海市普陀区金沙江路 15${idx} 弄`
        }))
      }
    },
    methods: {
      scrollTo() {
        this.$tableScrollTop('target-table')
      }
    }
  }
</script>
```

:::
</demo-block>

 

