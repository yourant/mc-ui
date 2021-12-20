# McCreate 手动挂载组件

有问题请咨询 <span style="color:#1890ff;">青云</span>

----
通过传递target可在任意元素上挂载组件
### 用法
调用 $create方法传递你要挂载的组件，及组件的props, 返回组件挂载后的实例

<script>
  import MTag from 'packages/tag/index'
  export default{
    methods: {
      createTag() {
        const comp = this.$create(MTag, {
          props: {
            color: 'success'
          },
          style: 'margin-left: 10px',
          target: '.mc__create__demo'
        }, '测试标签 2秒后将卸载')

        setTimeout(() => {
          comp.remove()
        }, 2000)
      }
    }
  }
</script>
<div class="demo-block mc__create__demo">
   <m-button @click="createTag">挂载一个标签</m-button>
</div>

::: demo

```html
<script>
  import MTag from 'packages/tag/index'
  export default{
    methods: {
      createTag() {
        const comp = this.$create(MTag, {
          props: {
            color: 'success'
          },
          style: 'margin-left: 10px',
          target: '.mc__create__demo'
        }, '测试标签 2秒后将卸载')

        setTimeout(() => {
          // 卸载组件的调用，也可在组件内部使用 this.remove()
          // create给组件扩展了remove方法
          comp.remove()
        }, 2000)
      }
    }
  }
</script>
<div class="demo-block mc__create__demo">
   <m-button @click="createTag">挂载一个标签</m-button>
</div>
```

:::



### McCreate 参数
参考Vue本身[createElement](https://cn.vuejs.org/v2/guide/render-function.html#createElement-%E5%8F%82%E6%95%B0)函数的传参

| 参数        | 说明             | 类型    | 可选值                        | 默认值           |
| ----------- | ---------------- | ------- | ----------------------------- | ---------------- |
| 参数1       | 要挂载的组件       | comp  | -                       | -               |
| 参数2      | attribute数据对象(**新增target为挂载目标，值为选择器**) | Object | -     |
| 参数3  | 子级虚拟节点 (VNodes) | String, Array   | -       | -    |
