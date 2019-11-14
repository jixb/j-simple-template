import iaxios from './iaxios'

const handleError = function (code, msg) {
  console.log(code + '' + msg)
  // switch (code) {
  //   case 200:
  //     message.success(msg)
  //     break;
  //   case 400:
  //     message.warning(msg)
  //     break
  //   case 401:
  //     message.warning(msg)
  //     break;
  //   case 404:
  //     message.error(msg)
  //     break;
  //   case 500:
  //     message.error(msg)
  //     break;
  //   default:
  //     message.error('请求出错了')
  // }
}

const http = function (url, method, param, config, showMessage) {
  method = method ? method.toLowerCase() : 'get'
  return new Promise((resolve, reject) => {
    iaxios[method](url, param, config).then(res => {
      const data = res.data
      const code = res.data.code
      showMessage && handleError(data.code, data.message)
      if (code) {
        if (code === 200) {
          resolve(res.data)
        } else {
          reject()
        }
      } else {
        resolve(res.data)
      }
    }).catch(err => {
      const res = err.response
      handleError(res.status, res.statusText)
      reject(err)
    })
  })
}
export default http
