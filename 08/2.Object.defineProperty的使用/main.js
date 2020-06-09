const data = {};

let name = '张三';


// 对对象定义属性
// 需要3个参数
// 参数1：对象本身
// 参数2:定义的属性
// 参数3:定义属性的选项
Object.defineProperty(data, 'name', {
  get(){
    console.log('get执行了');
    return name;
  },
  set(newVal){
    console.log('set执行了:', newVal);
    name = newVal;
  }
})


console.log(data.name);


data.name = '李四';


console.log(data.name);

