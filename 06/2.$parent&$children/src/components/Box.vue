<template>
<div id="box"></div>




</template>

<script>
export default {
  mounted(){
    console.log(this.$parent);
  }
}
</script>

<style>
#box{
  width: 100px;
  height: 100px;
  background: red;
}
</style>