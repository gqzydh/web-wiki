# 其他

## sanitizeHTML()
[跨站点脚本 (XSS) 攻击](https://developer.mozilla.org/en-US/docs/Glossary/Cross-site_scripting)，这是一种在大多数网站上都会发生的攻击。例如，当提交表单时，攻击者可能会尝试发送恶意脚本来侵入系统。为了防止这种情况发生在你的网站表单上，您可以使用下面这个方便的功能来“清理”脚本代码。
```
const sanitizeHTML = (str) => {
  const div = document.createElement("div");
  div.textContent = str;
  return div.innerHTML;
};
```
> `sanitizeHTML("<h1>Hello, World!</h1>");`   // 输出: ` "&lt;h1&gt;Hello, World!&lt;/h1&gt;" `

**说明：** 与 innerHTML，textContent不同的是,函数不会将字符串解析为 HTML，而是把innerText变为仅显示“元素内容”的元素。而且，使用[textContent](https://developer.mozilla.org/en-US/docs/Web/API/Node/textContent#differences_from_innerhtml)可以防止XSS攻击。- MDN 文档

## localStorage
经常会使用localStorage来将特定数据保存在用户的计算机内存中。但是在获取和设置本地缓存时，你必须使用 JSONparse()和stringify()方法来是数据符合localStorage的规则。那我们能不能封装一个函数让我们更轻松地使用localStorage呢？
```
const storage = {
//获取本地缓存的值
  get: (key, defaultValue = null) => {
    const value = localStorage.getItem(key);
    return value ? JSON.parse(value) : defaultValue;
  },
//设置本地缓存
  set: (key, value) => localStorage.setItem(key, JSON.stringify(value)),
// 移除本地缓存中某个指定的值
  remove: (key) => localStorage.removeItem(key),
 //清除所有的本地缓存
  clear: () => localStorage.clear(),
};
```
> storage.set("motto", "Eat, Sleep, Code, Repeat");

> storage.get("motto");
