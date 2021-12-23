// const { path } = require("@vuepress/utils");
// const path = require("path");
// function resolve(dir) {
//   console.log(path.join(__dirname, dir), "qqqqaaaa", dir);

//   return path.join(__dirname, '../../', dir);
// }
const getCommonConfig = require("../../common.config");

module.exports = {
  title: "mc-ui", // 设置网站标题
  description: "ui组件库", //描述
  dest: "./build", // 设置输出目录
  port: 8888, //端口
  themeConfig: {
    //主题配置
    logo: "/img/logo.png",
    nav: [{ text: "主页", link: "/" }], // 导航条
    // 为以下路由添加侧边栏
    sidebar: [
      {
        title: "入门",
        collapsable: false,
        children: ["/install/", "/start/"],
      },
      {
        title: "基础组件",
        collapsable: false,
        children: [
          "/components/icon",
          "/components/tag",
          "/components/mc-svg-icon",
        ],
      },
      {
        title: "视图组件",
        collapsable: false,
        children: [
          //     "/components/show-more",
          //     "/components/limit-textarea",
          //     "/components/meta-info",
          //     "/components/loading-bar",
          //     "/components/skeleton",
          //     "/components/mc-table",
          //     "/components/mc-img-preview",
          "/components/mc-query-form",
          "/components/mc-nested-table",
          //     "/components/mc-compress",
          //     "/components/mc-draggable-upload",
          //     "/components/mc-right-navigation-bar",
          //     "/components/mc-query-shrink",
        ],
      },
      // {
      //   title: "表单组件",
      //   collapsable: false,
      //   children: [
      //     "/components/mc-memory-selector",
      //     "/components/mc-date-range-picker",
      //     "/components/mc-multiple-input",
      //   ],
      // },
      // {
      //   title: "工具函数",
      //   collapsable: false,
      //   // path: "/tools",
      //   children: [
      //     "/components/mc-create",
      //     "/components/table-scroll-top"
      //   ]
      // }
    ],
  },
  // plugins: [
  //   [
  //     // https://vuepress.vuejs.org/zh/plugin/official/plugin-register-components.html#%E5%AE%89%E8%A3%85
  //     "@vuepress/register-components",
  //     {
  //       // src/packages 已被注册为全局组件 无需手动在 enhanceApp.js做注册
  //       componentsDir: path.resolve(__dirname, "../../src/packages"),
  //     },
  //   ],
  // ],
  ...getCommonConfig(),
  // configureWebpack: {
  //   resolve: {
  //     alias: {
  //       // "@": resolve("../../src"),
  //       "@": resolve("src"),
  //     },
  //   },
  // },
  // chainWebpack: (config) => {
  //   const svgRule = config.module.rule("svg");
  //   svgRule.uses.clear();
  //   svgRule
  //     .test(/\.svg$/)
  //     // .include.add(resolve("../../src/packages/mc-svg-icon/src/icons"))
  //     .include.add(resolve("src/packages/mc-svg-icon/src/icons"))
  //     .end()
  //     .use("svg-sprite-loader")
  //     .loader("svg-sprite-loader")
  //     .options({
  //       symbolId: "mc-svg-icon-[name]",
  //     });
  //   const fileRule = config.module.rule("file");
  //   fileRule.uses.clear();
  //   fileRule
  //     .test(/\.svg$/)
  //     // .exclude.add(resolve("../../src/packages/mc-svg-icon/src/icons"))
  //     .exclude.add(resolve("src/packages/mc-svg-icon/src/icons"))
  //     .end()
  //     .use("file-loader")
  //     .loader("file-loader");
  // },
};
