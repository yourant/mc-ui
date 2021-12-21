<template>
  <transition name="w-zoom-in-center">
    <div class="m__tag" :class="'m__tag--'+color">
      <span class="m__tag--desc"><slot></slot></span>
      <i class="w-icon-close2 m__tag--close" v-if="closable" @click="hiddenTag"></i>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'MTag',
  props: {
    closable: Boolean,
    color: {
      type: String,
      default: 'primary'
    }
  },
  data () {
    return {
      isclosed: false
    }
  },
  methods: {
    hiddenTag () {
      this.isclosed = true
      this.$emit('close')
    }
  }
}
</script>
