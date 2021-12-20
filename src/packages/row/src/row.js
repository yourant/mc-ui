export default {
  name: 'MRow',

  componentName: 'MRow',

  props: {
    tag: {
      type: String,
      default: 'div'
    },
    gutter: Number,
    type: String,
    justify: {
      type: String,
      default: 'start'
    },
    align: {
      type: String,
      default: 'top'
    }
  },

  computed: {
    style () {
      var ret = {}

      if (this.gutter) {
        ret.marginLeft = `-${this.gutter / 2}px`
        ret.marginRight = ret.marginLeft
      }

      return ret
    }
  },

  render (h) {
    return h(this.tag, {
      class: [
        'm-row',
        this.justify !== 'start' ? `is-justify-${this.justify}` : '',
        this.align !== 'top' ? `is-align-${this.align}` : '',
        { 'm-rom--flex': this.type === 'flex' }
      ],
      style: this.style
    }, this.$slots.default)
  }
}
