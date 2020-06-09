# MVVM
数据驱动视图

如何理解MVVM模型？

vue如何实现响应式？
Object.defineProperty
缺点：
1.后面对属性进行新增（Vue.set），或者删除(Vue.delete)都不行，不能做到响应式。
2.复杂的对象，需要自己实现深度监听，进行递归监听。需要一次性监听到底的。
  数量多的情况下，会导致页面卡死。
  解决：vue3.0 proxy   polyfill

  promise    babel     polyfill  
  function Promise(){
    
  }
  Promise()

3.对数组没有办法进行监听。需要进行额外的处理


# 虚拟dom / virtual dom /  VDOM
用js模拟dom，在js中计算出最小的变更，再操作dom。

依赖于插件 snabbdom 实现了vdom

核心：diff算法

1.遍历旧的dom树
2.遍历新的dom树
3.排序
时间复杂度O(n^3)
1000节点， 1000000000 不可取的。。。。

冒泡排序，时间复杂度O（n*2）

在vdom的计算中，将时间复杂度降低到了O(n)

只比较同一层级
标签不同，直接删除重建，不再深层比较
标签和key一样，认为是相同的节点，再进行深层次的比较


