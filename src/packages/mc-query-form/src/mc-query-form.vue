<template>
  <el-form
    ref="formInner"
    :inline="true"
    class="query-form"
    v-bind="$attrs"
    :label-width="labelWidth"
    @keyup.native.enter="onSubmit('enter')"
  >
    <div class="search">
      <div class="search-condition" :style="searchLeftStyle">
        <slot></slot>
        <div class="senior-con" :class="{ show: isReverse }">
          <slot name="senior"></slot>
        </div>
      </div>
      <div class="search-btn">
        <slot name="search"></slot>
        <el-button
          v-show="showSearchBtn"
          icon="el-icon-search"
          type="primary"
          v-bind="$attrs"
          autofocus
          @click.prevent="onSubmit('click')"
          v-uitest="'search'"
        >查询
        </el-button>
        <template v-if="hasSeniorChild">
          <el-button-group class="button-group">
            <el-button
              v-show="showResetBtn"
              type="info"
              v-bind="$attrs"
              @click="reset"
              >重置</el-button
            >
            <el-button
              type="warning"
              href="javascript:void(0)"
              :class="{ isReverse: isReverse }"
              @click="isReverse = !isReverse"
            >
              {{ isReverse ? "收起" : "展开" }}
              <i class="el-icon-caret-bottom el-icon-right"></i>
            </el-button>
          </el-button-group>
        </template>
        <template v-else>
          <el-button
            v-show="showResetBtn"
            type="info"
            v-bind="$attrs"
            @click="reset"
            >重置</el-button
          >
        </template>
      </div>
    </div>
  </el-form>
</template>

<script>
export default {
  name: 'McQueryForm',
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

    // 一开始是否展示更多
    showMore: {
      type: Boolean,
      default: false
    },
    // 用于设置左边条件区域的宽度
    searchLeftStyle: {
      type: Object,
      default: () => {
        return {}
      }
    },
    // 搜索条件label的文字宽度
    labelWidth: {
      type: String,
      default: '100px'
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
      isReverse: false,
      // 控制展示更多按钮
      hasSeniorChild: false,
      arrayKeys: [],
      queryStringLong: 50,
      preventDup: false
    }
  },
  created () {
    this.isReverse = this.showMore
  },

  mounted () {
    if (this.$slots.senior) {
      this.hasSeniorChild =
        this.$slots.senior[0].componentOptions.children.length > 0
    }
  },
  methods: {
    reset () {
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
      // console.log(tag)
      this.$emit('search', this.model)
    }
  }
}
</script>
<style scoped>
.query-form >>> .el-form-item__label {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.search-btn {
  display: flex;
  justify-content: flex-end;
}
.button-group {
  margin-left: 10px;
}
.senior-con.show {
  display: block;
}
.senior-con {
  display: none;
}
.el-dropdown-link,
.el-dropdown-link:hover,
.el-dropdown-link:active {
  color: #606266;
}
.el-dropdown-link {
  cursor: pointer;
  font-size: 12px;
  margin-left: 0;
  color: #666666;
}
.el-icon-right {
  transition: all 0.3s;
}
.isReverse .el-icon-right {
  transform: rotate(-180deg);
}
.query-form {
  position: relative;
}
</style>
