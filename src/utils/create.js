import Vue from 'vue'

export default function create (Component, props, children) {
  var target = props.target || 'body'
  var Parent = document.querySelector(target)
  if (Parent) {
    delete props.target

    var vm = new Vue({
      render: function (h) {
        // return h(Component, { props: props }, children)
        return h(Component, props, children)
      }
    })

    // 挂载得到真实dom
    vm.$mount()

    // 获取$el真实dom
    Parent.appendChild(vm.$el)

    // 返回组件实例
    var comp = vm.$children[0]

    // 销毁方法
    comp.remove = function () {
      Parent.removeChild(vm.$el)
      comp.$destroy()
    }

    return comp
  } else {
    throw new Error('Parent node not found')
  }
}
