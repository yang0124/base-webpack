<template>
  <!-- 自定义实现pagination -->
  <nav class="pagination">
    <li class="pagination-item" 
      v-for="(item, index) in length" :key="item" 
      :class="{active: value===index}"
      @click="changeAction(index)">
    </li>
  </nav>
</template>

<script>
export default {
  props: {
    value: Number,
    length: Number
  },
  methods: {
    changeAction(index){
      this.$emit('input', index);
    }
  }
}
</script>

<style>

</style>