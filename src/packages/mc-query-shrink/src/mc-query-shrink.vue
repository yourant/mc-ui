<template>
  <el-form
    ref="formInner"
    :inline="true"
    v-bind="$attrs"
    :label-width="labelWidth"
    class="search-form"
    @keyup.native.enter="onSubmit('enter')"
  >
    <div
        class="search-form-items"
        :class="{'search-form-items-collapse': searchCollapse}"
      >
         <div ref="boxContent">
          <slot></slot>
        </div>
    </div>
      <el-form-item class="search-handler">
        <slot name="search"></slot>
        <el-button
          v-show="showSearchBtn"
          type="primary"
          v-bind="$attrs"
          @click="onSubmit"
        >
          搜索
        </el-button>
        <el-button
          v-show="showResetBtn"
          v-bind="$attrs"
          type="info"
          @click="handleReset"
        >
          重置
        </el-button>
        <div
          class="search-collapse-button"
          v-show="showCollapseBtn"
          @click="searchCollapse = !searchCollapse"
        >
          {{ searchCollapse ? '展开' : '收起' }}
          <i :class="{'el-icon-arrow-down': searchCollapse, 'el-icon-arrow-up': !searchCollapse}" />
        </div>
      </el-form-item>
      
  </el-form>
</template>

<script>
export default {
  name: 'McQueryShrink',
  inheritAttrs: false,
  props: {
    showResetBtn: {
      type: Boolean,
      default: true
    },
    showSearchBtn: {
      type: Boolean,
      default: true
    },
    shrink: {
      type: Boolean,
      default: true
    },
       // 搜索条件label的文字宽度
    labelWidth: {
      type: String,
      default: '145px'
    },
     // 表单对象
    model: {
      type: Object,
      default: () => {
        return {}
      }
    }
  },
  data () {
    return {
      searchCollapse: true,
      preventDup: false,
      showCollapseBtn: false
    }
  },
  created () {
    this.searchCollapse = this.shrink
  },
  mounted () {
    this.toggleBtn()
    window.addEventListener('resize', this.toggleBtn, false)
  },
  beforeDestroy () {
    window.removeEventListener('resize', this.toggleBtn, false)
  },
  methods: {
    toggleBtn () {
      this.$nextTick(() => {
        const boxContent = this.$refs.boxContent
        if (boxContent) {
          const dom = boxContent.querySelector('.el-form-item')
          if (dom) {
            let elementMb = getComputedStyle(dom, null).marginBottom || '0px'// 每个输入框的下边距
            let elementHeight = dom.getBoundingClientRect().height || 0// 获取搜索整体高度
            let elementMbNum = +elementMb.substring(0, elementMb.length - 2) // 去掉px
            this.showCollapseBtn = boxContent.getBoundingClientRect().height > elementMbNum + elementHeight
          }
        }
      })
    },
    handleReset () {
      this.$refs.formInner.resetFields()
      this.$emit('reset')
    },
    onSubmit (tag) {
      if (this.preventDup) {
        return
      }
      if (tag === 'click') {
        this.preventDup = true
        setTimeout(() => {
          this.preventDup = false
        }, 100)
      }
      this.$emit('search', this.model)
    }
  }
}
</script>
<style lang="scss" scoped>
.search-handler {
    margin-left: 10px;
    margin-bottom: 0;
    .search-collapse-button {
      margin-left: 10px;
      display: inline-block;
      color: #1890ff;
      cursor: pointer;
    }
}
.search-form {
  display: flex;
  justify-content: space-between;
  padding-bottom: 8px !important;
  .search-form-items {
    flex: 1;
    &.search-form-items-collapse {
      height: 44px;
      overflow: hidden;
    }
    .el-input {
      width: 230px;
    }
  }
}
</style>