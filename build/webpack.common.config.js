const path = require('path')
function resolve (dir) {
  return path.join(__dirname, dir)
}
module.exports = function () {
  return {
    configureWebpack: {
      resolve: {
        alias: {
          '@': resolve('../src')
        }
      }
    },
    chainWebpack: (config) => {
      const svgRule = config.module.rule('svg')
      svgRule.uses.clear()
      svgRule
        .test(/\.svg$/)
        .include.add(resolve('../src/packages/mc-svg-icon/src/icons'))
        .end()
        .use('svg-sprite-loader')
        .loader('svg-sprite-loader')
        .options({
          symbolId: 'mc-svg-icon-[name]'
        })
      const fileRule = config.module.rule('file')
      fileRule.uses.clear()
      fileRule
        .test(/\.svg$/)
        .exclude.add(resolve('../src/packages/mc-svg-icon/src/icons'))
        .end()
        .use('file-loader')
        .loader('file-loader')
    }
  }
}
