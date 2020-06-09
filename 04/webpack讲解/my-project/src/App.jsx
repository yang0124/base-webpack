import React, {Component} from 'react'
import './style.scss'

import img from './logo.png'

export default class App extends Component{
  render(){
    return (
      <div>
        <h1>千锋教育。。。。。</h1>
        <img src={img}/>
      </div>
    )
  }
}

console.log('hello');