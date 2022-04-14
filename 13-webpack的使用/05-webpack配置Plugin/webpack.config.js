const path = require('path')
const webpack = require('webpack')

module.exports = {
  entry: './src/main.js',
  output: {
    path:path.resolve( __dirname,'dist'),
    filename: 'bundle.js',
    publicPath: '/dist'  //加载url时自动添加该路径
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        //css-loader负责将css文件进行加载
        //style-loader负责将样式添加到DOM中
        //使用多个loader时，从右向左加载
        use: [ 'style-loader', 'css-loader' ]
      },
      {
        test:/\.vue/,
        use:['vue.loader']
      }
    ]
  },
  plugins:[
    new webpack.BannerPlugin('最终版权归aaa所有')
  ],
  devServer:{
    contenBase:'./dist',
    inline:true
  }
}