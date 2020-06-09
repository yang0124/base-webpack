const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCssAssetsWebpackPlugin = require('optimize-css-assets-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {

  entry: {
    home: './src/home/index.js',
    product: './src/product/index.js',
    about: './src/about/index.js'
  },

  output: {
    filename: 'js/[name].[contentHash].js',
    path: path.resolve(__dirname, './dist')
  },

  mode: 'production',

  module: {
    rules: [
      // 处理js
      {
        //说明需要loader处理的文件匹配规则
        test: /\.(js|jsx)$/,
        //说明使用的loader名字
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      //处理css
      {
        test: /\.css$/,
        loader: [MiniCssExtractPlugin.loader, 'css-loader']
      }
    ]
  },
  
  plugins: [
    //在每一次编译前都清除output输出的路径
    new CleanWebpackPlugin(),
    // 导出css
    new MiniCssExtractPlugin({
      filename: 'css/[name].[contentHash].css'
    }),
    // 优化压缩css
    new OptimizeCssAssetsWebpackPlugin({
      assetNameRegExp: /\.css$/g,
      cssProcessor: require('cssnano')
    }),
    //postcss   cssnano
    new HtmlWebpackPlugin({
      title: '首页',
      template: './template/index.html',
      filename: 'home.html',
      chunks: ['home']
    }),
    new HtmlWebpackPlugin({
      title: '产品',
      template: './template/index.html',
      filename: 'product.html',
      chunks: ['product']
    }),
    new HtmlWebpackPlugin({
      title: '关于我们',
      template: './template/index.html',
      filename: 'about.html',
      chunks: ['about']
    })
  ]
  // .....
}

