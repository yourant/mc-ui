// const { path } = require("@vuepress/utils");

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
        collapsable: true,
        children: ["/install/", "/start/"],
      },
      {
        title: "组件",
        collapsable: true,
        children: ["/components/mc-nested-table"],
      },
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
};
