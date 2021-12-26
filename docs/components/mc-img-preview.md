# McImgPreview  图片预览

若对该组件有问题请咨询 <span style="color:#1890ff;">@雪人</span>

---

基于element-ui的el-image组件封装的图片预览组件，主要解决在table中存在`fixed:right`的列时导致的层级问题：

![image preview](https://jade-magic-d0b.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Fd9dad5b2-3d3f-4174-b971-23036933f966%2Fac99426eb5f4aa58c6977fa83f42fa4bb08738ee.png?table=block&id=e5fe33af-59bf-48b0-9f83-9f49a21971f0&spaceId=43e1b609-a691-4162-9b00-8a161ae06ef3&width=1920&userId=&cache=v2)

同时解决element-ui的图片预览组件在预览时无法得知当前预览图片的状态以及张数问题

## 使用方法

<style>
  .example-img {
    width: 100px;
    height: 100px;
    margin: 0px 10px 10px 0;
    border: 1px solid #ccc;
    border-radius: 5px;
    cursor: pointer;
  }
</style>
<script>
export default {
  data() {
    return {
      imgs: [
        'http://api.bl-pangu.opsfun.com/uploads/66/99/0f55bfd920b0e7bf621e781d408e6699.jpg',
        'http://api.bl-pangu.opsfun.com/uploads/76/82/abaeaf0c1c4d1453c5414dc745957682.jpg',
        'http://api.bl-pangu.opsfun.com/uploads/77/d9/0db3abfc9e10e405d8423885398377d9.jpg',
        'http://api.bl-pangu.opsfun.com/uploads/99/dd/a3c6ab4a04b25d0350a60f4806c199dd.jpg',
        'http://api.bl-pangu.opsfun.com/uploads/a9/a5/9eb9b7d00a002a7c874018e2f35aa9a5.jpg',
        'http://api.bl-pangu.opsfun.com/uploads/9d/92/81a518f1675117b1c0e08e395e749d92.jpg',
        'http://api.bl-pangu.opsfun.com/uploads/d8/fc/9555e7ec351f588f6748c8016022d8fc.jpg',
        'http://api-t.bl-pangu.opsfun.com/uploads/10/4d/29df8ea74a65b55925b2ddd153d1104d.jpg',
        'http://api-t.bl-pangu.opsfun.com/uploads/77/15/a1dfc5f6b552200792fc4ace9b437715.png',
        'http://api-t.bl-pangu.opsfun.com/uploads/be/f7/0f43abaaf895f2ca288d5166d9febef7.jpg',
        'http://api-t.bl-pangu.opsfun.com/uploads/f0/e6/24e0a51c492cf2d730d58ea80e59f0e6.jpg',
        'https://cdn-1.blushmark.com/upimg/s85/18/d8/aa6fc5efcf5538ce114894ef9b6418d8.jpg',
        'https://cdn-1.blushmark.com/upimg/s85/85/4b/b1d6b3e718c6bf585082bafffab8854b.jpg',
        'https://cdn-1.blushmark.com/upimg/s85/1f/22/871599888b6967cbf6d1d44f14bf1f22.jpg',
        'http://api-t.bl-pangu.opsfun.com/uploads/c5/8c/bcc941d00ee739025633c75f8f1ec58c.png',
        'http://api-t.bl-pangu.opsfun.com/uploads/e2/a8/b5f1f3271d8bb5d1cfef434d8d17e2a8.jpg',
        'http://api-t.bl-pangu.opsfun.com/uploads/64/55/7f1e25b05fae9bba896b63f19cb86455.jpg',
        'https://cdn-1.blushmark.com/upimg/s85/72/2a/cbae0804be32fd120cd88e10470c722a.jpg',
        'https://cdn-1.blushmark.com/upimg/s85/40/04/22eed1c5348886a377cb8e69f19e4004.jpg',
        'https://cdn-1.blushmark.com/upimg/s85/e7/40/e6113da22474c4048a7d6e235314e740.jpg',
        'https://cdn-1.blushmark.com/upimg/s85/8c/4f/920abeeec0515f34a615233a23cc8c4f.jpg',
        'https://cdn-1.blushmark.com/upimg/s85/10/b7/903d51215cc6732c4f00abf3d19b10b7.jpg'
      ],
      imgs2: [
        {
          originUrl: 'https://cdn-1.blushmark.com/upimg/s553/0d/61/76c8a6764e09ab9a924fb1006ecc0d61.jpg',
          thumbnailUrl: 'https://cdn-1.blushmark.com/upimg/s85/0d/61/76c8a6764e09ab9a924fb1006ecc0d61.jpg'
        },
        {
          originUrl: 'https://cdn-1.blushmark.com/upimg/s553/c7/52/60fcabd4011ae06e427365ec818bc752.jpg',
          thumbnailUrl: 'https://cdn-1.blushmark.com/upimg/s85/c7/52/60fcabd4011ae06e427365ec818bc752.jpg'
        },
        {
          originUrl: 'https://cdn-1.blushmark.com/upimg/s553/1b/15/2afa58d808872be254210edb28771b15.jpg',
          thumbnailUrl: 'https://cdn-1.blushmark.com/upimg/s85/1b/15/2afa58d808872be254210edb28771b15.jpg'
        }
      ]
    }
  },
  methods: {
    showImgsPreview(index) {
      this.$imgPreview.show(this.imgs, index)
    },
    showSingleImg() {
      this.$imgPreview.show(['http://api.bl-pangu.opsfun.com/uploads/66/99/0f55bfd920b0e7bf621e781d408e6699.jpg'], 0)
    },
    showThumbnailImg() {
      this.$imgPreview.show(this.imgs2, 0)
    }
  }
}
</script>

<demo-block>
::: slot source
 <div>
    <div style="margin-bottom: 10px;"><b>点击图片查看预览</b></div>
    <el-image
      class="example-img"
      v-for="(item, index) in imgs"
      :key="item"
      :src="item"
      @click="showImgsPreview(index)"
    />
  </div>
  <div>
    <div style="margin-bottom: 10px;"><b>单个图片</b></div>
    <el-image
      class="example-img"
      src="http://api.bl-pangu.opsfun.com/uploads/66/99/0f55bfd920b0e7bf621e781d408e6699.jpg"
      @click="showSingleImg"
    />
  </div>
:::

::: slot highlight
```html
<script>
export default {
  data() {
    return {
      imgs: [
        'http://api.bl-pangu.opsfun.com/uploads/66/99/0f55bfd920b0e7bf621e781d408e6699.jpg',
        'http://api.bl-pangu.opsfun.com/uploads/76/82/abaeaf0c1c4d1453c5414dc745957682.jpg',
        'http://api.bl-pangu.opsfun.com/uploads/77/d9/0db3abfc9e10e405d8423885398377d9.jpg',
        'http://api.bl-pangu.opsfun.com/uploads/99/dd/a3c6ab4a04b25d0350a60f4806c199dd.jpg',
        'http://api.bl-pangu.opsfun.com/uploads/a9/a5/9eb9b7d00a002a7c874018e2f35aa9a5.jpg',
        'http://api.bl-pangu.opsfun.com/uploads/9d/92/81a518f1675117b1c0e08e395e749d92.jpg',
        'http://api.bl-pangu.opsfun.com/uploads/d8/fc/9555e7ec351f588f6748c8016022d8fc.jpg',
        'http://api-t.bl-pangu.opsfun.com/uploads/10/4d/29df8ea74a65b55925b2ddd153d1104d.jpg',
        'http://api-t.bl-pangu.opsfun.com/uploads/77/15/a1dfc5f6b552200792fc4ace9b437715.png',
        'http://api-t.bl-pangu.opsfun.com/uploads/be/f7/0f43abaaf895f2ca288d5166d9febef7.jpg',
        'http://api-t.bl-pangu.opsfun.com/uploads/f0/e6/24e0a51c492cf2d730d58ea80e59f0e6.jpg',
        'https://cdn-1.blushmark.com/upimg/s85/18/d8/aa6fc5efcf5538ce114894ef9b6418d8.jpg',
        'https://cdn-1.blushmark.com/upimg/s85/85/4b/b1d6b3e718c6bf585082bafffab8854b.jpg',
        'https://cdn-1.blushmark.com/upimg/s85/1f/22/871599888b6967cbf6d1d44f14bf1f22.jpg',
        'http://api-t.bl-pangu.opsfun.com/uploads/c5/8c/bcc941d00ee739025633c75f8f1ec58c.png',
        'http://api-t.bl-pangu.opsfun.com/uploads/e2/a8/b5f1f3271d8bb5d1cfef434d8d17e2a8.jpg',
        'http://api-t.bl-pangu.opsfun.com/uploads/64/55/7f1e25b05fae9bba896b63f19cb86455.jpg',
        'https://cdn-1.blushmark.com/upimg/s85/72/2a/cbae0804be32fd120cd88e10470c722a.jpg',
        'https://cdn-1.blushmark.com/upimg/s85/40/04/22eed1c5348886a377cb8e69f19e4004.jpg',
        'https://cdn-1.blushmark.com/upimg/s85/e7/40/e6113da22474c4048a7d6e235314e740.jpg',
        'https://cdn-1.blushmark.com/upimg/s85/8c/4f/920abeeec0515f34a615233a23cc8c4f.jpg',
        'https://cdn-1.blushmark.com/upimg/s85/10/b7/903d51215cc6732c4f00abf3d19b10b7.jpg'
      ]
    }
  },
  methods: {
    showImgsPreview(index) {
      this.$imgPreview.show(this.imgs, index)
    },
    showSingleImg() {
      this.$imgPreview.show(['http://api.bl-pangu.opsfun.com/uploads/66/99/0f55bfd920b0e7bf621e781d408e6699.jpg'], 0)
    }
  }
}
</script>
<div class="demo-block">
  <div>
    <div style="margin-bottom: 10px;"><b>点击图片查看预览</b></div>
    <el-image
      class="example-img"
      v-for="(item, index) in imgs"
      :key="item"
      :src="item"
      @click="showImgsPreview(index)"
    />
  </div>
  <div>
    <div style="margin-bottom: 10px;"><b>单个图片</b></div>
    <el-image
      class="example-img"
      src="http://api.bl-pangu.opsfun.com/uploads/66/99/0f55bfd920b0e7bf621e781d408e6699.jpg"
      @click="showSingleImg"
    />
  </div>
</div>
```
:::
</demo-block>
 



## 列表展示缩略图

如需要在右侧显示缩略图，则在传入数组中放入对象即可，对象中`originUrl`放原图链接，`thumbnailUrl`放缩略图链接。

<demo-block>
::: slot source
 <div>
    <div style="margin-bottom: 10px;"><b>点击图片查看预览, 右键右侧缩略图在新窗口打开可查看缩略图大小</b></div>
    <el-image
      class="example-img"
      v-for="(item, index) in imgs2"
      :key="item.originUrl"
      :src="item.thumbnailUrl"
      @click="showThumbnailImg(index)"
    />
  </div>
:::

::: slot highlight

```html
<script>
export default {
  data() {
    return {
      imgs: [
        {
          originUrl: 'https://cdn-1.blushmark.com/upimg/s553/0d/61/76c8a6764e09ab9a924fb1006ecc0d61.jpg',
          thumbnailUrl: 'https://cdn-1.blushmark.com/upimg/s85/0d/61/76c8a6764e09ab9a924fb1006ecc0d61.jpg'
        },
        {
          originUrl: 'https://cdn-1.blushmark.com/upimg/s553/c7/52/60fcabd4011ae06e427365ec818bc752.jpg',
          thumbnailUrl: 'https://cdn-1.blushmark.com/upimg/s85/c7/52/60fcabd4011ae06e427365ec818bc752.jpg'
        },
        {
          originUrl: 'https://cdn-1.blushmark.com/upimg/s553/1b/15/2afa58d808872be254210edb28771b15.jpg',
          thumbnailUrl: 'https://cdn-1.blushmark.com/upimg/s85/1b/15/2afa58d808872be254210edb28771b15.jpg'
        }
      ]
    }
  },
  methods: {
    showThumbnailImg(index) {
      this.$imgPreview.show(this.imgs, index)
    }
  }
}
</script>
<div class="demo-block">
  <div>
    <div style="margin-bottom: 10px;"><b>点击图片查看预览, 右键右侧缩略图在新窗口打开可查看缩略图大小</b></div>
    <el-image
      class="example-img"
      v-for="(item, index) in imgs"
      :key="item.originUrl"
      :src="item.thumbnailUrl"
      @click="showThumbnailImg(index)"
    />
  </div>
</div>
```
:::
</demo-block>

## 参数

| 方法 | 参数 | 返回值 | 备注 |
| -- | -- | -- | -- |
| show | imgs图片列表，index从第几张开始，target需要添加到哪个元素，默认为body | 返回组件实例 | 显示预览列表 |
| hide | 无 | undefined | 主动隐藏 |