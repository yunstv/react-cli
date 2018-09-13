const path = require('path')
const config = require('./config')
const utils = require('./utils')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const HappyPack = require('happypack')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const webpack = require('webpack')

function  resolve(dir) {
  return path.join(__dirname, '..', dir)
}

const px2remConfig = {
  loader: 'webpack-px-to-rem',
  // 这个配置是可选的
  options: {
    // 1rem=npx 默认为 10
    basePx: 100,
    // 只会转换大于min的px 默认为0
    // 因为很小的px（比如border的1px）转换为rem后在很小的设备上结果会小于1px，有的设备就会不显示
    min: 1,
    // 转换后的rem值保留的小数点后位数 默认为3
    floatWidth: 3
  },
}
const webpackConfig = {
    mode: process.env.NODE_ENV,

    entry: {
      app: resolve('src/main.jsx'),
    },

    module: {
      rules: [
        {
          test: /\.js[x]?$/,
          use: [
            'happypack/loader?id=jsx',
            px2remConfig,
          ],
         
          include: [ resolve('src') ],
        },
        {
          test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
          loader: 'url-loader',
          options: {
            limit: 10000,
            // name: utils.asssetPath('fonst/[name].[hash:5].[ext]'),
            // publicPath: config[process.env.PACKAGE].cssAssetsPath
            name: path.posix.join('./', 'fonst/[name].[hash:5].[ext]'),
            publicPath: '/'
          }
        },
        {
          test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
          loader: 'url-loader',
          options: {
            limit: 10000,
            name: path.posix.join('./', 'images/[name].[hash:5].[ext]'),
            publicPath: '/'
          }
        },
        {
          test: /\.css$/,
          use: [
            MiniCssExtractPlugin.loader,
            px2remConfig,
            'css-loader',
          ],
        },
        {
          test: /\.scss$/,
          use: [
            MiniCssExtractPlugin.loader,
            px2remConfig,
            'css-loader',
            'postcss-loader',
            'sass-loader',
          ],
        }
      ]
    },

    plugins: [
      // 多线程打包
      new HappyPack({
        id: 'jsx',
        threads: 4,
        loaders: [
          'babel-loader',
          // {
          //   loader: 'eslint-loader',
          //   exclude: ['/node_modules/'],
          // }
        ],
      }),

      // 提取html模版
      new HtmlWebpackPlugin({
        template: 'src/template.html',
        filename: 'index.html',
        inject: 'body', // 将所有javascript资源注入至body底部
        minify: {
          removeComments: true, // 删除注释
          collapseWhitespace: true, // 压缩成一行
          removeAttributeQuotes: false // 删除引号
        },
        chunksSortMode: 'dependency' // 按照不同文静的依赖关系来排序 
      }),

      // 提取公共样式
      new MiniCssExtractPlugin({
        filename: 'css/[name].[hash:5].css',
        allChunks: true,
      })
    ],

    resolve: {
      // 指定解析器解析文件扩展名范围
      extensions: ['.js', '.jsx', '.scss', '.css'],
      // 设置访问别名 以及 对应路径
      alias: {
        'src': resolve('src'),
        '@': resolve('src'),
        '$assets': resolve('src/assets'),
        '$components': resolve('src/components'),
        '$containers': resolve('src/containers'),
        '$redux': resolve('src/redux'),
        '$views': resolve('src/views'),
      }
    }
}

module.exports = webpackConfig