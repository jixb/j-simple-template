import iaxios from './iaxios'

const showMessage = {
  success (msg) {
    console.log( msg)
  },
  warning (msg) {
    console.warn(msg)
  },
  error (msg) {
    console.error(msg)
  }
}

const handleError = function (code, msg) {
  switch (code) {
    case 200:
      showMessage.success(msg)
      break;
    case 400:
      showMessage.warning(msg)
      break
    case 401:
      showMessage.warning(msg)
      break;
    case 404:
      showMessage.error(msg)
      break;
    case 500:
      showMessage.error(msg)
      break;
    default:
      showMessage.error('请求出错了')
  }
}

const http = function (url, method = 'get', param, config, showMessage) {
  method = method.toLocaleLowerCase()

  return new Promise((resolve, reject) => {
    iaxios[method](url, param, config).then(res => {
      const data = res.data

      showMessage && handleError(data.code, data.message)

      if (data.code === 200) {
        resolve(data)
      } else {
        reject({code: -2, message: data.message})
      }
    }).catch(err => {
      const res = err.response

      handleError(res.status, res.statusText)

      reject({code: -1, message: res.statusText})
    })
  })
}
export default http
