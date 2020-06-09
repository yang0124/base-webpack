// Object.defineProperty

const data = {};
let name = 'zhangsan';

Object.defineProperty(data, 'name', {
  get: function(){
    console.log('get执行了');
    return name;
  },
  set: function(newVal){
    console.log('set执行了');
    name = newVal;
  }
});

data.name = 'lisi';

console.log(data.name);