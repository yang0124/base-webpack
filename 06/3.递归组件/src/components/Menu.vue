<template>
<div class="menu-wrap">
  <nav>
    <li v-for="(item, index) in value" :key="item.value" @click="btnAction(index)">
      {{item.label}}
    </li>
  </nav>

  
  <my-menu v-if="showDataSource" :value="showDataSource"/>
  

</div>
</template>

<script>
export default {
  name: 'my-menu',

  props: {
    value: Array
  },

  data(){
    return {
      selected: ''
    }
  },

  computed: {
    showDataSource(){
      return this.value[this.selected] && this.value[this.selected].children;
    }
  },

  methods: {
    btnAction(index){
      this.selected = index;
    }
  }
}
</script>

<style>
.menu-wrap{
  border: 3px solid seagreen;
}
</style>