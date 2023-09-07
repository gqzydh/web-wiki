# Array 

## 循环实现数组map方法
### 1. 方法一
将 selfMap 注入到 Array.prototype 上（下面数组的迭代方法同理）
```
cconst selfMap = function (fn, context) {
  let arr = Array.prototype.slice.call(this)
  let mappedArr = Array( )
  for (let i = 0; i < arr.length; i++) {
    // 判断希疏数组的情况
    if (!arr.hasOwnProperty(i)) continue;
    mappedArr[i] = fn.call( context, arr[i], i, this)
  }
  return mappedArr
}
```
```
Array.prototype.selfMap = selfMap
[1,2,3].selfMap( number=> number * 2)  //[2,4, 6]
```
### 2. 方法二
使用 reduce 实现数组 map 方法
```
const selfMap2 = function (fn, context) {
  let arr = Array.prototype.slice.call(this)
  return arr.reduce((pre, cur, index) => {
    return [...pre, fn.call(context, cur,index, this)]
  }, [])
}
```
