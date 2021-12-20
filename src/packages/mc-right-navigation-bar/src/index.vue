<template>
  <div
    v-show="show"
    class="mc-right-navigation-bar"
    :style="{
      right: styleRight,
      bottom: styleBottom
    }"
  >
    <mc-right-navigation-bar-item :items="items" @hide="hide">
      <template v-for="item in items" v-slot:[item.slot]>
        <slot v-if="item.slot" :name="item.slot" :item="item"></slot>
      </template>
    </mc-right-navigation-bar-item>
    <el-backtop
      v-if="btItem"
      :bottom="bottom"
      :right="right"
      v-bind="$attrs"
      @click="btItem.handleClick || (() => {})"
    >
      <mc-right-navigation-bar-icon :item="btItem" />
    </el-backtop>
  </div>
</template>
<script>
import McRightNavigationBarIcon from './icon.vue'
import McRightNavigationBarItem from './item.vue'
// import mcSvgIcon from '../../mc-svg-icon'
export default {
  name: 'McRightNavigationBar',
  components: {
    McRightNavigationBarIcon,
    McRightNavigationBarItem
    // mcSvgIcon
  },
  data () {
    return {
      show: true
    }
  },
  props: {
    right: {
      type: Number,
      default: 40
    },
    bottom: {
      type: Number,
      default: 120
    },
    configs: {
      type: Array,
      default: () => []
    }
  },
  computed: {
    styleBottom () {
      return `${this.bottom + 50}px`
    },
    styleRight () {
      return `${this.right}px`
    },
    items () {
      return this.configs.slice(0, -1)
    },
    btItem () {
      return this.configs.slice(-1)[0]
    }
  },
  methods: {
    hide () {
      this.show = false
    },
    handleClick (evt, item) {
      if (item.type === 'link') {
        window.open(item.value)
      }
      item.handleClick && item.handleClick(evt, item)
    }
  }
}
</script>
<style lang="scss" scoped>
.mc-right-navigation-bar {
  position: fixed;
  width: 40px;
  height: auto;
  z-index: 5;
}
</style>
<style scoped>
>>> .el-backtop {
  color: #babfc3;
}
>>> .el-backtop:hover {
  background-color: #f2f6fc;
  color: #409eff;
}
</style>
