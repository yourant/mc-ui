<style>

</style>
<script>
 export default {
   data() {
      return {
         formData:{
         name:"张三",
         age:"30",
         sex:"男",
         phone:"135703434",
         qq:"44362233",
         hobby:'乒乓球'
       }
      }
    },
    methods: {
      search() {
         console.log("请求接口",this.formData)
      },
      reset(){
        this.formData = {}
      }
    }
  }
</script>

# McQueryShrink 搜索条件表单

若对该组件有问题请咨询 <span style="color:#1890ff;">@幽草</span>

---

对搜索区域，进行展开收起操作
### 基本用法

直接用 mc-query-shrink 标签包裹搜索条件，收缩展示第一行，展开展示全部，组件两个事件分别是 reset：重置事件，search：搜索事件

<div class="demo-block">
  <mc-query-shrink @reset="reset" @search="search" :model="formData" label-width="40px">
        <el-form-item label="姓名" prop="name">
            <el-input v-model="formData.name" placeholder="请输入姓名" clearable></el-input>
        </el-form-item>
        <el-form-item label="年龄" prop="age">
            <el-input v-model="formData.age" placeholder="请输入年龄" clearable></el-input>
        </el-form-item>
        <el-form-item label="性别" prop="sex">
            <el-input v-model="formData.sex" placeholder="请输入性别" clearable></el-input>
        </el-form-item>
        <el-form-item label="性别" prop="sex">
            <el-input v-model="formData.sex" placeholder="请输入性别" clearable></el-input>
        </el-form-item>  
        <el-form-item label="性别" prop="sex">
            <el-input v-model="formData.sex" placeholder="请输入性别" clearable></el-input>
        </el-form-item>  
        <el-form-item label="性别" prop="sex">
            <el-input v-model="formData.sex" placeholder="请输入性别" clearable></el-input>
        </el-form-item>
        <el-form-item label="爱好" prop="hobby">
            <el-input v-model="formData.hobby" placeholder="请输入爱好" clearable></el-input>
        </el-form-item>
        <template slot="search">
            <el-button
            type="primary"
            >
            自定义
            </el-button>
        </template>
  </mc-query-shrink>
</div>

::: demo

```html
<template>
    <mc-query-shrink @reset="reset" @search="search" :model="formData" label-width="40px">
        <el-form-item label="姓名" prop="name">
            <el-input v-model="formData.name" placeholder="请输入姓名" clearable></el-input>
        </el-form-item>
        <el-form-item label="年龄" prop="age">
            <el-input v-model="formData.age" placeholder="请输入年龄" clearable></el-input>
        </el-form-item>
        <el-form-item label="性别" prop="sex">
            <el-input v-model="formData.sex" placeholder="请输入性别" clearable></el-input>
        </el-form-item>
        <el-form-item label="性别" prop="sex">
            <el-input v-model="formData.sex" placeholder="请输入性别" clearable></el-input>
        </el-form-item>  
        <el-form-item label="性别" prop="sex">
            <el-input v-model="formData.sex" placeholder="请输入性别" clearable></el-input>
        </el-form-item>  
        <el-form-item label="性别" prop="sex">
            <el-input v-model="formData.sex" placeholder="请输入性别" clearable></el-input>
        </el-form-item>
        <el-form-item label="爱好" prop="hobby">
            <el-input v-model="formData.hobby" placeholder="请输入爱好" clearable></el-input>
        </el-form-item>
        <template slot="search">
            <el-button
            type="primary"
            >
            自定义
            </el-button>
        </template>
    </mc-query-shrink>
<template>
<script>
  export default {
   data() {
      return {
         formData:{
         name:"张三",
         age:"30",
         sex:"男",
         phone:"135703434",
         qq:"44362233",
         hobby:'乒乓球'
       }
      }
    },
    methods: {
      search() {
         console.log("请求接口",this.formData)
      },
      reset(){
        this.formData = {}
      }
    }
  }
</script>
```

:::

### Attributes

| 参数              | 说明                                           | 类型    | 可选值     | 默认值        |
| ----------------- | ---------------------------------------------- | ------- | ---------- | ------------- |
| 继承 el-form 参数 | mc-query-shrink 的所有属性跟 el-form 一致        |         | —          | —             |
| show-reset-btn    | 是否显示重置按钮                               | boolean | true/false | true          |
| show-search-btn   | 是否显示查询按钮                               | boolean | true/false | true          |
| shrink      | 是否一开始就收缩                    | boolean | true/false | true         |
| label-width       | 用来设置条件文字的宽度                         | string  | -          | '145px'       |

### Event

| 事件名称 | 说明     | 回调参数              |
| -------- | -------- | --------------------- |
| reset    | 重置事件 | —                     |
| search   | 搜索事件 | 表单绑定的 model 对象 |

### slot

| name | 备注 |
| ---- | ---- |
| search | 自定义按钮 |