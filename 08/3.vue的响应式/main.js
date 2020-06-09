function updateView(){
  console.log('视图更新了');//
}

// 获得数组的原型
const oldArrayProperty = Array.prototype;

// 得到的对象，原型指向oldArrayProperty
// 对arrProto去扩展属性或方法，不会影响oldArrayProperty
const arrProto = Object.create(oldArrayProperty);

// 污染全局
// Array.prototype.push = function(){

// }

const methods = ['push', 'pop', 'shift', 'unshift', 'splice', 'sort', 'reverse'];
methods.forEach(mehtodName=>{
  arrProto[mehtodName] = function(){
    // 把数组原来的方法调用起来
    oldArrayProperty[mehtodName].call(this, ...arguments);
    // 更新视图
    updateView();
  }
})


// 重新定义属性，对属性进行监听
function defineReactive(target, key, value){

  // 实现了深度监听
  observer(value);

  Object.defineProperty(target, key, {
    get(){
      console.log('get执行了');
      return value;
    },
    set(newValue){
      console.log('set执行了');
      // 赋值
      value = newValue;
      // 对新设置的数据进行深度监听
      observer(newValue);
      //更新视图
      updateView();
    }
  })
};

// 观测对象中的每一个属性值
function observer(target){
  if(typeof target !== 'object' || target === null){
    // 不是数组或对象
    return target;
  }

  // 是数组
  if(Array.isArray(target)){
    target.__proto__ = arrProto;
  }


  //是数组,对象
  for(let key in target){
    let value = target[key];
    defineReactive(target, key, value);
  }
}





const data = {
  name: '张三',
  age: 20,
  info: {
    height: 180
  },
  arr: [1, 2, 3]
};
// 观测数据
observer(data);


