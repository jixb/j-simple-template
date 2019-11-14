const  u = navigator.userAgent
export const isAndroid = u.indexOf('Android') > -1 || u.indexOf('Adr') > -1
export const isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/)
export const isMobile = /Android|webOS|iPhone|iPod|BlackBerry/i.test(navigator.userAgent)
export const isPC = !isMobile
export const isWx = /MicroMessenger/i.test(ua)
