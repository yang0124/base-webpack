import $ from 'jquery'

import React from 'react'
import ReactDOM from 'react-dom'

import(/* webpackChunkName: "a-lodash" */'lodash')


import {} from '@common/math'

console.log('这是a模块')


ReactDOM.render(
  <div>hello world!!!!</div>,
  document.querySelector('#root')
)