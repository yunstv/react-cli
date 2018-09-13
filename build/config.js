// 全局配置
const APP_CONFIG = {
  titleName: 'zy project',
  syscode: 'demo',
  prodPath: 'dist',
}
const path = require('path')

const prefixPath = '/zy'

// 打包的出口目录
const prodPath = APP_CONFIG.prodPath || 'dist'

const assetsPrePath = `${prefixPath}/${prodPath}/`

/**
 * 
*/

module.exports = {
  development: {
    prot: 1111,
    assetsPublicPath: '/',
    cssAssetsPath: '/',
    assetsSubDirectory: './',
    productionSourceMap: false
  },
  production: {
    assetsRoot: path.resolve(__dirname, '../' + prodPath),
    assetsPublicPath: assetsPrePath,
    cssAssetsPath: assetsPrePath,
    assetsSubDirectory: './',
    productionSourceMap: false
  },
  test: {
    assetsRoot: path.resolve(__dirname, '../' + prodPath),
    assetsPublicPath: assetsPrePath,
    cssAssetsPath: assetsPrePath,
    assetsSubDirectory: './',
    productionSourceMap: false
  }
}