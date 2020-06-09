<template>
<div id="app">
  <h1>app</h1>
  <my-menu :value="dataSource"/>
</div>
</template>

<script>
import dataSource from './data'
import Menu from './components/Menu'
console.log(dataSource)
export default {
  components: {
    [Menu.name]: Menu
  },
  data(){
    return {
      dataSource
    }
  }
}
</script>

<style>

</style>