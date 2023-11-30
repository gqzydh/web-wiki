# lodash

lodashjs官网（js工具库）
https://www.lodashjs.com/

## 安装
```
npm i --save lodash

npm install --save @types/lodash
```
### 按需引入
main.js里面就不要再引入lodash
1. 用lodash的random举例
```
// 10-100的随机数
<script setup>
  import _random from "lodash/random"
  console.log(_random(10,100))
</script>

```


## vue3文件中进行使用
index.vue
```
<script lang="ts">
import { cloneDeep } from 'lodash';
    
var s = [{ 'a': 1 }, { 'b': 2 }];
var d =cloneDeep(s);
console.log("d",d);  // => 同s
console.log(d[0] === s[0]);  // => false
</script>
```
实例集合
```
<script>
    import { cloneDeep,uniq,uniqWith,isEqual,chunk,compact,reject,find,filter,map,max,min,sum } from 'lodash';
    // 1.0、数组深拷贝
    var s = [{ 'a': 1 }, { 'b': 2 }];

    var d =cloneDeep(s);
    console.log("数组深拷贝",d); //同上
    console.log(d[0] === s[0]);  //false

    // 2.0、数组去重
    var arr = [1,1,2,3,3,4]
    var ary = uniq(arr)
    // var ary1 = [...new Set(arr)]
    var ary2 =Array.from(new Set(arr))
    console.log('数组去重',ary,ary2);// [1,2,3,4]

    var arrObj = [{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 },{ 'x': 2, 'y': 1 }, { 'x': 1, 'y': 2 }];
    var a14 = uniqWith(arrObj, isEqual)  
    console.log('数组对象去重',a14);  // [ { x: 1, y: 2 }, { x: 2, y: 1 } ]

    var arr84 = [1,2,3,5,9,8]
    var arr82 = [2,3,]
    var arr83 = [2,3,4,6,8]
    var arr86 = intersection(arr84,arr82,arr83)
    console.log("提取数组相同元素",arr86);  // [2,3]

    // 3.0、数组切分
    var arr31 = [1,2,3,4,5,6,7,8,9]
    var ary32 = chunk(arr31,3)
    console.log("数组切分",ary32);// [[1,2,3],[4,5,6],[7,8,9]]

    //4.0、去除假值
    //在JavaScript中，假值有false、null、0、""、undefined 和 NaN。
    var arr41 = ['1','2',' ',0,"",NaN,null,undefined,false]
    var ary42 = compact(arr41)
    console.log('去除假值',ary42);

    // 5.0、根据条件去除某个元素
    var arr51 = [ 
      {id: 0, name: "aaa", age: 33},
      {id: 0, name: "bbb", age: 33},
      {id: 1, name: "bbb", age: 25}
    ];
    var ary52 =reject(arr51, ['name', 'bbb'])
    console.log("去除元素",ary52); // [{id: 0, name: "aaa", age: 33}]

    // 6.0、查找数组
    var arr61 = [ 
      {id: 0, name: "aaa", age: 33},
      {id: 0, name: "bbb", age: 33},
      {id: 1, name: "bbb", age: 25}
    ];
    var ary62 =find(arr61, ['name', 'bbb'])
    console.log("查找数组",ary62); //  {id: 0, name: "bbb", age: 33},查找结果的第一个值

    // 7.0、过滤数组——根据条件过滤出符合条件的元素，返回新数组
    var arr71 = [ 
      {id: 0, name: "aaa", age: 33},
      {id: 1, name: "bbb", age: 33},
      {id: 2, name: "bbb", age: 25}
    ];
    var ary72 =filter(arr71, ['name', 'bbb'])
    console.log("过滤数组",ary72); // [{id: 1, name: "bbb", age: 33},{id: 2, name: "bbb", age: 25}]

    // 8.0、从集合中挑出一个key，将其值作为数组返回
    var arr81 = [ 
      {id: 0, name: "aaa", age: 33},
      {id: 1, name: "bbb", age: 33},
      {id: 2, name: "bbb", age: 25}
    ];
    var ary82 =map(arr81, 'name')
    console.log("key的值数组",ary82);  // ['aaa', 'bbb', 'bbb']

    // 9.0、最值
    var arr91 = [12,1,13,14,25]
    var ary92 = max(arr91)
    console.log('最大值',ary92); // 25
    var ary93 = min(arr91)
    console.log('最小值',ary93); // 1
    var ary94 = sum(arr91)
    console.log('数组和',ary94); // 65
</script>

```

## 参考

用lodash开发前端，真香！
https://juejin.cn/post/7277799790296416290