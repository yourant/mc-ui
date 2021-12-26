# McDateRangePicker 日期范围选择

若对该组件有问题请咨询 <span style="color:#1890ff;">@雪人</span>

---

基于element-ui的DatePicker二次封装的时间范围选择器，具有以下特点：

1. 支持最大选择时间范围限制

2. 支持开始时间与结束时间范围互相关联

3. 支持仅选择开始时间或结束时间

## 使用方法

<script>
export default {
  data() {
    return {
      startTime: '',
      endTime: ''
    }
  }
}
</script>

<demo-block>
::: slot source
 <div style="width:300px;">
    <mc-date-range-picker
      :start-time="startTime || ''"
      :end-time="endTime || ''"
      @startTimeChange="val => startTime = val"
      @endTimeChange="val => endTime = val"
    />
  </div>
:::

::: slot highlight
```html
<script>
export default {
  data() {
    return {
      startTime: '',
      endTime: ''
    }
  }
}
</script>
<div>
  <mc-date-range-picker
    :start-time="startTime || ''"
    :end-time="endTime || ''"
    @startTimeChange="val => startTime = val"
    @endTimeChange="val => endTime = val"
  />
</div>
```
:::
</demo-block>


需要注意的是，由于vue不支持两个的的v-modal修改，所以必须要手动进行值的修改，也就是通过`startTimeChange`和`endTimeChange`去处理值的修改。

其次，由于element-ui的DatePicker的清除按钮会将值设为null，导致跟`mc-date-range-picker`组件的props类型检查冲突会在console面板输出错误（不会影响功能），所以为了console的干净，传值时做一层兼容`startTime || ''`

## 参数

| 参数名 | 默认值 | 备注 |
| -- | -- | -- |
| start-time | '' | 开始时间 |
| end-time | '' | 结束时间 |
| max-date-range | 61 | 限制最大的选择范围，默认61天（2个月） |
| startTimeChange | Function | 方法，开始时间改变 |
| endTimeChange | Function | 方法，结束时间改变 |