# McMultipleInput 多选输入框

若对该组件有问题请咨询 <span style="color:#1890ff;">@雪人</span>

---

基于element-ui的el-input封装的多选输入框，主要解决原本el-input输入多个值时必须要回车的问题(失去焦点则默认为回车)

## 使用方法

<script>
export default {
  data() {
    return {
      names: []
    }
  }
}
</script>
<div class="demo-block">
  <mc-multiple-input
    v-model="names"
    placeholder="支持换行符分隔"
    @multipleChange="v => names = v"
  />
</div>

:::demo

```html
<script>
export default {
  data() {
    return {
      names: []
    }
  }
}
</script>
<div class="demo-block">
  <mc-multiple-input
    v-model="names"
    placeholder="支持换行符分隔"
    @multipleChange="v => names = v"
  />
</div>
```

:::

## 参数

| 参数名 | 默认值 | 备注 |
| -- | -- | -- |
| multipleChange | Function | 当失焦时触发该方法同步数据 |