const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCssAssetsWebpackPlugin = require('optimize-css-assets-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {

  // 打包入口
  //字符串，对象, 数组
  //默认值： ./src/index.js
  entry: './src/main.jsx',

  // 打包的输出
  // 默认值：./dist/main.js
  output: {
    filename: 'bundle.[hash].js',
    path: path.resolve(__dirname, './dist')
  },

  // webpack打包模式
  // 取值：production   development  none
  // 默认值 production
  // 如果mode=production 代码自动压缩，内置了 uglifyjs-webpack-plugin
  // uglifyjs-webpack-plugin 在压缩es5比较优秀，在压缩es6+显得不是很好
  // terser-webpack-plugin对es6+以上的语法有很好的支持。是uglifyes的一个分支
  mode: 'production',

  // 配置loaders的
  module: {
    // 一个loader的配置项，就是一个对象，放在rules的数组中
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
      },
      // 处理sass
      {
        test: /\.scss$/,
        loader: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader']
      },
      // 处理文件
      {
        //网络地址不处理
        // 绝对路径不处理
        // 只会相对路径当成模块
        test: /\.(png|jpeg|gif|jpg|svg|ttf)$/,
        // loader: 'file-loader'
        loader: 'url-loader',
        options: {
          limit: 5 * 1024
        }
      }

    ]
  },
  
  plugins: [
    //在每一次编译前都清除output输出的路径
    new CleanWebpackPlugin(),
    // 导出css
    new MiniCssExtractPlugin({
      filename: '[name].css'
    }),
   
    
    new HtmlWebpackPlugin({
      title: '首页',
      template: './index.html',
      filename: 'home.html',
      minify: true,
      hash: true
    })
  ],

  //优化配置
  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin({
      //加快二次构建
      cache: true,
      // 多线程
      parallel: true,
      //TerserPlugin的配置项
      terserOptions: {
        compress: {
          //删除没有用的代码
          unused: true,
          // 删除console
          drop_console: true
        }
      }
    }),
     // 优化压缩css
     new OptimizeCssAssetsWebpackPlugin({
      assetNameRegExp: /\.css$/g,
      cssProcessor: require('cssnano')
    }),
    //postcss   cssnano
  ],
  }
  // .....
}

