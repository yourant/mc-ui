# mc-svg-icon 图标

---

为了统一各系统的图标管理，考虑易于集成与使用，将各系统用到的svg图标整合为`mc-svg-icon`。

### 如何使用

请直接copy下列图标示例的代码即可。

<style lang="scss" scoped>
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
</style>

<demo-block>
::: slot source
<div class="demo-block mc-svg-icons">
  <mc-svg-icon icon="dashboard"></mc-svg-icon>
  <mc-svg-icon icon="eye"></mc-svg-icon>
  <mc-svg-icon icon="eye-open"></mc-svg-icon>
  <mc-svg-icon icon="form"></mc-svg-icon>
</div>
:::

::: slot highlight

```html
<mc-svg-icon icon="eye" />
<mc-svg-icon icon="dashboard" />
<mc-svg-icon icon="eye-open" />
<mc-svg-icon icon="form" />
```
:::
</demo-block>

### 如何新增icon

在mc-ui的项目目录`/packages/mc-svg-icon/`中，将需要新增的svg放入`src/icons`目录内即可，icon的名字就是svg文件名字。例如放入一个叫`example.svg`的文件，那么对应`<mc-svg-icon icon="item.name" />`这样使用。

然后打包发布新版本就可以了。

### 图标示例

<demo-block>
::: slot source
<mc-svg-icon-demo1></mc-svg-icon-demo1>
:::
</demo-block>