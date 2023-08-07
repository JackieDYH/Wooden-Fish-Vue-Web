const { defineConfig } = require('@vue/cli-service');
module.exports = defineConfig({
  transpileDependencies: true,
  // 引入scss全局变量
  css: {
    loaderOptions: {
      sass: {
        // 全局引入变量和Mixin additionalData允许全局引入scss文件，
        // 全局引入后就可以直接用 无需每个组件都import了
        additionalData: `
        @import "~@/assets/styles/variable.scss";
        // @import "~@/assets/styles/mixin.scss";
        `
      }
    }
  },
  devServer: {
    proxy: {
      // proxy all requests starting with /api to jsonplaceholder
      // '/api': {
      //     target: 'https://tenapi.cn',
      //     ws: false,
      //     changeOrigin: true,
      //     // pathRewrite: {
      //     //     '/k': ''
      //     // }
      // },
    }
  }
});
