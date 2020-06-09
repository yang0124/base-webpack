new Vue({
  el: '#app',
  data: {
    value: 'hello world',
    list: []
  },
  methods: {
    addAction(){
      this.list.push(this.value);
      this.value = '';
    }
  }
})