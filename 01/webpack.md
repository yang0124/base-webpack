面试题：
为什么需要构建工具？构建工具可以做什么？

webpack优势在哪里？

webpack中，什么是loader？loader是做什么的？

webpack中，什么是plugins？plugins是做什么的？

loader和plugin的差别在哪里？

file-loader 和 url-loader的差别是什么？





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

