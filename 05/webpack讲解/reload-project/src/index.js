import './a'
import './b'


document.write('hello webpack !!!!!123   abc!!!~~~~~~~@@@@-$$$$$$####');




console.log(1);
console.log(2);
console.log(3);
console.log(4);
console.log(5);

console.log(6);
console.log(7);




//判断是否开启了热更新
if(module.hot){
  //接收所有文件的热更新
  module.hot.accept('./a.js', ()=>{
    console.log('更新了');
  })
}

