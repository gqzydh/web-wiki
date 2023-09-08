# Ts函数

## Ts加密
> npm install crypto-js
> npm install --save @types/crypto-js

#### 创建配置文件
```
import CryptoJS from 'crypto-js'

export interface CrypotoType {
  encrypt: any
  decrypt: any
}

export default class Crypoto implements CrypotoType {
  key = CryptoJS.enc.Utf8.parse('123456789asdfghj') // 十六位十六进制数作为密钥
  iv = CryptoJS.enc.Utf8.parse('asdfghj123456789') // 十六位十六进制数作为密钥偏移量

  /* 加密 */
  encrypt (word: any) {
    const srcs = CryptoJS.enc.Utf8.parse(word)
    const encrypted = CryptoJS.AES.encrypt(srcs, this.key, { iv: this.iv, mode: CryptoJS.mode.CBC, padding: CryptoJS.pad.Pkcs7 })
    return encrypted.ciphertext.toString().toUpperCase()
  }

  /* 解密 */
  decrypt (word: any) {
    const encryptedHexStr = CryptoJS.enc.Hex.parse(word)
    const srcs = CryptoJS.enc.Base64.stringify(encryptedHexStr)
    const decrypt = CryptoJS.AES.decrypt(srcs, this.key, { iv: this.iv, mode: CryptoJS.mode.CBC, padding: CryptoJS.pad.Pkcs7 })
    const decryptedStr = decrypt.toString(CryptoJS.enc.Utf8)
    return decryptedStr.toString()
  }
}
```
####  使用
```
<script lang="ts">
import { defineComponent, onBeforeMount, reactive, toRefs } from 'vue'

// 引入
import Crypoto from '@/utils/CryptoJS'

export default defineComponent({
  setup(props, ctx) {
    // 挂载
    const cry: any = new Crypoto()

    onBeforeMount(() => {
      /* 简单类型 */
      // 加密
      const str = '123'
      const encryptStr = cry.encrypt(str)
      console.log('encryptStr', encryptStr)
      // 解密
      const decryptStr = cry.decrypt(encryptStr)
      console.log('decryptStr', decryptStr)

      /* 复杂类型 */
      // 加密
      const dataItem: any = {
        name: 'wzc',
        code: 'key',
      }
      const encryptData = cry.encrypt(JSON.stringify(dataItem))
      console.log('encryptData', encryptData)
      // 解密
      const decryptData = cry.decrypt(encryptData)
      console.log('decryptData', JSON.parse(decryptData))
    })
  },
})
</script>
```