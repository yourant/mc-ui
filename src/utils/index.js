var ToString = Object.prototype.toString
// 检测是否是当前的数据类型
export function isType (data, type) {
  // 转小写
  switch (type.toLocaleLowerCase()) {
    case 'object':
      return ToString.call(data) === '[object Object]'
    case 'array':
      return ToString.call(data) === '[object Array]'
    case 'function':
      return ToString.call(data) === '[object Function]'
    case 'string':
      return ToString.call(data) === '[object String]'
    case 'boolean':
      return ToString.call(data) === '[object Boolean]'
    default:
      return false
  }
}
// 防抖
export function debounce (fn, delay) {
  var timer
  return function () {
    var context = this
    var args = arguments
    clearTimeout(timer)
    timer = setTimeout(function () {
      fn.apply(context, args)
    }, delay)
  }
}
// 节流
export function throttle (fn, wait) {
  var pre = Date.now()
  return function () {
    var context = this
    var args = arguments
    var now = Date.now()
    if (now - pre >= wait) {
      fn.apply(context, args)
      pre = Date.now()
    }
  }
}
