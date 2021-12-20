<template>
  <el-select
    ref="select"
    class="mc-multiple-input"
    v-bind="$attrs"
    :value="value"
    multiple
    filterable
    allow-create
    default-first-option
    :popper-append-to-body="false"
    :popper-class="'mc-multiple-popper-hidden hidden'"
    v-on="$listeners"
    @input="$emit('input', $event)"
  />
</template>
<script>
export default {
  name: 'McMultipleInput',
  props: {
    value: {
      type: Array,
      default: () => []
    }
  },
  mounted() {
    const inputRef = this.$refs.select.$refs.input
    inputRef && inputRef.addEventListener('blur', this.selectBlurHandle, false)
  },
  beforeDestroy() {
    const inputRef = this.$refs.select.$refs.input
    inputRef.removeEventListener('blur', this.selectBlurHandle, false)
  },
  methods: {
    selectBlurHandle(e) {
      if (e.target.value) {
        const arr = [...(this.value || [])]
        arr.push(e.target.value)
        this.$emit('multipleChange', [...new Set(arr)])
      }
    }
  }
}
</script>
<style>
.mc-multiple-popper-hidden {
  display: none;
}
.mc-multiple-input .el-input__suffix {
  display: none;
}
.mc-multiple-input .el-select__tags {
  max-width: auto !important;
}
.mc-multiple-input .el-input__inner {
  padding-right: 15px;
}
</style>
