const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: false // 配置这段代码
})
module.exports = {
  devServer:{
    port:8088,
    proxy: {
      '/api': { //设置拦截器 拦截器格式 斜杠+拦截器名字，名字可以自己定
        target: 'http://localhost:8099', // 代 理 的 目 标 地 址 , 就 是 /api 代 替http://localhost:10001
        changeOrigin: true, //是否设置同源，输入是的
        pathRewrite: {
          //路径重写
          '/api': '' //选择忽略拦截器里面的单词
        }
      }
    }
  }
}