/*
 * @Author: ZhouCong
 * @Date: 2022-02-24 16:12:26
 * @LastEditors: ZhouCong
 * @LastEditTime: 2022-02-24 16:28:35
 * @Description: file content
 * @FilePath: \find-project\vue.config.js
 */
module.exports = {
    lintOnSave: false,
    chainWebpack: config => {
      config
        .plugin('html')
        .tap(args => {
          args[0].title = '泛得网 - 发现不一样的世界☟'
          return args
        })
    },
    // 服务项配置
    devServer: {
      host: 'localhost',
      port: 8080,
      https: false,
      open: false,
      proxy: {
        '/api': {
          target: 'http://thank.xhxiehuan.club',
          // 是否允许跨域,在本地会创建一个虚拟服务端，然后发送请求的数据
          changeOrigin: true,
          // 并同时接收请求的数据，这样服务端和服务端进行数据的交互就不会有跨域问题
          ws: true,
          pathRewrite: {
            '^/api': ''
          }
        }
      }
    }
  }