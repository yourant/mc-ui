<template>
  <el-select
    v-bind="$attrs"
    :value="value"
    filterable
    allow-create
    default-first-option
    v-on="$listeners"
    @input="$emit('input', $event)"
    @change="changeHandle"
  >
    <el-option
      v-for="(item, index) in options"
      :key="index"
      :label="item"
      :value="item"
    />
  </el-select>
</template>
<script>
export default {
  name: 'McMemorySelector',
  props: {
    value: {
      type: [Array, String],
      default: null
    },
    storageKey: {
      type: String,
      default: '',
      required: true
    },
    maxMemoryCount: {
      type: Number,
      default: 30
    }
  },
  data () {
    return {
      options: []
    }
  },
  mounted () {
    if (!this.storageKey) {
      throw new Error('mc-memory-selector组件必须要传入storage-key属性')
    }
    const localOptions = localStorage.getItem(this.storageKey)
    if (localOptions) {
      this.options = JSON.parse(localOptions)
    }
  },
  methods: {
    changeHandle (e) {
      if (Array.isArray(e)) {
        const options = e
        this.options = [...new Set([...options.filter(item => !!item), ...this.options])].filter(item => !!item).slice(0, this.maxMemoryCount)
        localStorage.setItem(this.storageKey, JSON.stringify(this.options))
      } else {
        this.options = [...new Set([e, ...this.options])].filter(item => !!item).slice(0, this.maxMemoryCount)
        localStorage.setItem(this.storageKey, JSON.stringify(this.options))
      }
    }
  }
}
</script>
