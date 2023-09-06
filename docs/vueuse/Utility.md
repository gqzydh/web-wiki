# 实用工具

## useDebounceFn / useThrottleFn
防抖 / 节流
```
import { useThrottle , useDebounce } from '@vueuse/core'

const input = ref('')
const throttled = useThrottle(input, 1000, false)  // 延迟1s获取 input 的值

const debounced = useDebounce(input, 1000)
input.value = 'bar'
console.log(debounced.value)  // 延迟1s 更新input的值
```