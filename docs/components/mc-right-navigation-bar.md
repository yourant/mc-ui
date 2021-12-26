# McRightNavigationBar 右侧固定导航栏

有问题请咨询 <span style="color:#1890ff;">青云</span>

---
可自定义配置的右侧固定导航栏，已经集成了Backtop 回到顶部组件, 无需再做引入

<script>
  export default {
    data () {
      const self = this
      return {
        configs: [
          {
            icon: 'm-icon-remindfill',
            slot: 'slot1',
            handleClick () {
              console.log('插槽')
            }
          },
          {
            type: 'link',
            icon: 'file',
            value: 'https://www.google.com',
            lable: '操作<br/>手册'
          },
          {
            type: 'img',
            icon: 'comment',
            value:
              'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg.zcool.cn%2Fcommunity%2F01b33958b5791aa801219c776b5d8c.gif&refer=http%3A%2F%2Fimg.zcool.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1636681330&t=3b483bbd5fbda6ca75347ce2e3c67e90',
            lable: '问题<br/>反馈',
            handleClick ({ evt, item }) {
              console.log('other', evt, item, self)
            }
          },
          {
            icon: 'close',
            value: '',
            handleClick ({ evt, item, vm }) {
              console.log('other', evt, item, vm)
              // 关闭
              vm.hide()
            }
          },
          {
            icon: 'top',
            value: '',
            handleClick ({ evt, item }) {
              console.log('other', evt, item)
            }
          }
        ]
      }
    }
  }
</script>

## 默认用法 效果看右下角

<demo-block>
::: slot source
 <style scoped>
.slot-content {
  position: absolute;
  top: 0;
  right: 70px;
  width: 260px;
  height: 260px;
  box-shadow: 0 0 6px 1px rgb(0 0 0 / 10%);
  border-radius: 4px;
  background: #fff;
  padding: 10px;
  box-sizing: border-box;
}
</style>
<div class="demo-block">
  <mc-right-navigation-bar :configs="configs">
    <template #slot1="{item}">
      <div class="slot-content">
        <h2>slot标题</h2>
        <div>type: {{ item.type }}</div>
        <div>icon: {{ item.icon }}</div>
        <div>slot: {{ item.slot }}</div>
      </div>
    </template>
  </mc-right-navigation-bar>
</div>
:::

::: slot highlight
```html
<script>
  export default {
    data () {
      const self = this
      return {
        configs: [
          {
            icon: 'm-icon-remindfill',
            slot: 'slot1',
            handleClick () {
              console.log('插槽')
            }
          },
          {
            type: 'link',
            icon: 'file',
            value: 'https://www.google.com',
            lable: '操作<br/>手册'
          },
          {
            type: 'img',
            icon: 'comment',
            value:
              'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg.zcool.cn%2Fcommunity%2F01b33958b5791aa801219c776b5d8c.gif&refer=http%3A%2F%2Fimg.zcool.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1636681330&t=3b483bbd5fbda6ca75347ce2e3c67e90',
            lable: '问题<br/>反馈',
            handleClick ({ evt, item }) {
              console.log('other', evt, item, self)
            }
          },
          {
            icon: 'close',
            value: '',
            handleClick ({ evt, item, vm }) {
              console.log('other', evt, item, vm)
              // 关闭
              vm.hide()
            }
          },
          {
            icon: 'top',
            value: '',
            handleClick ({ evt, item }) {
              console.log('other', evt, item)
            }
          }
        ]
      }
    }
  }
</script>
<style scoped>
.slot-content {
  position: absolute;
  top: 0;
  right: 70px;
  width: 260px;
  height: 260px;
  box-shadow: 0 0 6px 1px rgb(0 0 0 / 10%);
  border-radius: 4px;
  background: #fff;
  padding: 10px;
  box-sizing: border-box;
}
</style>
<div class="demo-block">
  <mc-right-navigation-bar :configs="configs">
    <template #slot1="{item}">
      <div class="slot-content">
        <h2>slot标题</h2>
        <div>type: {{ item.type }}</div>
        <div>icon: {{ item.icon }}</div>
        <div>slot: {{ item.slot }}</div>
      </div>
    </template>
  </mc-right-navigation-bar>
</div>
```

:::
</demo-block>

### Attributes
| 参数     | 说明                         | 类型    | 可选值                              | 默认值 |
| -------- | ----------------------------| ------- | ----------------------------------- | ------ |
| configs     | 配置数据                   | configs-item[]  |       -             |    -      |

### configs-item
| 参数     | 说明                         | 类型    | 可选值                              | 默认值 |
| -------- | ----------------------------| ------- | ----------------------------------- | ------ |
| type     | item的类型                   | string  |       link, img, undefined        |    undefined    |
| icon     | Icon图标或McSvgIcon图标的className   | string  |       -                   |    -    |
| value     | type为link时填跳转链接，img则为图片的地址  | string  |       -              |    -    |
| slot     | 插槽名称，定义了后不会使用value值  | string  |       -             |    -    |
| lable     | 说明文字，支持富文本，不传就不做展示  | string  |       -             |    -    |
| handleClick  | 每个item点击后的事件回调  | function  |       -              |    -    |

### other
内部已经集成了element ui的 Backtop 回到顶部组件，其[**配置方法**](https://element.eleme.cn/#/zh-CN/component/backtop)除click集成到configs中外其他与官网保持一致

*configs中的最后一个配置为Backtop*

