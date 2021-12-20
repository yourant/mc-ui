import ImgPreview from './src/index.js'

ImgPreview.install = function (Vue) {
  let targetComp
  Vue.prototype.$imgPreview = {
    show (imgs, index, target) {
      if (!targetComp) {
        const container = document.createElement('div')
        container.id = 'imgs-previews-container';
        (target || document.body).appendChild(container)
        const preview = new Vue({
          el: '#imgs-previews-container',
          render: h => h(ImgPreview)
        })
        targetComp = preview.$children[0]
      }
      targetComp.showHandle(imgs, index)
      return targetComp
    },
    hide () {
      targetComp && targetComp.hideHandle()
    }
  }
}

export default ImgPreview
