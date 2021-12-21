<template>
    <draggable
        v-model="imageListNew"
        animation="400"
        class="flw"
        :force-fallback="true"
        filter=".uploadImg"
        :prevent-on-filter="true"
    >
        <div
        v-for="(item, index) in imageListNew"
        :key="item.id"
        >
        <div class="avue-upload">
            <ul class="el-upload-list el-upload-list--picture-card image">
            <div class="drag-tabs" v-show="showTags">
                <span>{{ index + 1 }}</span>
            </div>
            <li
                tabindex="0"
                class="el-upload-list__item is-done"
            >
                <img
                :src="item.url"
                alt=""
                class="el-upload-list__item-thumbnail"
                >
                <a class="el-upload-list__item-name">
                <i class="el-icon-document" />
                </a>

                <label class="el-upload-list__item-status-label">
                <i class="el-icon-upload-success el-icon-check" />
                </label>
                <i class="el-icon-close" />
                <!-- <i class="el-icon-close-tip">按 delete 键可删除</i> -->
                <span class="el-upload-list__item-actions">
                <span class="el-upload-list__item-preview">
                    <i
                    class="el-icon-zoom-in"
                    @click="handlePictureCardPreview(index)"
                    /></span>
                <span class="el-upload-list__item-delete">
                    <i
                    class="el-icon-delete"
                    @click="handleRemove(index)"
                    /></span></span>
            </li>
            </ul>
        </div>
        </div>
         <div
        v-show="(imageList.length < maxLength)"
        style="float: left"
        class="uploadImg"
    >
        <slot name="upload"/>
         </div>
    </draggable>

</template>
<script>
import draggable from 'vuedraggable'
export default {
  name: 'McDraggableUpload',
  components: {
    draggable
  },
  data () {
    return {
      imageListNew: [],
      dialogImageUrl: [],
      showFile: []
    }
  },
  props: {
    imageList: {
      type: [Array],
      default: null
    },
    showTags: {
      type: Boolean,
      default: false
    },
    maxLength: {
      type: Number,
      default: 10
    }
  },
  watch: {
    imageListNew: {
      handler (val) {
        if (val) {
          this.$emit('imageList', val)
        }
      },
      deep: true,
      immediate: true
    }
  },
  mounted () {
    if (this.imageList && this.imageList.length > 0) {
      this.imageListNew = this.imageList
      const showImgList = []
      this.imageList.map((val) => {
        showImgList.push(val.url)
      })
      this.showFile = showImgList
    }
  },
  methods: {
    handlePictureCardPreview (index) {
      this.$imgPreview.show(this.showFile, index)
    },
    handleRemove (index) {
      this.$emit('handleRemove', index)
    }
  }
}
</script>
<style>
  .flw{
      display: flex;
      flex-wrap: wrap;
  }
  .drag-tabs{
        position: absolute;
        z-index: 2;
        height: 20px;
        width: 20px;
        background-color: #fff;
        border-color: #1890ff;
        border-radius: 10px;
        display: flex;
        justify-content: center;
        align-items: center;
        color: #1890ff;
  }
</style>
