# Wooden Fish Vue Web - 电子木鱼 Vue3 Web 版本 - By JackieDYH 202308

```
npm install pinia
npm i pinia-plugin-persist //数据持久化

如果在将 Vue 项目打包发布到 GitHub Pages 后，资源请求报 404 错误，可能是由于以下原因导致的：

公共路径配置错误：请确保在项目的 vue.config.js 文件中正确配置了公共路径。公共路径应该与你在 GitHub Pages 上托管项目的路径相对应。例如，如果你的项目托管在 https://jackiedyh.github.io/Wooden-Fish-Vue-Web/，则公共路径应设置为 '/Wooden-Fish-Vue-Web/'。
module.exports = {
    publicPath: process.env.NODE_ENV === 'production' ? '/Wooden-Fish-Vue-Web/' : '/'
};
资源文件未正确部署：请确认在将项目打包后，已将生成的 dist 文件夹中的所有文件正确地上传到 GitHub 仓库的 gh-pages 分支或 docs 文件夹中。确保文件路径与资源请求路径一致。

GitHub Pages 仓库设置错误：如果你在 GitHub Pages 仓库的设置中进行了特殊配置，例如自定义域名或分支设置，可能会导致资源请求失败。请检查 GitHub Pages 仓库的设置，确保配置正确。

缓存问题：如果你之前已经部署过该项目到 GitHub Pages，可能由于浏览器缓存的原因导致资源请求报 404。尝试在浏览器中清除缓存，然后重新访问项目页面。
```

## Project setup

```
npm install
```

### Compiles and hot-reloads for development

```
npm run serve
```

### Compiles and minifies for production

```
npm run build
```

### Lints and fixes files

```
npm run lint
```

### Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).
