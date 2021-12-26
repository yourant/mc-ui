# McMemorySelector 记忆选择器

若对该组件有问题请咨询 <span style="color:#1890ff;">@雪人</span>

---

基于element-ui的el-select组件二次封装的本地记忆输入选择器，支持多选&单选

## 使用方法

### 单选

<script>
export default {
  data() {
    return {
      trackingOrderUser: '',
      trackingOrderUsers: []
    }
  }
}
</script>

<demo-block>
::: slot source
  <mc-memory-selector
    v-model="trackingOrderUser"
    clearable
    placeholder="请输入跟单人员"
    storage-key="trackingOrderUsers"
  />
:::

::: slot highlight
```html
<script>
export default {
  data() {
    return {
      trackingOrderUser: ''
    }
  }
}
</script>
<div>
  <mc-memory-selector
    v-model="trackingOrderUser"
    clearable
    placeholder="请输入跟单人员"
    storage-key="trackingOrderUsers"
  />
</div>
```
:::
</demo-block>

### 多选

<demo-block>
::: slot source
 <mc-memory-selector
    v-model="trackingOrderUsers"
    clearable
    multiple
    placeholder="请输入跟单人员"
    storage-key="trackingOrderUsers"
  />
:::

::: slot highlight
```html
<script>
export default {
  data() {
    return {
      trackingOrderUsers: []
    }
  }
}
</script>
<div>
  <mc-memory-selector
    v-model="trackingOrderUsers"
    clearable
    multiple
    placeholder="请输入跟单人员"
    storage-key="trackingOrderUsers"
  />
</div>
```
:::
</demo-block>

## 参数

除了[element-ui的el-selector本身支持的属性](https://element.eleme.cn/#/zh-CN/component/select)之外，该组件还增加了两个特殊的值用以控制输入值的缓存:

| 属性名 | 默认值 | 备注 |
| -- | -- | -- |
| storage-key | null | 本地localStorage的缓存键名，必须 |
| max-memory-count | 30 | 最大缓存记录数 |