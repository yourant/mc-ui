// import Vue from 'vue';

import ElementUI from "element-ui";
// 某些基于element-ui再封装的组件
import "element-ui/lib/theme-chalk/index.css";

// import hljs from 'highlight.js'
// import 'highlight.js/styles/googlecode.css' //样式文件

// Vue.directive('highlight', function (el) {
//   let blocks = el.querySelectorAll('pre code');
//   blocks.forEach((block) => {
//     hljs.highlightBlock(block)
//   })
// })

import mcui from "../../src/packages/index";
import "../../src/packages/theme-default/lib/index.css";

export default ({ Vue }) => {
  Vue.use(ElementUI, {
    size: "small",
  });
  Vue.use(mcui);
};
