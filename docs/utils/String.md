# String 

## capitalize()
单词首字母转换为大写
```
const capitalize = (str) => {
  const arr = str.trim().toLowerCase().split(" ");
  for (let i = 0; i < arr.length; i++) {
    arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
  }
  return arr.join(" ");
};
```
> capitalize("hello, world!");   // 输出: "Hello, World!"

**解释**
- split()- 将字符串转换为数组
- arr[i].charAt(0).toUpperCase()- 大写每个单词的第一个字母
- arr[i].slice(1)- 返回剩余的单词字母。
- arr.join(" ")- 将数组变回字符串
- str.trim()清除字符串的两端空格
