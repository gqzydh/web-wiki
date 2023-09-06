# VueUse 使用

## 简介
VueUse是一个Vue Composition API实用程序的集合，适用于Vue 2.x和3.x。
VueUse官网： https://vueuse.org/
#### 版本
  当前版本： v9.2.0
  从 v4.0 开始，借助vue-demi的强大功能，它适用于 Vue 2 和 3 ！
  从 v6.0 开始，VueUse 需要vue>= v3.2 或@vue/composition-api>= v1.1

  vue2 参考： https://v5-3-0.vueuse.org/shared/useTimeout/
  vue3 参考： https://vueuse.org/functions.html

## 安装
```
npm i @vueuse/core
# 或
yarn add @vueuse/core
```

## 使用
```
import { useMouse, usePreferredDark, useLocalStorage } from '@vueuse/core'

export default {
  setup() {
    // tracks mouse position
    const { x, y } = useMouse()

    // is user prefers dark theme
    const isDark = usePreferredDark()

    // persist state in localStorage
    const store = useLocalStorage(
      'my-storage', 
      {
        name: 'Apple',
        color: 'red',
      },
    )

    return { x, y, isDark, store }
  }
})
```
## 最佳实践
VueUse 中的大多数函数都会返回一个refs 对象，您可以使用ES6 的对象解构语法来获取
```
import { useMouse } from '@vueuse/core'
// "x" and "y" are refs
const { x, y } = useMouse()
console.log(x.value)
const mouse = useMouse()
console.log(mouse.x.value)
```
也可以用作对象属性样式，使用reactive()
```
import { reactive } from 'vue'
import { useMouse } from '@vueuse/core'
const mouse = reactive(useMouse())
// "x" and "y" will be auto unwrapped, no `.value` needed
console.log(mouse.x)
```

## 清理缓存
与 Vue 类似，watch当computed组件被卸载时会被释放，VueUse 的函数也会自动清理副作用。
> 例如，useEventListener将removeEventListener在组件卸载时调用
所有 VueUse 函数都遵循这个约定。
```
// will cleanup automatically
useEventListener('mousemove', () => {})
```
更多处理方式参考官网 https://vueuse.org/guide/best-practice.html

