# McNestedTable 嵌套表格配置

有问题请咨询 <span style="color:#1890ff;">青云</span>

---

用于解决表格中出现嵌套多列表格的场景

## 默认用法

根据数据生成相应的表格，需配置titles与data

<demo-block>
::: slot source
<div class="demo-block">
  <mc-nested-table
    ref="mctable"
    :titles="titles"
    :data="datas"
    :border="true"
    row-key="id"
    lazy
    :tree-props="{children: 'children', hasChildren: 'hasChildren'}"
    :load="loadFetch"
  />
</div>

<script>
export default {
  data() {
    return {
      titles: [
        {
          label: "分类名称",
          children: [
            {
              label: "分类001",
              children: [
                {
                  label: "分类123",
                  minWidth: "200px",
                  prop: "name",
                  align: "left",
                },
              ],
            },
          ],
        },
        {
          label: "日期",
          children: [
            {
              label: "2021.2",
              children: [
                { label: "11点30", minWidth: "300px", prop: "2021.2" },
              ],
            },
          ],
        },
        {
          label: "类型1",
          children: [{ label: "比例", minWidth: "300px", prop: "2021.5" }],
        },
        {
          label: "颜色",
          children: [
            { label: "大红", minWidth: "300px", prop: "2021.8" },
            { label: "大紫", minWidth: "300px", prop: "2021.8" },
          ],
        },
      ],
      datas: [
        {
          id: 1,
          name: "Women(女性)",
          mergeCell: true,
          2021.2: {
            a: "9.9999992568987%",
            b: "1.2%",
            c: "8.2%",
            id: 111,
            props: ["a", "b", "c"],
          },
          2021.5: {
            a: "4.2%",
            b: "1.8%",
            c: "7.5%",
            id: 112,
            props: ["a", "b", "c"],
          },
          2021.8: {
            a: "5.2%",
            b: "1.9%",
            c: "7.7%",
            id: 113,
            props: ["a", "b", "c"],
          },
        },
        {
          id: 3,
          name: "Dresses(连衣裙)",
          mergeCell: true,
          2021.2: {
            a: "hjk",
            b: "复色：2%",
            c: "新品：2.3%",
            id: 251,
            props: ["a", "b", "c"],
          },
          2021.5: 896,
          2021.8: 785,
        },
        {
          id: 5,
          name: "HAHA(手套)",
          mergeCell: true,
          hasChildren: true,
          2021.2: {
            a: "总：2.3%",
            b: "复色：2%",
            c: "新品：2.3%",
            id: 51,
            props: ["a", "b", "c"],
          },
          2021.5: {
            a: "总：29%",
            b: "复色：2%",
            c: "新品：2.1%",
            id: 52,
            props: ["a", "b", "c"],
          },
          2021.8: {
            a: "总：2.3%",
            b: "复色：2%",
            c: "新品：2.3%",
            id: 53,
            props: ["a", "b", "c"],
          },
        },
      ],
      datas2: [
        { id: 1, name: "LALA(拉拉)", 2021.2: "66", 2021.5: "88", 2021.8: "99" },
        {
          id: 2,
          name: "SASA(沙沙)",
          2021.2: "66",
          2021.5: "88",
          2021.8: "99",
          hasChildren: true,
        },
      ],
    };
  },
  methods: {
    async sleep(n) {
      return new Promise((resolve) => {
        setTimeout(resolve, n);
      });
    },
    async loadFetch() {
      // 获取下一个层级的数据
      await this.sleep(1000);
      const Idx = Math.floor(Math.random() * 4 + 1);
      const Names = [
        ,
        "HAHA(手套)",
        "WAWA(哇哇)",
        "YAYA(吖吖)",
        "GUOGUO(果果)",
      ];
      const Item = { a: `总：${Idx}%`, b: `复色：${Idx}%`, c: `新品：${Idx}%` };
      const props = ["a", "b", "c"];
      const Now = Date.now();
      return [
        {
          id: Now,
          name: Names[Idx],
          mergeCell: true,
          hasChildren: true,
          2021.2: { ...Item, props, id: Now + 1 },
          2021.5: { ...Item, props, id: Now + 2 },
          2021.8: { ...Item, props, id: Now + 3 },
        },
      ];
    },
    async loadFetch2() {
      // 获取下一个层级的数据
      await this.sleep(1000);
      const Idx = Math.floor(Math.random() * 4 + 1);
      const Names = [
        ,
        "HAHA(手套)",
        "WAWA(哇哇)",
        "YAYA(吖吖)",
        "GUOGUO(果果)",
      ];
      return [
        {
          id: Date.now(),
          name: Names[Idx],
          hasChildren: true,
          2021.2: Idx + "%",
          2021.5: Idx + "%",
          2021.8: Idx + "%",
        },
      ];
    },
  },
};
</script>
:::

