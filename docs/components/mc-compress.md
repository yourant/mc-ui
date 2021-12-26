# 前端压缩图片上传

---

上传图片的时候，可能会直接拿手机拍照上传，一般图片会比较大，需要做一个压缩处理，这个时候可以用到这个前端压缩库，结合upload组件实现前端压缩图片上传

<style>
 .avatar-uploader .el-upload {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
  }
  .avatar-uploader .el-upload:hover {
    border-color: #409EFF;
  }
  .avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 178px;
    height: 178px;
    line-height: 178px;
    text-align: center;
  }
  .avatar {
    width: 178px;
    height: 178px;
    display: block;
  }
</style>
<script>
 import compress from "@/utils/compress.js"
 export default {
    data() {
      return {
        imageUrl: ''
      };
    },
    methods: {
      handleAvatarSuccess(res, file) {
        this.imageUrl = URL.createObjectURL(file.raw);
      },
     
     async beforeAvatarUpload(file) {
      let elUpload = this.$refs.elUpload;
      let uploadFiles = elUpload.uploadFiles;
      const uploadInner = elUpload.$refs['upload-inner'];
      compress.resetPost(uploadInner,uploadFiles)
      //超过200k就压缩到200k以内
      const limitM = 0.2;
      const isbeyond = file.size / 1024 / 1024 > limitM;
      if (isbeyond) {
        await compress.resetFile(uploadFiles, file, limitM);
        return true;
      }
      return true;
    },
    
  }
  }
</script>

### 基本用法

在编写el-upload组件的时候，引入compress.js 库，在beforeupoad的回调函数的中配置下面的代码

<demo-block>
::: slot source
 <el-upload
  ref="elUpload"
  class="avatar-uploader"
  action="https://jsonplaceholder.typicode.com/posts/"
  :show-file-list="false"
  :on-success="handleAvatarSuccess"
  :before-upload="beforeAvatarUpload">
  <img v-if="imageUrl" :src="imageUrl" class="avatar">
  <i v-else class="el-icon-plus avatar-uploader-icon"></i>
</el-upload>
:::

::: slot highlight
```html
<el-upload
  ref="elUpload"
  class="avatar-uploader"
  action="https://jsonplaceholder.typicode.com/posts/"
  :show-file-list="false"
  :on-success="handleAvatarSuccess"
  :before-upload="beforeAvatarUpload">
  <img v-if="imageUrl" :src="imageUrl" class="avatar">
  <i v-else class="el-icon-plus avatar-uploader-icon"></i>
</el-upload>

<script>
 import {compress} from "@mc/ui"
 export default {
    data() {
      return {
        imageUrl: ''
      };
    },
    methods: {
      handleAvatarSuccess(res, file) {
        this.imageUrl = URL.createObjectURL(file.raw);
      },
     //在上传文件之前的回调函数配置以下代码
     async beforeAvatarUpload(file) {
      //el-upload组件的实例
      let elUpload = this.$refs.elUpload;
      //找到组件里面的uploadFiles变量
      let uploadFiles = elUpload.uploadFiles;
      //找到里面的input type=file对象
      const uploadInner = elUpload.$refs['upload-inner'];
      //重设upload组件的上传事件
      compress.resetPost(uploadInner,uploadFiles)
      //超过200k就压缩到200k以内
      const limitM = 0.2;
      const isbeyond = file.size / 1024 / 1024 > limitM;
      if (isbeyond) {
        //压缩文件
        await compress.resetFile(uploadFiles, file, limitM);
        return true;
      }
      return true;
    },
    }
  }
  }
</script>
```
:::
</demo-block>
 