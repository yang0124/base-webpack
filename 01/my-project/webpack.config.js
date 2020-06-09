const path = require('path');

module.exports = {

  // 打包入口
  //字符串，对象, 数组
  //默认值： ./src/index.js
  entry: './src/main.jsx',

  // 打包的输出
  // 默认值：./dist/main.js
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, './dist')
  },

  // webpack打包模式
  // 取值：production   development  none
  // 默认值 production
  mode: 'none',

  // 配置loaders的
  module: {
    // 一个loader的配置项，就是一个对象，放在rules的数组中
    rules: [
      // 处理js
      {
        //说明需要loader处理的文件匹配规则
        test: /\.(js|jsx)$/,
        //说明使用的loader名字
        loader: 'babel-loader'
      },
      //处理css
      {
        test: /\.css$/,
        loader: ['style-loader', 'css-loader']
      },
      // 处理sass
      {
        test: /\.scss$/,
        loader: ['style-loader', 'css-loader', 'sass-loader']
      },
      // 处理文件
      {
        test: /\.(png|jpeg|gif|jpg|svg|ttf)$/,
        // loader: 'file-loader'
        loader: 'url-loader',
        options: {
          limit: 5
        }
      }

    ]
  },
  
  // plugins:
  // .....
}

