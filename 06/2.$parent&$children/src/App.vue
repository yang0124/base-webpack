<template>
<div id="app">

  <h1>App</h1>
  <Box/>


  <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white" :index="2">
    <van-swipe-item>
      <img src="https://pic.maizuo.com/usr/100004836/9c9cefa41110e8241bae0cbb027b3e48.jpg?x-oss-process=image/quality,Q_70" alt="">
    </van-swipe-item>

    <van-swipe-item>
      <img src="https://pic.maizuo.com/usr/100004836/d841b833dce082d7875a4ea2b8b2516e.jpg?x-oss-process=image/quality,Q_70" alt="">
    </van-swipe-item>

    <van-swipe-item>
      <img src="https://pic.maizuo.com/usr/100004836/d841fc6791d7336fb3febc32d6980f40.jpg?x-oss-process=image/quality,Q_70" alt="">
    </van-swipe-item>

    
  </van-swipe>



</div>
</template>

<script>
import Box from './components/Box'
import Swipe from './components/van-swipe'
import SwipeItem from './components/van-swipe-item'
export default {
  components: {
    Box,
    'van-swipe': Swipe,
    'van-swipe-item': SwipeItem
  },
  mounted(){
    console.log(this.$children);
  }
}
</script>

<style>
img{
  width: 100%;
}
</style>