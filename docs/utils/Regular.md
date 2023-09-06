# Regular expression

## slugify()
格式转换, 可选择性使用其中一个或多个
 ```
 const slugify = (string, separator = "-") => {
  return string
    .toString() // 转换为字符串(可选)
    .trim() // 删除字符串两侧的空格（可选）
    .replace(/\s+/g, separator) // 将空格替换为 -
    .replace(/[^\w-]+/g, "") // 删除所有非单词字符
    .replace(/_/g, separator) // 将 _ 替换为 -
    .replace(/--+/g, separator) // 将多个 - 替换为单个 -
    .replace(/-$/g, ""); // 删除尾随 - (可选)
    .toLowerCase() // 将字符串转换为小写字母 (可选)
};
```
> slugify("Hello, World!");    // 输出: "Hello-World"

> slugify("Hello, Universe!", "_");    // 输出: "Hello_Universe"

## validateEmail()
电子邮件验证
```
const validateEmail = (email) => {
  const regex = /^\S+@\S+.\S+$/;
  return regex.test(email);
};
```
> validateEmail("youremail@org.com"); // true

> validateEmail("youremail@com"); // false

> validateEmail("youremail.org@com"); // false

**注意：** 对于较大的项目，我建议使用像 [validator.js](https://www.npmjs.com/package/validator) npm插件 这样的库来为你处理繁重的工作。

## 参考
1. [正则表达式在线测试、生成、解析工具、正则表达式库](https://goregex.cn/)