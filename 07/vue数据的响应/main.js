
function updateView(){
  console.log('视图更新了....');
}

// 重新定义数组的原型
const oldArrayProperty = Array.prototype;
// 创建新的对象，原型指向的是oldArrayProperty
// 在这个对象上扩展方法不会影响Array.prototype
const arrProto = Object.create(oldArrayProperty);
const methods = ['push', 'pop', 'shift', 'unshift', 'splice', 'sort', 'reverse'];
// arrProto.push
// arrProto.pop
// arrProto.shift
// arrProto.unshift
// arrProto.splice
// arrProto.sort
// arrProto.reverse
methods.forEach(methodName=>{
  arrProto[methodName] = function(){
    oldArrayProperty[methodName].call(this, ...arguments);
    // 更新dom
    updateView();
  }
})


// 对每一个属性进行观测
function defineReactive(target, key, value){

  // 深度监听
  observer(value);

  Object.defineProperty(target, key, {
    get(){
      console.log('get执行了');
      return value;
    },
    set(newValue){
      console.log(key, 'set执行了');

      // 对新设置的属性值还需要进行深度监听
      observer(newValue);

      value = newValue;
      // 更新视图
      updateView();
    }
  })
}

// 监听对象属性的方法
function observer(target){
  // 判断监听数据的类型
  if(typeof target !== 'object' || target === null){
    // 不是对象或者数组就被过滤了
    return target;
  }

  if(Array.isArray(target)){
    target.__proto__ = arrProto;
    return;
  }

  for( let key in target ){
    defineReactive(target, key, target[key]);
  }

}

const data = {
  name: 'zhangsan',
  age: 20,
  info: {
    height: 180
  },
  list: ['a', 'b', 'c']
}

// 监听数据的变化
observer(data);

/* data.age = {
  value: 20
}

// 设置
data.info.height = 190;

data.age.value = 30; */

data.info.address = '深圳';//Vue.set

delete data.name;//Vue.delete


// data.list.push('hello');

// data.list[1] = 'xx';

