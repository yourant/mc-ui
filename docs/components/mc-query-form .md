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
         qq:"44362233"
       }
      }
    },
    methods: {
      search() {
         console.log("请求接口")
      },
      reset(){
        this.formData = {}
      }
    }
  }
</script>

# MqueryForm 搜索条件表单

---

用于页面搜索条件的规范布局，以及隐藏不经常用的搜索条件。

### 基本用法

直接用 mc-query-form 标签包裹搜索条件，经常用到的条件放到 mc-query-form 标签下面，不经常用到的条件放到插槽 slot="senior" 下面，组件两个事件分别是 reset：重置事件，search：搜索事件

<div class="demo-block">
  <mc-query-form @reset="reset" @search="search" :model="formData" label-width="100px">
    <el-row>
      <el-col :span="6">
        <el-form-item label="姓名" prop="name">
          <el-input v-model="formData.name" placeholder="请输入姓名" clearable></el-input>
        </el-form-item>
      </el-col>
      <el-col :span="6">
      <el-form-item label="年龄" prop="age">
        <el-input v-model="formData.age" placeholder="请输入年龄" clearable></el-input>
      </el-form-item>
      </el-col>
      <el-col :span="6">
        <el-form-item label="性别" prop="sex">
          <el-input v-model="formData.sex" placeholder="请输入性别" clearable></el-input>
        </el-form-item>
      </el-col>
      <el-col :span="6">
        <el-form-item label="爱好" prop="hobby">
          <el-input v-model="formData.hobby" placeholder="请输入爱好" clearable></el-input>
        </el-form-item>
      </el-col>
      <el-col :span="6">
        <el-form-item label="爱好" prop="hobby">
          <el-input v-model="formData.hobby" placeholder="请输入爱好" clearable></el-input>
        </el-form-item>
      </el-col>
      <el-col :span="6">
        <el-form-item label="爱好" prop="hobby">
          <el-input v-model="formData.hobby" placeholder="请输入爱好" clearable></el-input>
        </el-form-item>
      </el-col>
    </el-row>
    <el-row slot="senior">
      <el-col :span="6">
        <el-form-item label="姓名" prop="name">
          <el-input v-model="formData.name" placeholder="请输入姓名" clearable></el-input>
        </el-form-item>
      </el-col>
      <el-col :span="6">
      <el-form-item label="年龄" prop="age">
        <el-input v-model="formData.age" placeholder="请输入年龄" clearable></el-input>
      </el-form-item>
      </el-col>
      <el-col :span="6">
        <el-form-item label="性别" prop="sex">
          <el-input v-model="formData.sex" placeholder="请输入性别" clearable></el-input>
        </el-form-item>
      </el-col>
      <el-col :span="6">
        <el-form-item label="爱好" prop="hobby">
          <el-input v-model="formData.hobby" placeholder="请输入爱好" clearable></el-input>
        </el-form-item>
      </el-col>
      <el-col :span="6">
        <el-form-item label="爱好" prop="hobby">
          <el-input v-model="formData.hobby" placeholder="请输入爱好" clearable></el-input>
        </el-form-item>
      </el-col>
      <el-col :span="6">
        <el-form-item label="爱好" prop="hobby">
          <el-input v-model="formData.hobby" placeholder="请输入爱好" clearable></el-input>
        </el-form-item>
      </el-col>
    </el-row>
  </mc-query-form>
</div>

::: demo

```html
<template>
  <mc-query-form @reset="reset" @search="search" :model="formData" label-width="100px">
    <el-row>
      <el-col :span="6">
        <el-form-item label="姓名" prop="name">
          <el-input v-model="formData.name" placeholder="请输入姓名" clearable></el-input>
        </el-form-item>
      </el-col>
      <el-col :span="6">
      <el-form-item label="年龄" prop="age">
        <el-input v-model="formData.age" placeholder="请输入年龄" clearable></el-input>
      </el-form-item>
      </el-col>
      <el-col :span="6">
        <el-form-item label="性别" prop="sex">
          <el-input v-model="formData.sex" placeholder="请输入性别" clearable></el-input>
        </el-form-item>
      </el-col>
      <el-col :span="6">
        <el-form-item label="爱好" prop="hobby">
          <el-input v-model="formData.hobby" placeholder="请输入爱好" clearable></el-input>
        </el-form-item>
      </el-col>
      <el-col :span="6">
        <el-form-item label="爱好" prop="hobby">
          <el-input v-model="formData.hobby" placeholder="请输入爱好" clearable></el-input>
        </el-form-item>
      </el-col>
      <el-col :span="6">
        <el-form-item label="爱好" prop="hobby">
          <el-input v-model="formData.hobby" placeholder="请输入爱好" clearable></el-input>
        </el-form-item>
      </el-col>
    </el-row>
    <el-row slot="senior">
      <el-col :span="6">
        <el-form-item label="姓名" prop="name">
          <el-input v-model="formData.name" placeholder="请输入姓名" clearable></el-input>
        </el-form-item>
      </el-col>
      <el-col :span="6">
      <el-form-item label="年龄" prop="age">
        <el-input v-model="formData.age" placeholder="请输入年龄" clearable></el-input>
      </el-form-item>
      </el-col>
      <el-col :span="6">
        <el-form-item label="性别" prop="sex">
          <el-input v-model="formData.sex" placeholder="请输入性别" clearable></el-input>
        </el-form-item>
      </el-col>
      <el-col :span="6">
        <el-form-item label="爱好" prop="hobby">
          <el-input v-model="formData.hobby" placeholder="请输入爱好" clearable></el-input>
        </el-form-item>
      </el-col>
      <el-col :span="6">
        <el-form-item label="爱好" prop="hobby">
          <el-input v-model="formData.hobby" placeholder="请输入爱好" clearable></el-input>
        </el-form-item>
      </el-col>
      <el-col :span="6">
        <el-form-item label="爱好" prop="hobby">
          <el-input v-model="formData.hobby" placeholder="请输入爱好" clearable></el-input>
        </el-form-item>
      </el-col>
    </el-row>
  </mc-query-form>
<template>
<script>
  export default {
    methods: {
      formData: {
        name: "张三",
        age: "30",
        sex: "男",
        phone: "135703434",
        qq: "44362233"
      },
      search() {
        console.log("请求接口");
      },
      reset() {
        this.formData = {};
      }
    }
  };
</script>
```

:::

### Attributes

| 参数              | 说明                                           | 类型    | 可选值     | 默认值        |
| ----------------- | ---------------------------------------------- | ------- | ---------- | ------------- |
| 继承 el-form 参数 | mc-query-form 的所有属性跟 el-form 一致        |         | —          | —             |
| show-reset-btn    | 是否显示重置按钮                               | boolean | true/false | true          |
| show-search-btn   | 是否显示查询按钮                               | boolean | true/false | true          |
| show-more         | 是否一开始就展示更多的条件                     | boolean | true/false | false         |
| search-left-style | 设置首行条件的样式，一般用来设置首行条件的宽度 | object  | -          | {} |
| label-width       | 用来设置条件文字的宽度                         | string  | -          | '100px'       |

### Event

| 事件名称 | 说明     | 回调参数              |
| -------- | -------- | --------------------- |
| reset    | 重置事件 | —                     |
| search   | 搜索事件 | 表单绑定的 model 对象 |

### slot

| name | 备注 |
| ---- | ---- |
| default | 默认表单项 |
| senior | 收起的表单项 |
| search | 按钮组 |