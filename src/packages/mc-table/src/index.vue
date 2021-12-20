<template>
  <el-table
    ref="table"
    v-bind="$attrs"
    :data="renderData"
    border
    v-on="$listeners"
  >
    <template v-for="(item, index) in tableConfig">
      <el-table-column
        v-if="!item.slotName && !item.children"
        :key="index"
        v-bind="item"
      />
      <el-table-column
        v-else-if="!item.children"
        :key="index"
        v-bind="item"
      >
        <template v-if="item.header" slot="header">
          <slot :name="item.header" />
        </template>
        <template slot-scope="scope">
          <div v-if="!item.slotName">
            {{ scope.row[item.prop] }}
          </div>
          <slot :name="item.slotName" v-bind="scope" :columnJson="item" />
        </template>
      </el-table-column>
      <el-table-column
        v-else
        :key="index"
        v-bind="item"
      >
        <el-table-column
          v-for="(subItem, subIndex) in item.children"
          :key="subIndex"
          v-bind="subItem"
        >
          <template slot-scope="scope">
            <div v-if="!subItem.slotName">
              {{ scope.row[subItem.prop] }}
            </div>
            <slot :name="subItem.slotName" v-bind="scope" :columnJson="subItem" />
          </template>
        </el-table-column>
      </el-table-column>
    </template>
  </el-table>
</template>
<script>
export default {
  name: 'McTable',
  props: {
    tableConfig: {
      type: Array,
      default: () => []
    },
    renderData: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {}
  },
  timeoutKey: null,
  mounted() {
    // 每次页面尺寸变化时刷新一下表格布局
    window.addEventListener('resize', this.resizeHandle, false)
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.resizeHandle, false)
  },
  methods: {
    getElTableRef() {
      return this.$refs.table
    },
    resizeHandle() {
      if (this.timeoutKey) {
        clearTimeout(this.timeoutKey)
      }
      this.timeoutKey = setTimeout(() => {
        if (this.$refs && this.$refs.table) {
          this.$refs.table.doLayout()
        }
      }, 500)
    }
  }
}
</script>
