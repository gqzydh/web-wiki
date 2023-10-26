# UnoCSS

官网：[https://uno.antfu.me/](https://uno.antfu.me/)
具有高性能且极具灵活性的即时原子化 CSS 引擎

## 安装
```
npm i -D unocss @unoCSS/preset-uno @unoCSS/preset-attributify

// 如果需要用 icons 图标
npm i -D @unoCSS/preset-icons
```
## 配置
新建 unocss.config.ts
```
import { defineConfig, presetAttributify, presetUno } from "unocss"

export default defineConfig({
  /** 排除 */
  exclude: ["node_modules"],
  /** 预设 */
  presets: [
    /** 属性化模式 & 无值的属性模式 */
    presetAttributify(),
    /** 默认预设 */
    presetUno()
  ],
  /** 自定义规则 */
  rules: [["uno-padding-20", { padding: "20px" }]],
  /** 自定义快捷方式 */
  shortcuts: {
    "uno-wh-full": "w-full h-full",
    "uno-flex-center": "flex justify-center items-center",
    "uno-flex-x-center": "flex justify-center",
    "uno-flex-y-center": "flex items-center"
  }
})
```
#### vite.config.ts
```
import UnoCSS from "unocss/vite"

export default () => {
    /** Vite 插件 */
    plugins: [
      /** UnoCSS */
      UnoCSS()    
    ]
}
```
## main.ts
```
// uno.css
import "uno.css"
```
## 使用
```
<template>
  <div h-full uno-padding-20>
    <div h-full text-center flex select-none all:transition-400>
      <div ma>
        <div text-5xl fw100 animate-bounce-alt animate-count-infinite animate-1s>UnoCSS</div>
        <div op30 dark:op60 text-lg fw300 m1>具有高性能且极具灵活性的即时原子化 CSS 引擎</div>
        <div m2 flex justify-center text-lg op30 dark:op60 hover="op80" dark:hover="op80">
          <a href="https://antfu.me/posts/reimagine-atomic-css-zh" target="_blank">推荐阅读：重新构想原子化 CSS</a>
        </div>
      </div>
    </div>
    <div absolute bottom-5 right-0 left-0 text-center op30 dark:op60 fw300>
      <div class="i-ion-accessibility" text-center />
      该页面是一个 UnoCSS 的使用案例，其他页面依旧采用 Scss
    </div>
    <div>
    </div>
  </div>
</template>
```

#### 使用px单位

【实现 w-100 = width: 100px】

方法一：
修改html 的 font-size 修改成 4px
```
font-size = 4px;
//w-1 就是 width: 1px; w-100 就是 width: 100px
```

方法二（推荐）
使用插件 `@unocss/preset-rem-to-px` ，这个插件的作用就是将 unocss 的预设单位转换成px
```
npm i @unocss/preset-rem-to-px -D
```
##### unocss.config.js
```
import { defineConfig, presetAttributify, presetUno } from 'unocss'
import presetRemToPx from '@unocss/preset-rem-to-px'

export default defineConfig({
  presets: [
    presetUno(),
    presetAttributify(),
    presetRemToPx({
      baseFontSize: 4,
    }),
  ],
})
```

### 预设(presets)
unoCSS官方默认提供了三种预设
```
1. @unoCSS/preset-uno 工具类预设
2. @unoCSS/preset-attributify 属性化预设
3. @unoCSS/preset-icons 图标类icon支持
```

### 安装
```
pnpm i -D unoCSS @unoCSS/preset-uno @unoCSS/preset-attributify @unoCSS/preset-icons
```

### 配置
在vite.config.ts中引入，unoCSS作为插件在vite中使用
```
// vite.config.ts
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import UnoCSS from 'unoCSS/vite'
import { presetUno, presetAttributify, presetIcons } from 'unoCSS'

import transformerDirective from "@unoCSS/transformer-directives";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(),
  UnoCSS({
    presets: [presetUno(), presetAttributify(), presetIcons()],
    transformers: [transformerDirective()],
  })],
})
```
### 使用
```
<div w-20 h-20 bg-blue  ml-3 ms-2 ma4 mt-10px />
```


### @unoCSS/preset-icons
UnoCSS提供了图标的预设，它是纯CSS的图标，可以选择[Icones](https://icones.js.org/) 或 [Iconify](https://icon-sets.iconify.design/)作为图标源使用，同样也支持自定义icon，本身实现按需加载。

安装
```
// 安装全部，大概140多M，开发时会安装，打包只会使用用到的图标
pnpm i -D @unoCSS/preset-icons @iconify-json

// 安装某个图标集合
pnpm i -D @unoCSS/preset-icons @iconify-json/icon集合id(例如icon-park-twotone）
```
[icones.js.org/collection/](https://icones.js.org/collection/icon-park-twotone) 中的 icon-park-twotone 即为这个Icon集合 id

以[Icones](https://icones.js.org/)  集合为例，复制i开头或者点击UnoCSS得到类名。

```
<div class="i-icon-park-twotone-winking-face"> </div>
```
直接设置color值即可，属性化模式示例，color-blue
```
<div i-icon-park-twotone-winking-face colo text-size-100px  color-blue> </div>
```
### 插件(plugins)
`@unoCSS/transformer-directives` 官方提供了这个插件实现在style中使用apply指令写原子化CSS
```
...
export default defineConfig({
  plugins: [
    vue(),
    UnoCSS({
      ...
      transformers: [transformerDirective()]
    })
  ]
});
```
### 规则(rules)
除了官方默认的工具类外，支持自定义CSS规则，配置rules数组即可，支持方式1和方式2(正则匹配)两种。
```
// vite.config.ts
export default defineConfig({
  plugins: [
    vue(),
    UnoCSS({
      ...
      rules: [
        // 方式1
        [ 
          "p-a", 
          {  
            position: "absolute",
          }
        ],
        // 方式2
        [/^m-(\d+)$/, ([, d]) => ({ margin: `${d / 4}px` })]
      ],

    })
  ]
});
```
#### unocss.config.ts
```
import { defineConfig, presetAttributify, presetUno } from "unocss"

export default defineConfig({
  /** 排除 */
  exclude: ["node_modules"],
  /** 预设 */
  presets: [
    /** 属性化模式 & 无值的属性模式 */
    presetAttributify(),
    /** 默认预设 */
    presetUno()
  ],
  /** 自定义规则 */
  rules: [["uno-padding-20", { padding: "20px" }]],
  /** 自定义快捷方式 */
  shortcuts: {
    "uno-wh-full": "w-full h-full",
    "uno-flex-center": "flex justify-center items-center",
    "uno-flex-x-center": "flex justify-center",
    "uno-flex-y-center": "flex items-center"
  }
})
```


参考 Css-> UnoCSS
