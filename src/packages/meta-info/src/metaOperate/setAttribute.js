/**
 * 为 dom 设置属性
 * @param el
 * @param opt
 */
import { VUE_META_ATTRIBUTE } from '../common/constants'

export default function _setAttr (el, opt) {
  el.setAttribute(VUE_META_ATTRIBUTE, true)
  for (const key in opt) {
    if (Object.prototype.hasOwnProperty.call(opt, key)) {
      el.setAttribute(key, opt[key])
    }
  }
}
