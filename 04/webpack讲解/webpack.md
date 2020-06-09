面试题：
为什么需要构建工具？构建工具可以做什么？

webpack优势在哪里？

webpack中，什么是loader？loader是做什么的？

webpack中，什么是plugins？plugins是做什么的？

loader和plugin的差别在哪里？

file-loader 和 url-loader的差别是什么？

hash, chunkHash, contentHash 有什么差别？
hash： 整个项目 （图片）
chunkHash： 一个入口的 （js）
contentHash： 文件内容的  （css）

如何对webpack的打包进行优化？

webpack怎么配置多页面应用？


 module,chunk,bundle分别指什么？
 module: 源文件，每一个文件。只要是用import，require引入的代码（js,css,图片等）就是js模块
 chunk: 一个入口所产生的依赖树，相关联的文件
 bundle： webpack打包出来的各个文件

 怎么做抽取公共代码？
 如何优化打包速度？


# webpack的使用
## 配置环境
全局安装
npm install webpack webpack-cli -g

本地安装
mkdir my-project
cd my-project
npm init -y
npm install webpack webpack-cli -D

## 配置文件
webpack默认配置文件：webpack.config.js
修改配置文件名字： webpack --config 指定的配置文件名字(webpack.config.dev.js)


## 处理es6以上的js语法：
npm install babel-loader @babel/core @babel/preset-env -D


## 处理jsx语法：
npm install @babel/preset-react -D
npm install react react-dom -S


## 处理css文件：
npm install style-loader css-loader -D

## 处理sass文件
npm install style-loader css-loader sass-loader node-sass -D

## 处理less文件
处理sass文件
npm install style-loader css-loader less-loader -D

## 处理图片，字体文件:
npm install file-loader -D


-D  --save-dev   开发依赖
-S  --save       生产依赖


## 清除./dist文件夹
npm install clean-webpack-plugin -D


## 压缩js
如果mode=production 代码自动压缩，内置了 uglifyjs-webpack-plugin
uglifyjs-webpack-plugin 在压缩es5比较优秀，在压缩es6+显得不是很好
terser-webpack-plugin对es6+以上的语法有很好的支持。是uglifyes的一个分支
npm install terser-webpack-plugin -D



## 压缩css
npm install mini-css-extract-plugin -D  (导出css)
npm install optimize-css-assets-webpack-plugin -D (优化压缩css)


## 压缩html
npm install html-webpack-plugin -D


## 提取公共的代码


## webpack打包的优化
thread-loader  
happyPack
dllPlugin
//dll: dynamic-link library 动态链接库



监听
方式1: webpack --watch
方式2:
// 启动监听
watch: true,
// 监听配置
watchOptions: {
  ignored: /node_modules/,//忽略需要监听的路径
  aggregateTimeout: 1000,//打包节流
  poll: 1000//每隔多长时间轮询一次监听变化
}
  

自动刷新
webpack-dev-server
1.开启一个本地服务器，运行项目
2.打包出来的bundle没有放在磁盘中，而是放在了服务器的运行内存中。
3.内置打开了watch=true，监听到了文件的变化后，通过websocket通知浏览器更新

热更新




webpack-merge


