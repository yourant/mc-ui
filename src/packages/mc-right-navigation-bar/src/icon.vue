<template>
  <div v-if="item">
    <i
      :class="[item.icon, 'mc-right-navigation-bar__item_icon']"
      v-if="item.icon.includes('m-icon')"
    ></i>
    <mc-svg-icon :icon="item.icon" v-else />
  </div>
</template>
<script>
export default {
  name: 'McRightNavigationBarIcon',
  props: {
    item: {
      type: Object,
      default: () => {}
    }
  }
}
</script>
<style scoped>
.mc-right-navigation-bar__item_icon {
  font-size: 24px;
}
</style>
