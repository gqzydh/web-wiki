# node_modules

## 修改node_modules里的包
1. 安装
` npm i patch-package -D `
2. 设置
在 package.json 中设置postinstall
```
  "scripts": {   
  "postinstall": "patch-package" 
}
```
3. 使用
  - 1. 修改node_modules的包内容后
  - 2. 执行 ` npx patch-package lamejs`
  - 3. 通过git推到远程仓库，这样其他小伙伴也可以用了

>  执行该命令后会在项目根目录中自动创建一个 patches 文件夹，该文件夹中就会出现一个 package-name+version.patch 的补丁文件
3. 测试
手动删除项目中的node_modules文件（强制删除node_modules文件夹：rimraf node_modules），并重新执行npm install命令安装node_modules依赖包。安装成功后查看你之前修改的 node_modules 依赖包中的文件，查看你修改的代码是否依然存在，如果之前修改代码依然存在即表明补丁文件已经生效，如果你之前修改的代码不存在即表明补丁文件没有生效。

