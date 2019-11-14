/**
 * 获取浏览器query参数值
 * @param name
 * @returns {*}
 */
export const getQueryString = name => {
  var reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)', 'i');
  var r = window.location.search.substr(1).match(reg);
  if (r != null) {
    return unescape(r[2]);
  }
  return null;
}
/**
 * 节流函数
 * @param fn
 * @param threshhold
 * @returns {Function}
 */
export const throttle = function (fn, threshhold) {
  var last = new Date()
  var now;
  threshhold || (threshhold = 250)
  return function () {
    var ctx = this
    var args = arguments
    now = new Date()
    if (now - last >= threshhold) {
      last = now
      fn.apply(ctx, args)
    }
  }
}
/**
 * 去抖函数
 * @param fn
 * @param delay
 * @returns {Function}
 */
export const debounce = function (fn, delay) {
  var timer
  return function () {
    var ctx = this
    var args = arguments

    clearTimeout(timer)
    timer = setTimeout(function () {
      fn.apply(ctx, args)
    }, delay)
  }
}
/**
 * 使用flexble库之后页面viewport会动态改变，导致富文本显示不正常，这个方法用来解决富文本显示不正常
 * @param el
 */
export const richText = (el) => {
  let dpr = document.querySelector('html').getAttribute('data-dpr')
  let f = (dom) => {
    let fontPx = dom.style && dom.style.fontSize
    if (fontPx) {
      fontPx = fontPx.substr(0, fontPx.length - 2) * parseInt(dpr)
      dom.style.fontSize = fontPx + 'px'
    }
    if (dom.childNodes.length > 0) {
      for (let i = 0; i < dom.childNodes.length; i++) {
        f(dom.childNodes[i])
      }
    }
  }
  f(el)
}
