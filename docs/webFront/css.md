# CSS

## 图片文字居中
` vertical-align: middle;`

## 文字不换行
`white-space: nowrap;`

## 超出显示省略号...
单行
```
overflow:hidden;
white-space: nowrap;
text-overflow: ellipsis;
-o-text-overflow:ellipsis;
<!--多行-->
overflow:hidden;
display: -webkit-box;
text-overflow: ellipsis;
-webkit-line-clamp: 3;
-webkit-box-orient: vertical;
```

## 阴影
```
text-shadow:2px 3px 1px #ccc;
box-shadow: 0 1px 1px rgba(0,0,0,.1)
```

## 解决图片5px间距
``` 
将其父元素的  font-size:0px
将 img 的样式增加  display:block
将 img 的样式增加  vertical-align:bottom
将父元素的样式增加  line-height:5px
```

## 修改输入框 placeholder 样式
```
input::-webkit-input-placeholder {
  color: #babbc1;
  font-size: 12px;
}
```
## :not 选择器
给最后一个元素， 添加下划线
```
li:not(:last-child) {
  border-bottom: 1px solid #ebedf0;
}
```
## caret-color 修改光标颜色
有时需要修改光标的颜色
```
.caret-color {
  width: 300px;
  padding: 10px;
  margin-top: 20px;
  border-radius: 10px;
  border: solid 1px #ffd476;
  box-sizing: border-box;
  background-color: transparent;
  outline: none;
  color: #ffd476;
  font-size: 14px;
  /* 关键样式 */
  caret-color: #ffd476;
}

.caret-color::-webkit-input-placeholder {
  color: #4f4c5f;
  font-size: 14px;
}
```

## flex 布局将元素智能地固定在底部
当内容不够时，按钮应该在页面底部。当有足够的内容时，按钮应该跟随内容。当遇到类似问题时，可以使用flex实现智能布局！
```
<div class="container">
  <div class="main">这里为内容</div>
  <div class="footer">按钮</div>
</div>

// css
.container {
  height: 100vh;
  /* 关键样式 */
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.main {
  /* 关键样式 */
  flex: 1;
  background-image: linear-gradient(
    45deg,
    #ff9a9e 0%,
    #fad0c4 99%,
    #fad0c4 100%
  );
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
}
.footer {
  padding: 15px 0;
  text-align: center;
  color: #ff9a9e;
  font-size: 14px;
}
```

## 去掉 type="number" 末尾的箭头
input 类型为 type="number" 的末尾会出现一个小箭头，但有时需要将其去掉，可以用一下样式
```
input {
  width: 300px;
  padding: 10px;
  margin-top: 20px;
  border-radius: 10px;
  border: solid 1px #ffd476;
  box-sizing: border-box;
  background-color: transparent;
  outline: none;
  color: #ffd476;
  font-size: 14px;
  caret-color: #ffd476;
  display: block;
}
input::-webkit-input-placeholder {
  color: #4f4c5f;
  font-size: 14px;
}
/* 关键样式 */
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
}
```

## outline:none 删除输入状态行
当输入框被选中时，默认会有一个蓝色的状态行，可以使用 outline:none 将其去掉

## 解决iOS滚动条卡住的问题
```
body,html{
  -webkit-overflow-scrolling: touch;
}
```
## 画三角形
```
.triangle {
  display: inline-block;
  margin-right: 10px;
  /* 基础样式 */
  border: solid 10px transparent;
}
/* 向下三角形 */
.triangle.bottom {
  border-top-color: #0097a7;
}
/* 向上三角形 */
.triangle.top {
  border-bottom-color: #b2ebf2;
}
/* 向左三角形 */
.triangle.left {
  border-right-color: #00bcd4;
}
/* 向右三角形 */
.triangle.right {
  border-left-color: #009688;
}
```

## 自定义选定的文本样式
```
::selection {
  color: #ffffff;
  background-color: #ff4c9f;
}
```

## 不允许选择的文本
```
user-select: none;
```

## filter:grayscale(1) 使页面处于灰色模式
一行代码将使页面处于灰色模式
```
body{
  filter: grayscale(1);
}
```