import React from 'react'
import ReactDOM from 'react-dom'

// import {add} from './common/math'


setTimeout(()=>{

  import(/* webpackChunkName: "math" */'./common/math')
  .then(res=>{
    const val = add(10, 20);
    console.log(`result: ${val}`);
  })
  .catch(()=>{
    console.log('加载异步模块失败');
  })

}, 3000);




ReactDOM.render(
  <div>
    <h1>这是app的内容部分</h1>
  </div>,
  document.querySelector('#root')
)
