<template>
<div id="b">
  <h1>这是b组件</h1>
  <p>{{message}}</p>
  <Box/>
</div>
</template>

<script>
import mixin1 from '../mixin1'
export default {
  mixins: [
    mixin1
  ]
}
</script>

<style>

</style>