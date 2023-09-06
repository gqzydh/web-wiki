# 动画

### useInterval
计数器，每隔一段时间，响应式数器增加
```
<script setup lang="ts">
import { useInterval } from '@vueuse/core'
const counter = useInterval(200)
</script>

<template>
  <div>
    <p>Interval fired: {{ counter }}</p>
  </div>
</template>
```
useIntervalFn
wrapper for setInterval with controls
带有控件的 setInterval 的包装

useNow
reactive current Date instance
响应式当前 Data 实例

useRafFn
call function on every requestAnimationFrame
在每个requestAnimationFrame上调用函数

useTimeout
update value after a given time with controls
使用控件在给定时间后更新值

useTimeoutFn
wrapper for setTimeout with controls
带有控件的setTimeout的包装

useTimestamp
reactive current timestamp
响应式当前时间戳，实时更新

useTransition
transition between values
值之间缓和动画