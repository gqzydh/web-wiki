import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import vueJsx from '@vitejs/plugin-vue-jsx'
import { presetUno, presetAttributify, presetIcons } from "unocss";
// import Unocss from "unocss/vite";
import Unocss from "./config/unocss";

// https://vitejs.dev/config/

const rollupOptions = {

  external: ["vue", "vue-router"],
  output: {
    globals: {
      vue: "Vue",
    },
  },
};

export default defineConfig({
  server: {
    host: 'localhost', 
    port: 8099,
    open: true
  },
  plugins: [
    vue(),    // 添加JSX插件
    vueJsx({
      // options are passed on to @vue/babel-plugin-jsx
    }),
    // 添加UnoCSS插件
    // Unocss({
    //   presets: [presetUno(), presetAttributify(), presetIcons()],
    // })
    Unocss(),
  ],
  resolve: {
    alias: {
      '@': '/src/images/',  
    }
  },
  build: {
    rollupOptions,
    minify: false,
    cssCodeSplit: true,
    lib: {
      entry: "./src/entry.ts",
      name: "GarenUI",
      fileName: "smarty-ui",
      // 导出模块格式
      formats: ["esm", "umd", "iife"],
    },
  },
});