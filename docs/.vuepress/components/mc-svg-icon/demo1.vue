<template>
  <ul class="mc-svg-icon-list">
    <li v-for="item in svgs" :key="item">
      <div class="icon-container">
        <mc-svg-icon class="icon-item" :icon="item"></mc-svg-icon>
      </div>
      <span
        class="name"
        v-text="renderExample(item)"
        @click="copyHandle(item)"
      ></span>
    </li>
  </ul>
</template>

<script>
import { svgs } from "@/packages/mc-svg-icon/src/index";
import copy from "copy-to-clipboard";

export default {
  data() {
    return {
      svgs,
    };
  },
  methods: {
    renderExample(name) {
      return `<mc-svg-icon icon="${name}" />`;
    },
    copyHandle(name) {
      const text = this.renderExample(name);
      copy(text);
      this.$message.success(`"${text}"已经复制到剪贴板`);
    },
  },
};
</script>

<style lang="scss" scoped>
.mc-svg-icon-list {
  display: flex;
  flex-wrap: wrap;
  border-left: 1px solid #eaeaea;
  margin: 0;
  padding: 0;

  li {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 250px;
    height: 150px;
    border: 1px solid #eaeaea;
    border-left: none;
    list-style: none;
    margin-bottom: -1px;
  }

  .icon-container {
    width: 50px;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  svg {
    width: 2em;
    height: 2em;
  }

  .name {
    margin-top: 20px;
    color: #999;
    cursor: pointer;
  }
}
</style>
