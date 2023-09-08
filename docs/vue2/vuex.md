# Vuex

## this.$store.dispatch()、this.$store.commit()
存取方式的不同, 两个方法都是传值给vuex的mutation改变 state

#### dispatch: 异步操作
例如向后台提交数据，写法：this.store.dispatch(‘action方法名’,值)
```
 this.$store.dispatch('getlists',name)  // 存值
 this.$store.getters.getlists // 取值
```
#### commit: 同步操作
```
 this.$store.commit('changeValue',name)
 this.$store.state.changeValue
```