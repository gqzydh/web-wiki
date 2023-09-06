# 状态

## createGlobalState
保持全局范围内的状态可在Vue实例之间重用
```
<script setup lang="ts">
import { stringify } from '@vueuse/docs-utils'
import { createGlobalState, useStorage } from '@vueuse/core'
const useState = createGlobalState(() =>
  useStorage('vue-use-locale-storage', {
    name: 'Banana',
    color: 'Yellow',
    size: 'Medium',
  }),
)
const state = useState()
const text = stringify(state)
</script>

<template>
  <div>
    <input v-model="state.name" type="text">
    <input v-model="state.color" type="text">
    <input v-model="state.size" type="text">

    <pre lang="yaml">{{ text }}</pre>
  </div>
</template>
```

## createInjectionState
创建可以注入组件的全局状态


## createSharedComposable
使可组合函数可用于多个Vue实例

## useAsyncState
api异步请求
```
import axios from 'axios'
import { useAsyncState } from '@vueuse/core'

const { state, isReady, isLoading } = useAsyncState(
  axios
    .get('https://jsonplaceholder.typicode.com/todos/1')
    .then(t => t.data),
  { id: null },
)
```

## useDebouncedRefHistory
防抖
```

```


## useLastChanged
-
records the timestamp of the last change
记录上次更改的时间戳

## useLocalStorage
-
reactive LocalStorage
反应式本地存储

## useManualRefHistory
-
manually track the change history of a ref when the using calls commit()
当using调用commit（）时，手动跟踪ref的更改历史记录

## useRefHistory
跟踪响应式数据（ref）的更改
```
<template>
  <p> 
    <button @click="undo"> 撤消 </button>
    <button @click="redo"> 重做 </button>
  </p>
  <textarea v-model="text"/>
  <ul>
    <li v-for="entry in history" :key="entry.timestamp">
      {{ entry }}
    </li>
  </ul>
</template>
<script setup>
import { ref } from 'vue'
import { useRefHistory } from '@vueuse/core'
const text = ref('')
const { history, undo, redo } = useRefHistory(text)
// 还可以深入跟踪反应对象并限制这样的历史条目的数量
//高级选项
<!-- const { history, undo, redo } = useRefHistory(text, {
  deep: true,
  capacity: 10,
}) -->
</script>
<style scoped>
  button {
    border: none;
    outline: none;
    margin-right: 10px;
    background-color: #2ecc71;
    color: white;
    padding: 5px 10px;;
  }
</style>
```

## useSessionStorage
-
reactive SessionStorage
反应式会话存储

## useStorage
-
reactive LocalStorage/SessionStorage
反应式LocalStorage/SessionStorage

## useStorageAsync
-
reactive Storage in with async support
具有异步支持的反应式存储

## useThrottledRefHistory
-
shorthand for useRefHistory with throttled filter
带节流过滤器的useRefHistory的简写