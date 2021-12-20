import './index.scss'
// 手动引入所有svg
export const svgs = (context => {
  return context.keys()
    .filter(item => /^\.\/(.*)\.svg$/.test(item))
    .map((item, ...args) => {
      context(item, ...args) // 引用这个svg才会被打包
      const [, target] = item.match(/^\.\/(.*)\.svg$/)
      return target
    })
})(require.context('./icons', false, /\.svg$/))

export default {
  name: 'McSvgIcon',
  props: {
    icon: {
      type: String,
      default: ''
    }
  },
  computed: {
    target () {
      const target = svgs.find(item => this.icon === item)
      return target || ''
    }
  },
  render () {
    if (!this.target) {
      return null
    }
    return (
      <svg
        class="mc-svg-icon"
        aria-hidden="true"
        {...{
          attr: this.$attrs,
          on: this.$listeners
        }}
      >
        <use href={`#mc-svg-icon-${this.target}`} />
      </svg>
    )
  }
}