::: slot highlight
```html
 <div class="demo-block">
  <mc-nested-table
    ref="mctable"
    :titles="titles"
    :data="datas"
    :border="true"
    row-key="id"
    lazy
    :tree-props="{children: 'children', hasChildren: 'hasChildren'}"
    :load="loadFetch"
  />
</div>

<script>
export default {
  data() {
    return {
      titles: [
        {
          label: "分类名称",
          children: [
            {
              label: "分类001",
              children: [
                {
                  label: "分类123",
                  minWidth: "200px",
                  prop: "name",
                  align: "left",
                },
              ],
            },
          ],
        },
        {
          label: "日期",
          children: [
            {
              label: "2021.2",
              children: [
                { label: "11点30", minWidth: "300px", prop: "2021.2" },
              ],
            },
          ],
        },
        {
          label: "类型1",
          children: [{ label: "比例", minWidth: "300px", prop: "2021.5" }],
        },
        {
          label: "颜色",
          children: [
            { label: "大红", minWidth: "300px", prop: "2021.8" },
            { label: "大紫", minWidth: "300px", prop: "2021.8" },
          ],
        },
      ],
      datas: [
        {
          id: 1,
          name: "Women(女性)",
          mergeCell: true,
          2021.2: {
            a: "9.9999992568987%",
            b: "1.2%",
            c: "8.2%",
            id: 111,
            props: ["a", "b", "c"],
          },
          2021.5: {
            a: "4.2%",
            b: "1.8%",
            c: "7.5%",
            id: 112,
            props: ["a", "b", "c"],
          },
          2021.8: {
            a: "5.2%",
            b: "1.9%",
            c: "7.7%",
            id: 113,
            props: ["a", "b", "c"],
          },
        },
        {
          id: 3,
          name: "Dresses(连衣裙)",
          mergeCell: true,
          2021.2: {
            a: "hjk",
            b: "复色：2%",
            c: "新品：2.3%",
            id: 251,
            props: ["a", "b", "c"],
          },
          2021.5: 896,
          2021.8: 785,
        },
        {
          id: 5,
          name: "HAHA(手套)",
          mergeCell: true,
          hasChildren: true,
          2021.2: {
            a: "总：2.3%",
            b: "复色：2%",
            c: "新品：2.3%",
            id: 51,
            props: ["a", "b", "c"],
          },
          2021.5: {
            a: "总：29%",
            b: "复色：2%",
            c: "新品：2.1%",
            id: 52,
            props: ["a", "b", "c"],
          },
          2021.8: {
            a: "总：2.3%",
            b: "复色：2%",
            c: "新品：2.3%",
            id: 53,
            props: ["a", "b", "c"],
          },
        },
      ],
      datas2: [
        { id: 1, name: "LALA(拉拉)", 2021.2: "66", 2021.5: "88", 2021.8: "99" },
        {
          id: 2,
          name: "SASA(沙沙)",
          2021.2: "66",
          2021.5: "88",
          2021.8: "99",
          hasChildren: true,
        },
      ],
    };
  },
  methods: {
    async sleep(n) {
      return new Promise((resolve) => {
        setTimeout(resolve, n);
      });
    },
    async loadFetch() {
      // 获取下一个层级的数据
      await this.sleep(1000);
      const Idx = Math.floor(Math.random() * 4 + 1);
      const Names = [
        ,
        "HAHA(手套)",
        "WAWA(哇哇)",
        "YAYA(吖吖)",
        "GUOGUO(果果)",
      ];
      const Item = { a: `总：${Idx}%`, b: `复色：${Idx}%`, c: `新品：${Idx}%` };
      const props = ["a", "b", "c"];
      const Now = Date.now();
      return [
        {
          id: Now,
          name: Names[Idx],
          mergeCell: true,
          hasChildren: true,
          2021.2: { ...Item, props, id: Now + 1 },
          2021.5: { ...Item, props, id: Now + 2 },
          2021.8: { ...Item, props, id: Now + 3 },
        },
      ];
    },
    async loadFetch2() {
      // 获取下一个层级的数据
      await this.sleep(1000);
      const Idx = Math.floor(Math.random() * 4 + 1);
      const Names = [
        ,
        "HAHA(手套)",
        "WAWA(哇哇)",
        "YAYA(吖吖)",
        "GUOGUO(果果)",
      ];
      return [
        {
          id: Date.now(),
          name: Names[Idx],
          hasChildren: true,
          2021.2: Idx + "%",
          2021.5: Idx + "%",
          2021.8: Idx + "%",
        },
      ];
    },
  },
};
</script>
```
:::
</demo-block>

### Attributes
| 参数     | 说明                         | 类型    | 可选值                              | 默认值 |
| -------- | ----------------------------| ------- | ----------------------------------- | ------ |
| titles     | 表头数据                   | title-item[]  |       -             |    -      |
| data     | 表数据                       | data-item[]  |       -             |    -      |

### 调用el-table方法
```js
this.$refs.xxx.$refs.mcTreeTable.doLayout()
```
| 参数     | 说明                         | 类型    | 可选值                              | 默认值 |
| -------- | ----------------------------| ------- | ----------------------------------- | ------ |
| mcTreeTable     | 内部的外层el-table实例（通过$refs调用） |  组件实例  |       -             |    -      |
| childTable     | 内部的嵌套el-table实例（通过$refs调用）  |  组件实例  |       -             |    -      |

### data-item
| 参数     | 说明                         | 类型    | 可选值                              | 默认值 |
| -------- | ----------------------------| ------- | ----------------------------------- | ------ |
| mergeCell     | 当前行是否有嵌套的表格        | Boolean  |       -             |    false      |
|列数据|对象则展示为嵌套的表格数据(**props**属性为数组包含了每列的key), 字符串则直接显示|Object,String|-|-|


### title-item 配置表头的数据
配置与 [**el-table-column组件**](https://element.eleme.cn/#/zh-CN/component/table#table-column-attributes) 保持一致

### 组件的其他属性
其他属性与[**el-table组件**](https://element.eleme.cn/#/zh-CN/component/table#table-attributes)保持一致
