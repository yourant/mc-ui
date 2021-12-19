---
title: 快速上手
---

# 快速上手

## 安装

请参考 [安装](../install/) 章节


## Hello World

```javascript
import { MButton } from "@mc/ui";
import Vue from 'vue'

<template>
  <div>
    <m-button>这是一个按钮</m-button>
  </div>
</template>

new Vue({
  el: '#app',
  components: {
    MButton
  }
})
```
