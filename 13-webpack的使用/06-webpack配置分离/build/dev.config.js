const webpackMerge = require('webpack-merge')
const baseConfig = require("./base.config")

module.exports = webpackMerge(baseConfig,{
  devServer:{
    contenBase:'./dist',
    inline:true
  }
})