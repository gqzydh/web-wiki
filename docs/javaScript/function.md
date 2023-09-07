# 常用函数

## 格式化
#### 格式化金钱
```
const ThousandNum = num => num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
const money = ThousandNum(20190214);
// money => "20,190,214"
```

## 生成随机
#### 生成随机ID
```
const RandomId = len => Math.random().toString(36).substr(3, len);
const id = RandomId(10);
// id => "jg7zpgiqva"
```
#### 生成随机HEX色值
```
const RandomColor = () => "#" + Math.floor(Math.random() * 0xffffff).toString(16).padEnd(6, "0");
const color = RandomColor();
// color => "#f03665"
``` 
## 操作URL
#### 操作URL查询参数
```
const params = new URLSearchParams(location.search.replace(/\?/ig, "")); // location.search = "?name=young&sex=male"
params.has("young"); // true
params.get("sex"); // "male"
```
## 时间
#### 时间戳
```
const timestamp = +new Date("2019-02-14");
// timestamp => 1550102400000
```
## 数字
#### 精确小数
```
const RoundNum = (num, decimal) => Math.round(num * 10 ** decimal) / 10 ** decimal;
const num = RoundNum(1.69, 1);
// num => 1.7
```
#### 判断奇偶数
```
const OddEven = num => !!(num & 1) ? "odd" : "even";
const num = OddEven(2);
// num => "even"
```
#### 取最小最大值数
```
const arr = [0, 1, 2];
const min = Math.min(...arr);
const max = Math.max(...arr);
// min max => 0 2
```
#### 生成范围随机数
```
const RandomNum = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
const num = RandomNum(1, 10);
```

## 防抖
```
const debounce = (func, time = 17, options = {
  leading: true
    context: null
}) => {
  let timer;
  const _debounce = function (...args) {
    if (timer) {
      clearTimeout(timer)
    }
    if (options.leading && !timer) {
      timer = setTimeout(null, time)
      func.apply(options.context, args)
    } else {
      timer = setTimeout(() => {
        func.apply(options.context, args)
        timer = null
      }, time)
    }
  };
  _debounce.cancel = function () {
    clearTimeout(timer)
    timer = null
  };
  return debounce
};
```

## 节流
```
const throttle = (
  func,
  time = 17,
  options = {
    leading: true,
    trailing: false,
    context: null
  }
) => {
  let previous = new Date(0).getTime()
  let timer
  const _throttle = function (...args) {
    let now = new Date().getTime()
    if (!options.leading) {
      if (timer) return
      timer = setTimeout(() => {
        timer = null
        func.apply(options.context, args)],time )
    } else if (now - previous > time) {
      func.apply(options.context, args)
      previous = now
    } else if (options.trailing) {
      clearTimeout(timer)
      timer = setTimeout(() => {
        func.apply(options.context, args)
      }, time)
    }
  }
  _throttle.cancel = () => {
    previous = 0
    clearTimeout(timer)
    timer = null
  }
  return throttle
};
```

## 图片懒加载
> getBoundClientRect 的实现方式，监听 scroll 事件（建议给监听事件添加节流），图片加载完会从 img 标签组成的 DOM 列表中删除，最后所有的图片加载完毕后需要解绑监听事件
```
let imgList = [...document.querySelectorAll("img")]
let num = imgList.length
let lazyLoad = (function () {
  let count = 0
  return function () {
    let deleteIndexList = []
    imgList.forEach((img, index) => {
      let rect = img.getBoundingClientRect()
      if (rect.top < window.innerHeight) {
        img.src = img.dataset.src
        deleteIndexList.push(index)
        count++
        if (count === num) {
          document.removeEventListener('scroll', lazyLoad1)
        }
      }
    })
    imgList = imgList.filter((-, index) => !deleteIndexList.includes(index))
  }
})()
```
> intersectionObserver 的实现方式，实例化一个 IntersectionObserver ，并使其观察所有 img 标签当 img 标签进入可视区域时会执行实例化时的回调，同时给回调传入一个 entries 参数，保存着实例观察的所有元素的一些状态，比如每个元素的边界信息，当前元素对应的 DOM 节点，当前元素进入可视区域的比率，每当一个元素进入可视区域，将真正的图片赋值给当前 img 标签，同时解除对其的观察
```
let imgList = [...document.querySelectorAll('img')]
let lazyLoad = function () {
  let observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.intersectionRatio > 0) {
        entry.target.src = entry.target.dataset.src
        observer.unobserve(entry.target)
      }
    })
  }) 
  imgList.forEach(img => { 
    observer.observe(img)
  })
}
```