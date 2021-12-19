# mc-ui2

## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn serve
```

### Compiles and minifies for production
```
yarn build
```

### Run your unit tests
```
yarn test:unit
```

### Lints and fixes files
```
yarn lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

### 安装 karma
```
npm install --save-dev @vue/test-utils karma karma-chrome-launcher karma-mocha karma-sourcemap-loader karma-spec-reporter karma-webpack mocha karma-chai

# 使用以下版本，不要使用最新的webpack5版本
"karma": "^5.0.1",
"karma-chai": "^0.1.0",
"karma-chrome-launcher": "^3.1.0",
"karma-mocha": "^2.0.0",
"karma-sourcemap-loader": "^0.3.7",
"karma-spec-reporter": "0.0.32",
"karma-webpack": "^4.0.2",
"mocha": "^7.1.1",
```

### 安装vue-press
[官网-目录结构](https://v1.vuepress.vuejs.org/zh/guide/directory-structure.html)

VuePress 遵循 “约定优于配置” 的原则，推荐的目录结构如下：
- docs/.vuepress: 用于存放全局的配置、组件、静态资源等。
- docs/.vuepress/components: 该目录中的 Vue 组件将会被自动注册为全局组件。
- docs/.vuepress/theme: 用于存放本地主题。
- docs/.vuepress/styles: 用于存放样式相关的文件。
- docs/.vuepress/styles/index.styl: 将会被自动应用的全局样式文件，会生成在最终的 CSS 文件结尾，具有比默认样式更高的优先级。
- docs/.vuepress/styles/palette.styl: 用于重写默认颜色常量，或者设置新的 stylus 颜色常量。
- docs/.vuepress/public: 静态资源目录。
- docs/.vuepress/templates: 存储 HTML 模板文件。
- docs/.vuepress/templates/dev.html: 用于开发环境的 HTML 模板文件。
- docs/.vuepress/templates/ssr.html: 构建时基于 Vue SSR 的 HTML 模板文件。
- docs/.vuepress/config.js: 配置文件的入口文件，也可以是 YML 或 toml。
- docs/.vuepress/enhanceApp.js: 客户端应用的增强。
    ```
    .
    ├── docs
    │   ├── .vuepress (可选的)
    │   │   ├── components (可选的)
    │   │   ├── theme (可选的)
    │   │   │   └── Layout.vue
    │   │   ├── public (可选的)
    │   │   ├── styles (可选的)
    │   │   │   ├── index.styl
    │   │   │   └── palette.styl
    │   │   ├── templates (可选的, 谨慎配置)
    │   │   │   ├── dev.html
    │   │   │   └── ssr.html
    │   │   ├── config.js (可选的)
    │   │   └── enhanceApp.js (可选的)
    │   │ 
    │   ├── README.md
    │   ├── guide
    │   │   └── README.md
    │   └── config.md
    │ 
    └── package.json
    ```

#### 安装依赖
```
# 单独项目
npm install vuepress -D
npm install element-ui @vuepress/utils highlight.js node-sass sass-loader@10.1.1 core-js@2 --save
# 和组件库共享依赖，合成一个项目
npm install element-ui @vuepress/utils
```
#### 将docs迁移出来，依赖和组件库共享时报错
```
Cannot find module 'core-js/library/fn/object/assign'     at webpackMissingModule
```
在https://github.com/vuejs/vuepress/issues/2275中发现，原来是element ui依赖core-js的2.x版本，而web项目依赖core-js的3.x版本导致的

安装依赖npm install async-validator@1.11.5就可以解决问题了！
[以上参考资料](https://blog.csdn.net/qq_32855007/article/details/108726430)
