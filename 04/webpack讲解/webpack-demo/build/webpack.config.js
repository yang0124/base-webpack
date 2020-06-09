const dev = require('./webpack.config.dev');
const prod = require('./webpack.config.prod');
const base = require('./webpack.config.base');
const merge = require('webpack-merge');

const isProduction = process.env.NODE_ENV === 'production';

const config = merge(base, isProduction ? prod : dev);

console.log(config);

module.exports = config;