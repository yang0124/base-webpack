<template>
<div id="a">
  <h1>这是a组件</h1>
  <p>{{message}}</p>
  <p>{{value}}</p>
  <Box/>
</div>
</template>

<script>
import mixin1 from '../mixin1'
import mixin2 from '../mixin2'
export default {
  // 局部不混入
  mixins: [
    mixin1,
    mixin2
  ],
  data(){
    return {
      message: '这是a组件的value'
    }
  },
  mounted(){
    console.log('a组件的mounted执行了');
  }
}
</script>

<style>

</style>