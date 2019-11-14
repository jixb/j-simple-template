import axios from '../http'
import { isWx } from './lang'

export const wxconfig = function (obj) {
  return new Promise((resolve,reject) => {
    let sgintrue = {
      appId: obj.appId, // 必填，公众号的唯一标识
      timestamp: obj.timestamp, // 必填，生成签名的时间戳
      nonceStr: obj.noncestr, // 必填，生成签名的随机串
      signature: obj.signature,// 必填，签名
      jsApiList: ['updateAppMessageShareData', 'updateTimelineShareData'], // 必填，需要使用的JS接口列表
    }

    console.log(sgintrue)
    wx.config(sgintrue);

    wx.ready(function(){
      console.log('jsapi  ready')
      resolve()
    });

    wx.error(function(res){
      console.error('jsapi初始化失败')
      console.error(res)
      reject(res)
    });
  })
}

export const wxConfig = function (cb) {
  if (!isWx) return

  // const url = '/f/common/unAuth/getWxJsSDKConfig?url=' + encodeURIComponent(location.href.split('#')[0])
  const url = '' // 从接口获取微信jssdk初始化的参数，如上
  axios.get(url).then(res => {
    if (res.data.code === 200) {
      wxconfig(res.data.data).then(() => {
        if (typeof cb === 'function') cb()
      })
    }
  })
}