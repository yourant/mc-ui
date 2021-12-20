<template>
  <div>
    <div
      :class="{
        'mc-right-navigation-bar__item': true,
        'has-lable': item.lable
      }"
      v-for="(item, i) in items"
      :key="i"
      @click="handleClick($event, item)"
    >
      <div class="default-icon">
        <mc-right-navigation-bar-icon :item="item" />
      </div>
      <div v-if="item.lable" class="default-text" v-html="item.lable"></div>
      <div v-if="item.type === 'img' || item.slot" class="content">
        <slot
          :name="item.slot"
          v-if="item.slot"
          :item="item"
          class="slot"
        ></slot>
        <img v-else class="mc-img" :src="item.value" alt="" />
      </div>
    </div>
  </div>
</template>
<script>
import McRightNavigationBarIcon from './icon.vue'
export default {
  name: 'McRightNavigationBarItem',
  components: {
    McRightNavigationBarIcon
  },
  props: {
    items: {
      type: Array,
      default: () => []
    }
  },
  methods: {
    hide () {
      this.$emit('hide')
    },
    handleClick (evt, item) {
      if (item.type === 'link') {
        window.open(item.value)
      }
      item.handleClick && item.handleClick({ evt, item, vm: this })
    }
  }
}
</script>
<style lang="scss" scoped>
.mc-right-navigation-bar__item {
  cursor: pointer;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background-color: #fff;
  box-shadow: 0 0 6px rgba(0, 0, 0, 0.12);
  font-size: 20px;
  color: #666;
  margin-top: 10px;
  position: relative;
  .content,
  .default-text {
    display: none;
  }
  &:hover {
    background-color: #f2f6fc;
    .default-icon {
      color: #409eff;
    }
    .content {
      display: block;
    }
  }
  &.has-lable:hover {
    background: #409eff;
    .default-icon {
      display: none;
    }
    .default-text {
      display: block;
      color: #fff;
      font-size: 12px;
      text-align: center;
    }
  }
}
.slot,
.mc-img {
  position: absolute;
  top: 0;
  right: 70px;
  width: 170px;
  height: 170px;
  box-shadow: 0 0 6px 1px rgb(0 0 0 / 10%);
  border-radius: 4px;
  background: #fff;
  padding: 10px;
  box-sizing: border-box;
  // object-fit: cover;
}
</style>

<style>
.mc-right-navigation-bar .el-backtop {
  color: #666;
}
</style>
