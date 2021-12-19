
// 前端压缩图片库
// file:input type=file 的文件对象
// limit：限制文件的大少，单位为m，当图片超过这个数值的时候，就压缩到这个数值以下
const compress = {
  compressInit (file, limit) {
    return new Promise((resolve, reject) => {
      compress.file = file
      compress.name = file.name
      compress.limit = limit
      compress.loadFile(compress.file, fileData => {
        resolve(compress.dataURLtoFile(fileData, file.name))
      })
    })
  },
  compressImage (img) {
    // 用于压缩图片的canvas
    const canvas = document.createElement('canvas')
    const ctx = canvas.getContext('2d')
    // 瓦片canvas
    const tCanvas = document.createElement('canvas')
    const tctx = tCanvas.getContext('2d')
    let width = img.width
    let height = img.height
    const initSize = img.src.length
    // 如果图片大于四百万像素，计算压缩比并将大小压至400万以下
    let ratio
    if ((ratio = (width * height) / 4000000) > 1) {
      ratio = Math.sqrt(ratio)
      width /= ratio
      height /= ratio
    } else {
      ratio = 1
    }
    canvas.width = width
    canvas.height = height
    // 铺底色
    ctx.fillStyle = '#fff'
    ctx.fillRect(0, 0, canvas.width, canvas.height)
    // 如果图片像素大于100万则使用瓦片绘制
    let count
    if ((count = (width * height) / 1000000) > 1) {
      count = ~~(Math.sqrt(count) + 1) // 计算要分成多少块瓦片
      // 计算每块瓦片的宽和高
      const nw = ~~(width / count)
      const nh = ~~(height / count)
      tCanvas.width = nw
      tCanvas.height = nh
      for (let i = 0; i < count; i++) {
        for (let j = 0; j < count; j++) {
          tctx.drawImage(
            img,
            i * nw * ratio,
            j * nh * ratio,
            nw * ratio,
            nh * ratio,
            0,
            0,
            nw,
            nh
          )
          ctx.drawImage(tCanvas, i * nw, j * nh, nw, nh)
        }
      }
    } else {
      ctx.drawImage(img, 0, 0, width, height)
    }
    return compress.compressToFixSize(canvas, initSize, tCanvas)
  },
  // 进行最小压缩
  compressToFixSize (canvas, initSize, tCanvas) {
    let quality = 1
    let ndata = ''
    while (quality > 0.1) {
      // 压缩后调用方法进行base64转Blob，方法写在下边
      ndata = canvas.toDataURL('image/jpeg', quality)
      const blobImg = compress.dataURItoBlob(ndata)
      if (blobImg.size / 1024 / 1024 < compress.limit) {
        // 压缩到4兆以内
        console.log('压缩前：' + initSize)
        console.log('压缩后：' + ndata.length)
        console.log(
          '压缩率：' + ~~((100 * (initSize - ndata.length)) / initSize) + '%'
        )
        tCanvas.width = tCanvas.height = canvas.width = canvas.height = 0
        return ndata
      }
      // 不同大小的照片  压缩的速度
      if (blobImg.size / 1024 / 1024 > 10) {
        quality -= 0.06
      }
      if (blobImg.size / 1024 / 1024 < 10 && blobImg.size / 1024 / 1024 > 8) {
        quality -= 0.06
      }
      if (blobImg.size / 1024 / 1024 < 8 && blobImg.size / 1024 / 1024 > 6) {
        quality -= 0.03
      }
      if (blobImg.size / 1024 / 1024 < 6 && blobImg.size / 1024 / 1024 > 5) {
        quality -= 0.02
      }
      if (blobImg.size / 1024 / 1024 < 5) {
        quality -= 0.01
      }
    }
    return ndata
  },
  loadFile (file, fn) {
    const reader = new FileReader()
    reader.onload = function () {
      const img = new Image()
      img.src = this.result
      img.onload = function () {
        fn && fn(compress.compressImage(img))
      }
    }
    reader.readAsDataURL(file)
  },
  // 将base64转换为文件对象
  dataURLtoFile (dataurl, filename) {
    const arr = dataurl.split(',')
    const mime = arr[0].match(/:(.*?);/)[1]
    const bstr = atob(arr[1])
    let n = bstr.length
    const u8arr = new Uint8Array(n)
    while (n--) {
      u8arr[n] = bstr.charCodeAt(n)
    }
    // 转换成file对象
    const file = new File([u8arr], filename, { type: mime })

    return file
    // 转换成成blob对象
    // return new Blob([u8arr],{type:mime});
  },
  /* base64转Blob对象 */
  dataURItoBlob (data) {
    let byteString
    if (data.split(',')[0].indexOf('base64') >= 0) {
      byteString = atob(data.split(',')[1])
    } else {
      byteString = unescape(data.split(',')[1])
    }
    const mimeString = data
      .split(',')[0]
      .split(':')[1]
      .split(';')[0]
    const ia = new Uint8Array(byteString.length)

    for (let i = 0; i < byteString.length; i += 1) {
      ia[i] = byteString.charCodeAt(i)
    }
    return new Blob([ia], { type: mimeString })
  },
  // 配合upload组件的时候，重新设定组件的file
  async resetFile (uploadFiles, file, limitM) {
    const ufile = uploadFiles.find((item) => {
      if (item.uid === file.uid) {
        return true
      }
    })
    if (ufile) {
      ufile.raw = await compress.compressInit(file, limitM)
      ufile.size = ufile.raw.size
      file = ufile.raw
    }
  },
  // 重新设置upload组件post事件
  resetPost (uploadInner, uploadFiles) {
    if (!compress.initUploadPost) {
      const oldpust = uploadInner.post
      uploadInner.post = function (file) {
        const uploadFile = uploadFiles.find((item) => {
          if (item.uid === file.uid) {
            return true
          }
        })
        uploadFile.raw.uid = uploadFile.uid
        oldpust.call(uploadInner, uploadFile.raw)
      }
      compress.initUploadPost = true
    }
  }
}
export default compress
