<template>
  <nav>
    <li v-for="(city, index) in cityList" :key="index">
      <button @click="selectAction(city)" :class="{active: city===value}">{{city}}</button>
    </li>
  </nav>
</template>

<script>
export default {
  props: {
    value: String
  },
  data(){
    return {
      cityList : ['深圳', '北京', '广州', '杭州']
    }
  },
  methods: {
    selectAction(city){
      this.$emit('input', city);
    }
  }
}
</script>

<style>
.active{
  background: yellow;
}
</style>