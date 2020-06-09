import Box from './components/Box'

export default {
  components: {
    Box
  },
  data(){
    return {
      message: 'hello world',
      value: 'hi'
    }
  },
  mounted(){
    console.log('组件加载了');
  }
}