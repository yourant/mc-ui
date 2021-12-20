# McDraggableUpload 图片上传支持拖拽

若对该组件有问题请咨询 <span style="color:#1890ff;">@幽草</span>

---

基于element-ui的el-upload封装的上传组件，主要增加拖拽功能，使上传的图片可以拖拽

## 使用方法

<script>
    export default {
        data() {
            return {
                maxLength: 10,
                imageList:[{url:'https://bl-supply-chain-test.s3.cn-north-1.amazonaws.com.cn/scm/78f4d61161df7865dae9adc2315a23ef.jpg',id:1},{url:'https://bl-supply-chain-test.s3.cn-north-1.amazonaws.com.cn/scm/2402E49F.jpg',id:2},{url:'https://bl-supply-chain-test.s3.cn-north-1.amazonaws.com.cn/scm/11.jfif',id:3}],
                showTags:true,
                uploadLoading:false
            }
        },
        methods: {
            httpRequest(file){
                console.log("暂未调取接口")
            },
            handleRemove(index){
                this.imageList.splice(index, 1)
            }
        }
    }
</script>
<div>
    <mc-draggable-upload
     :image-list="imageList"
     :show-tags="showTags"
     @imageList = "(val)=>imageList = val"
     :max-length="maxLength"
     @handleRemove="handleRemove"
    >
     <template v-slot:upload>
        <el-upload
            accept="image/jpeg,image/png,image/jpg"
            class="wrap"
            list-type="picture-card"
            action="#"
            :show-file-list="false"
            :http-request="httpRequest"
            :limit="maxLength" 
            multiple
            :disabled="uploadLoading"
        >
            <i
            slot="default"
            :class="uploadLoading ? 'el-icon-loading' : 'el-icon-plus'"
            />
        </el-upload> 
     </template>
    </mc-draggable-upload>
</div>

:::demo

```html
<script>
    export default {
        data() {
            return {
                maxLength: 10,
                imageList:[{url:'https://bl-supply-chain-test.s3.cn-north-1.amazonaws.com.cn/scm/78f4d61161df7865dae9adc2315a23ef.jpg',id:1},{url:'https://bl-supply-chain-test.s3.cn-north-1.amazonaws.com.cn/scm/2402E49F.jpg',id:2},{url:'https://bl-supply-chain-test.s3.cn-north-1.amazonaws.com.cn/scm/11.jfif',id:3}],
                showTags:true,
                uploadLoading:false
            }
        },
        methods: {
            httpRequest(file){
                console.log("暂未调取接口")
            },
            handleRemove(index){
                this.imageList.splice(index, 1)
            }
        }
    }
</script>
<div>
    <mc-draggable-upload
     :image-list="imageList"
     :show-tags="showTags"
     @imageList = "(val)=>imageList = val"
     :max-length="maxLength"
     @handleRemove="handleRemove"
    >
     <template v-slot:upload>
        <el-upload
            accept="image/jpeg,image/png,image/jpg"
            class="wrap"
            list-type="picture-card"
            action="#"
            :show-file-list="false"
            :http-request="httpRequest"
            :limit="maxLength" 
            multiple
            :disabled="uploadLoading"
        >
            <i
            slot="default"
            :class="uploadLoading ? 'el-icon-loading' : 'el-icon-plus'"
            />
        </el-upload> 
     </template>
    </mc-draggable-upload>
</div>
```
:::

### Attributes

插槽upload里面的组件可以直接放element-ui中的组件el-upload（上面写了个参考示例），除了删除事件和预览，别的直接按照el-upload即可

| 参数              | 说明                                           | 类型    | 可选值     | 默认值        |
| ----------------- | ---------------------------------------------- | ------- | ---------- | ------------- |
| maxLength         | 最大上传个数，与limit保持一致                   |  Number | —          | 10            |
| imageList          | 需要拖拽的图片列表                           | Array     | -          |       |[]
| showTags          | 是否需要展示左上角图标                         | boolean | true/false | false         |

### Event

| 事件名称 | 说明     | 回调参数              |
| -------- | -------- | --------------------- |
| handleRemove   | 删除事件 |   imageList的index                   |
