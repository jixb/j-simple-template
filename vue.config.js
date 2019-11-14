module.exports = {
  publicPath: '/',
  css: {
    loaderOptions: {
      postcss: {
        plugins: [
          require('postcss-px2rem')({
            remUnit: 75
          })
        ]
      }
    }
  },
  devServer: {
    disableHostCheck: true,
    proxy: {
      '/path': {
        // target: 'http://192.168.1.222:8085',
        pathRewrite: {'^/path': ''}
      }
    }
  }
}
