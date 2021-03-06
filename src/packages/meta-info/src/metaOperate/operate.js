/**
 * metaInfo 操作函数
 * @returns {{setMetaInfo: (function(*)), removeMetaInfo: (function())}}
 */
import _setAttr from './setAttribute'
import _removeNode from './removeNode'

export default function operate () {
  const _ndHead = document.getElementsByTagName('head')[0]
  return {
    /**
     * 设置 metaInfo 信息
     * @param metaOpts
     */
    setMetaInfo (metaOpts) {
      for (const key in metaOpts) {
        if (key === 'title') {
          document.title = metaOpts.title
          continue
        }
        if (Object.prototype.hasOwnProperty.call(metaOpts, key)) {
          metaOpts[key].forEach((opt) => {
            const ndKey = document.createElement(key)
            _setAttr(ndKey, opt)
            _ndHead.appendChild(ndKey)
          })
        }
      }
    },
    /**
     * 删除 metaInfo 添加的 meta 信息
     */
    removeMetaInfo () {
      _removeNode(_ndHead)
    }
  }
}
