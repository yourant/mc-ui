<script>
  import { svgs } from '../../packages/mc-svg-icon/src/index.js';
  import copy from 'copy-to-clipboard';

  export default {
    data() {
      return {
        svgs
      };
    },
    methods: {
      renderExample(name) {
        return `<mc-svg-icon icon="${name}" />`
      },
      copyHandle(name) {
        const text = this.renderExample(name);
        copy(text);
        this.$message.success(`"${text}"已经复制到剪贴板`);
      }
    }
  }
</script>
<style lang="less">
  .mc-svg-icons {
    svg {
      max-width: 50px;
      max-height: 50px;
      border-right: 1px solid #ccc;
      padding: 0 20px;
      &:first-child {
        padding-left: 0px;
      }
      &:last-child {
        border-right: none;
      }
    }
  }
  .mc-svg-icon-list {
    display: flex;
    flex-wrap: wrap;
    border-left: 1px solid #eaeaea;
    margin: 0;
    padding: 0;

    li {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      width: 250px;
      height: 150px;
      border: 1px solid #eaeaea;
      border-left: none;
      list-style: none;
      margin-bottom: -1px;
    }

    .icon-container {
      width: 50px;
      height: 50px;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    svg {
      width: 2em;
      height: 2em;
    }

    .name {
      margin-top: 20px;
      color: #999;
      cursor: pointer;
    }
  }
</style>

# mc-svg-icon 图标

---

为了统一各系统的图标管理，考虑易于集成与使用，将各系统用到的svg图标整合为`mc-svg-icon`。

### 如何使用

请直接copy下列图标示例的代码即可。

<div class="demo-block mc-svg-icons">
  <mc-svg-icon icon="dashboard"></mc-svg-icon>
  <mc-svg-icon icon="eye"></mc-svg-icon>
  <mc-svg-icon icon="eye-open"></mc-svg-icon>
  <mc-svg-icon icon="form"></mc-svg-icon>
</div>

::: demo

```html
<mc-svg-icon icon="eye" />
<mc-svg-icon icon="dashboard" />
<mc-svg-icon icon="eye-open" />
<mc-svg-icon icon="form" />
```

:::

### 如何新增icon

在mc-ui的项目目录`/packages/mc-svg-icon/`中，将需要新增的svg放入`src/icons`目录内即可，icon的名字就是svg文件名字。例如放入一个叫`example.svg`的文件，那么对应`<mc-svg-icon icon="item.name" />`这样使用。

然后打包发布新版本就可以了。

### 图标示例
<ul class="mc-svg-icon-list">
  <li v-for="item in svgs" :key="item">
    <div class="icon-container">
      <mc-svg-icon class="icon-item" :icon="item"></mc-svg-icon>
    </div>
    <span class="name" v-text="renderExample(item)" @click="copyHandle(item)"></span>
  </li>
</ul>
