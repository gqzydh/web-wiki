# JavaScript

## 常用函数

## 第三方工具库
#### [math.js](https://mathjs.org/)
> math.js 用于JavaScript和Node.js的扩展数学库, 支持符号计算的灵活表达式解析器，大量内置函数和常量，并提供了集成的解决方案来处理不同的数据类型，例如数字，大数，复数，分数，单位和矩阵，强大且易于使用。
`npm install mathjs`

使用

```
import {
  atan2, chain, derivative, e, evaluate, log, pi, pow, round, sqrt } from 'mathjs'

// functions and constants
round(e, 3)                    // 2.718
atan2(3, -3) / pi              // 0.75
log(10000, 10)                 // 4
sqrt(-4)                       // 2i
pow([[-1, 2], [3, 1]], 2)      // [[7, 0], [0, 7]]
derivative('x^2 + x', 'x')     // 2 * x + 1

// expressions
evaluate('12 / (2.3 + 0.7)')   // 4
evaluate('12.7 cm to inch')    // 5 inch
evaluate('sin(45 deg) ^ 2')    // 0.5
evaluate('9 / 3 + 2i')         // 3 + 2i
evaluate('det([-1, 2; 3, 1])') // -7

// chaining
chain(3)
    .add(4)
    .multiply(2)
    .done()  // 14  
```

## utils

### 参考
[前端常用的 59 个工具类](https://juejin.cn/post/6844904009594044423)

