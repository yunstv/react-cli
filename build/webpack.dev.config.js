const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin')
const config = require('./config')
const utils = require('./utils')
const webpack = require('webpack')
const merge = require('webpack-merge')
const os = require('os')

const baseWebpackConfig = require('./webpack.base.config')
const webpackConfig = merge(baseWebpackConfig, {
  devtool: '#cheap-eval-source-map',
  output: {
    path: config[process.env.PACKAGE].assetsRoot,
    // path: path.resolve(__dirname, '../dist'),
    filename: utils.asssetPath('js/[name]/js'),
    publicPath: config[process.env.PACKAGE].assetsPublicPath
  },

  plugins: [

    // 设置环境变量
    new webpack.DefinePlugin({
      'process.env.PACKAGE': JSON.stringify(process.env.PACKAGE),
    }),

    // 热更新
    new webpack.HotModuleReplacementPlugin(),

    // 美化本地开发时终端界面
    new FriendlyErrorsWebpackPlugin({
      compilationSuccessInfo: {
        messages: ['serve http://localhost:' + config[process.env.PACKAGE].prot]
      }
    }),
  ],

  devServer: {
    contentBase: __dirname,
    historyApiFallback: true,
    hot: true,
    open: false,
    compress: true,
    inline: true,
    quiet: true,
    disableHostCheck: true,
    port: config[process.env.PACKAGE].prot,
    proxy: {
      '/proxy/*': {
        target: '',
        pathRewrite: {
          '^/proxy/': '/',
        },
        changeOrigin: true,
        secure: false,
      }
    }
  }
})

module.exports = webpackConfig
