import { markdownConfig } from './plugins/markdown-plugin';
import sidebar from './sidebar.config'
import nav from './nav.config'

const config = {
  base: '/',
  outDir: '../dist',
  title: "🔨  wiki",
  description: "Web开发文档",
  lang: "en-US",
  appearance: true,
  head: [
      [
        'link',
        {
          rel: 'shortcut icon',
          href: '/',
          type: 'image/x-icon',
        },
      ],
  ],
  themeConfig: {
    siteTitle: 'Web开发文档',
    logo: "https://resource.cxaone.cn/cxaone2/media/c289dcb0/b490e85a/bb96cf7e/8b5cc542/c289dcb0b490e85abb96cf7e8b5cc542.svg",
    // 展示搜索框
    algolia: {
      appKey: '',
      indexName: '',
      searchParameters: {
        faeFilters: ['tags:guide,api']
      }
    },
    nav,
    sidebar
  },
  markdown: {
    config: markdownConfig,
    // config: (md) => {
    // // 添加DemoBlock插槽
    // const { demoBlockPlugin } = require('vitepress-theme-demoblock')
    // md.use(demoBlockPlugin)
    // },
    // lineNumbers: true
  }, 
}
export default config