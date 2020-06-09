<template>
<div id="app">
  <A/>
  <!-- <B/> -->
</div>
</template>

<script>
export default {
  components: {
    A: ()=>import('./components/A'),
    B: ()=>import('./components/B')
  }
}
</script>

<style>

</style>