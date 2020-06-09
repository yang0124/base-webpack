const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HotModuleReplacementPlugin = require('webpack').HotModuleReplacementPlugin;

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, './dist')
  },
  mode: 'development',
  plugins: [
    new HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      template: './index.html',
      filename: 'index.html'
    })
  ],

  // webpack-dev-server 的配置
  devServer: {
    //热更新
    hot: true,
    // 端口
    port: 8000,
    // 显示打包进度条
    progress: true,
    // 自动打开浏览器
    open: true,
    // 启动gzip压缩
    compress: true,
    // 设置代理
    proxy: {
      '/api': 'http://localhost:3000'
    }
  }

}