const path = require('path')
const config = require('./config')

exports.asssetPath = function (pathurl) {
  const assetsSubDirectory = config[process.env.PACKAGE].assetsSubDirectory
  return path.posix.join(assetsSubDirectory, pathurl)
}