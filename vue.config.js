module.exports = {
  css: {
    loaderOptions: {
      // 给 sass-loader 传递选项
      sass: {
        // @/ 是 src/ 的别名
        // 所以这里假设你有 `src/variables.scss` 这个文件
        data: '@import "./src/assets/style/main.scss";'
        //引入的时候要注意格式6
      }
    }
  },
  devServer: {
    proxy: {
      // proxy all requests starting with /api to jsonplaceholder
      '/api': {
        // target: "http://localhost:3000", //代理接口
        //target: apiPort,
        // target: "http://35.185.177.218:52020",
        changeOrigin: true,
        pathRewrite: {
          '^/api': '/api' //代理的路径
        }
      }
    }
  },
  lintOnSave: false
};
