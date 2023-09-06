# Sensors（传感器）

## onClickOutside
关闭模态
onClickOutside检测在元素之外进行的任何点击，关闭任何模式或弹出窗口
```
<template>
  <button @click="open = true"> Open Popup </button>
  <div class="popup" v-if='open'>
    <div class="popup-content" ref="popup">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis aliquid autem reiciendis eius accusamus sequi, ipsam corrupti vel laboriosam necessitatibus sit natus vero sint ullam! Omnis commodi eos accusantium illum?
    </div>
  </div>
</template>
<script setup>
import { ref } from 'vue'
import { onClickOutside } from '@vueuse/core'
const open = ref(false) // state of our popup
const popup = ref() // template ref
// whenever our popup exists, and we click anything BUT it
onClickOutside(popup, () => {
  open.value  = false
})
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
  .popup {
    position: fixed;
    top: ;
    left: ;
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    background: rgba(, , , 0.1);
  }
  .popup-content {
    min-width: 300px;
    padding: 20px;
    width: 30%;
    background: #fff;
  }
</style>
```
onKeyStroke
-
listen for keyboard key being stroked
onLongPress
-
listen for a long press on an element
onStartTyping
-
fires when users start typing on non-editable elements
useBattery
-
reactive Battery Status API
useDeviceMotion
-
reactive DeviceMotionEvent
useDeviceOrientation
-
reactive DeviceOrientationEvent
useDevicePixelRatio
-
reactively track window.devicePixelRatio
useDevicesList
-
reactive enumerateDevices listing available input/output devices
useDisplayMedia
-
reactive mediaDevices.getDisplayMedia streaming
useElementByPoint
-
reactive element by point
useElementHover
-
reactive element's hover state
useFocus
-
reactive utility to track or set the focus state of a DOM element
useFocusWithin
-
reactive utility to track if an element or one of its decendants has focus
useFps
-
reactive FPS (frames per second)
useGeolocation
-
reactive Geolocation API
useIdle
-
tracks whether the user is being inactive
useInfiniteScroll
-
infinite scrolling of the element
useKeyModifier
-
reactive Modifier State
useMagicKeys
-
reactive keys pressed state
useMouse
-
reactive mouse position
useMousePressed
-
reactive mouse pressing state
useNavigatorLanguage
-
reactive navigator.language
useNetwork
-
reactive Network status
useOnline
-
reactive online state
usePageLeave
-
reactive state to show whether the mouse leaves the page
useParallax
-
create parallax effect easily
usePointer
-
reactive pointer state
usePointerSwipe
-
reactive swipe detection based on PointerEvents
useScroll
-
reactive scroll position and state
useScrollLock
-
lock scrolling of the element
useSpeechRecognition
-
reactive SpeechRecognition
useSpeechSynthesis
-
reactive SpeechSynthesis
useSwipe
-
reactive swipe detection based on TouchEvents
useTextSelection
-
reactively track user text selection based on Window.getSelection
useUserMedia
-
reactive mediaDevices.getUserMedia streaming

