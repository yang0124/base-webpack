<template>
<div id="app">
  <p>{{message}}</p>
  <!-- <input type="text" v-model="message"/> -->
  <!-- v-model可以理解为  :value @input  的合体  -->
  <input type="text" :value="message" @input="changeAction"/>


  <!-- <Nav :value="selectedCity" @input="selectedAction"/> -->
  <!-- 组件上自定义v-model，就是将:value @input进行合并 -->
  <Nav v-model="selectedCity"/>

  <hr/>
  <h1>该城市的景点有：</h1>
  <ul>
    <li v-for="(item, index) in list" :key="index">
      {{item}}
    </li>
  </ul>

</div>
</template>

<script>
import Nav from './components/Nav'
export default {
  components: {
    Nav
  },
  data(){
    return {
      message: 'hello world',
      dataSource: {
        '深圳': ['世界之窗', '东部华侨城'],
        '广州': ['小蛮腰', '长隆'],
        '杭州': ['西湖'],
        '北京': ['故宫', '长城']
      },
      selectedCity: ''
    }
  },
  computed: {
    list(){
      return this.dataSource[this.selectedCity] || [];
    }
  },
  methods: {
    changeAction(ev){
      console.log(ev.target.value);
      this.message = ev.target.value;
    },
    // selectedAction(city){
    //   this.selectedCity = city;
    // }
  }
}
</script>

<style>

</style>