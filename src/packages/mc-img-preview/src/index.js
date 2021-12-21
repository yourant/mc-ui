import './index.scss'

function rafThrottle (fn) {
  let locked = false
  return function (...args) {
    if (locked) return
    locked = true
    window.requestAnimationFrame(_ => {
      fn.apply(this, args)
      locked = false
    })
  }
}

function on (event, fn) {
  document.addEventListener(event, fn, false)
}

function off (event, fn) {
  document.removeEventListener(event, fn, false)
}

export default {
  data () {
    return {
      show: true,
      images: [],
      currentIndex: 0,
      scale: 1,
      rotate: 0,
      marginLeft: 0,
      marginTop: 0,
      down: false,
      hasTransition: true
    }
  },
  watch: {
    currentIndex () {
      this.reset()
    }
  },
  computed: {
    imgStyle () {
      return {
        transform: `translate(-50%, -50%) scale(${this.scale}) rotate(${this.rotate}deg)`,
        transition: this.hasTransition ? 'transform 0.2s' : 'none',
        'margin-left': this.marginLeft + 'px',
        'margin-top': this.marginTop + 'px'
      }
    },
    originImg () {
      if (!this.images[this.currentIndex]) return ''
      if (typeof this.images[this.currentIndex] === 'string') {
        return this.images[this.currentIndex]
      }
      return this.images[this.currentIndex].originUrl
    }
  },
  methods: {
    showHandle (list, currentIndex) {
      this.show = true
      this.currentIndex = currentIndex
      this.images = list
    },
    hideHandle () {
      this.show = false
      this.images = []
      this.currentIndex = 0
      this.reset()
    },
    reset () {
      this.hasTransition = false
      this.scale = 1
      this.rotate = 0
      this.marginLeft = 0
      this.marginTop = 0
      setTimeout(() => {
        this.hasTransition = true
      }, 200)
    },
    preImgHandle () {
      this.currentIndex = (this.currentIndex - 1 + this.images.length) % this.images.length
    },
    nxtImgHandle () {
      this.currentIndex = (this.currentIndex + 1) % this.images.length
    },
    itemClickHandle (index) {
      this.currentIndex = index
    },
    mouseScrollHandle (e) {
      e.preventDefault()
      let scale = this.scale
      if (e.deltaY < 0) {
        // 放大
        scale = this.scale + (-e.deltaY / 1000)
      } else {
        // 缩小
        scale = this.scale - (e.deltaY / 1000)
      }
      this.setScale(scale)
    },
    setScale (scale) {
      this.scale = scale < 0.2 ? 0.2 : (scale > 5 ? 5 : scale)
    },
    zoomOutHandle () {
      this.setScale(this.scale - 0.1)
    },
    zoomInHandle () {
      this.setScale(this.scale + 0.1)
    },
    rotateLeftHandle () {
      this.rotate = this.rotate - 90
    },
    rotateRightHandle () {
      this.rotate = this.rotate + 90
    },
    mouseDownHandle (e) {
      this.down = true
      const { pageX: startX, pageY: startY } = e
      const { marginLeft, marginTop } = this
      const mouseMoveHandle = rafThrottle((e) => {
        const { pageX, pageY } = e
        this.marginLeft = marginLeft + pageX - startX
        this.marginTop = marginTop + pageY - startY
      })
      const mouseUpHandle = (e) => {
        off('mousemove', mouseMoveHandle)
        off('mouseup', mouseUpHandle)
      }
      on('mousemove', mouseMoveHandle)
      on('mouseup', mouseUpHandle)
      e.preventDefault()
    },
    stopPropagation (e) {
      e.stopPropagation()
    },
    renderControls () {
      return (
        <div onClick={this.stopPropagation}>
          {this.images.length > 1 && <i class="el-icon-arrow-left" onClick={this.preImgHandle}/>}
          {this.images.length > 1 && <i class="el-icon-arrow-right" onClick={this.nxtImgHandle} />}
          <div class="mc-img-preview_controls">
            <div class="mc-img-preview_control" onClick={this.zoomOutHandle}>
              <i class="el-icon-zoom-out"/>
            </div>
            <div class="mc-img-preview_control" onClick={this.zoomInHandle}>
              <i class="el-icon-zoom-in"/>
            </div>
            <div class="mc-img-preview_control" onClick={this.reset}>
              <i class="el-icon-c-scale-to-original" />
            </div>
            <div class="mc-img-preview_control" onClick={this.rotateLeftHandle}>
              <i class="el-icon-refresh-left" />
            </div>
            <div class="mc-img-preview_control" onClick={this.rotateRightHandle}>
              <i class="el-icon-refresh-right" />
            </div>
          </div>
        </div>
      )
    },
    renderSider () {
      if (this.images.length <= 1) {
        return null
      }
      return (
        <div class="mc-img-preview_aside">
          <i class="mc-img-preview_close el-icon-close" onClick={this.hideHandle}/>
          <div class="mc-img-preview_aside_container">
            <div class="mc-img-preview_cont">
              {this.images.map((image, index) => <div class="mc-img-preview_item" key={index}>
                <div class={{ 'mc-img-preview_option': true, 'mc-img-preview_selected': index === this.currentIndex }}>
                  <el-image
                    class="img"
                    src={typeof image === 'string' ? image : image.thumbnailUrl}
                    onClick={this.itemClickHandle.bind(this, index)}
                    fit="cover"
                    lazy
                  />
                </div>
              </div>)}
            </div>
          </div>
        </div>
      )
    }
  },
  render () {
    return (<div class="mc-img-preview" style={{ display: this.show ? 'flex' : 'none' }}>
      {this.images.length <= 1 && <i class="mc-img-preview_close el-icon-close" onClick={this.hideHandle}/>}
      <div class="mc-img-preview_container" onClick={this.hideHandle}>
        <img
          class="mc-img-preview_img"
          style={this.imgStyle}
          src={this.originImg}
          onMousewheel={this.mouseScrollHandle}
          onMousedown={this.mouseDownHandle}
          onClick={this.stopPropagation}
        />
        {this.renderControls()}
      </div>
      {this.renderSider()}
    </div>)
  }
}
