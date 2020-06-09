const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const HappyPack = require('happypack');
const DllReferencePlugin = require('webpack').DllReferencePlugin;

// 分割js代码
// 方式1: 多个入口
// 方式2: 异步加载模块
// 抽取公共的代码：splitChunks（对js和css都作用）


module.exports = {
  mode: 'production',
  entry: {
    a: './src/a.js',
    b: './src/b.js'
  },
  output: {
    filename: '[name].[chunkHash].js',
    path: path.resolve(__dirname, './dist')
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        loader: [
          'happypack/loader?id=js'
        ],
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        loader: [
          'happypack/loader?id=css'
        ]
      },
      
      {
        test: /\.(png|jpeg|jpg|gif)$/,
        loader: 'url-loader'
      }
    ]
  },
  plugins: [
    //new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: './index.html',
      filename: 'index.html'
    }),
    new BundleAnalyzerPlugin(),

    new HappyPack({
      id: 'js',
      loaders: ['babel-loader']
    }),

    new HappyPack({
      id: 'css',
      threads: 2,
      loaders: [
        'style-loader',
        'css-loader'
      ]
    }),
    //HappyPack处理不了url-loader file-loader
    new DllReferencePlugin({
      context: __dirname,
      manifest: require('./manifest.json')
    })
  ],

  resolve: {
    alias: {
      'react': path.resolve(__dirname, './node_modules/react/cjs/react.development'),
      '@common': path.resolve(__dirname, './src/common')
    }
  },


  // 优化配置
  optimization: {
    // 对公共代码进行抽取
    splitChunks: {//webpack4.0前 common-webpack-plugin
      //async   initial   all
      chunks: 'all',


      // minSize: 30000,//最小尺寸 30k    production默认值为10k 
      // minRemainingSize: 0,//最大尺寸
      // maxSize: 0,//最大尺寸
      // minChunks: 1,
      // maxAsyncRequests: 6,
      // maxInitialRequests: 4,
      // automaticNameDelimiter: '~',
      // automaticNameMaxLength: 30,
      //name: true,

      cacheGroups: {
        defaultVendors: {
          test: /[\\/]node_modules[\\/]/,
          priority: -10
        },
        default: {
          minChunks: 2,
          priority: -20,
          reuseExistingChunk: true
        }
      }

    }
  }


}