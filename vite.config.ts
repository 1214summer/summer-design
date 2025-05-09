import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
import { fileURLToPath } from 'url'
const __dirname = path.dirname(fileURLToPath(import.meta.url))

export default defineConfig({
    // 项目根目录，默认为当前工作目录
    root: path.resolve(__dirname, './src'),

    // 基础路径，用于部署在子路径时使用
    base: '/my-app/',

    // 开发服务器配置
    server: {
      // 指定开发服务器端口
      port: 3000,
      // 是否自动打开浏览器
      open: true,
      // 配置代理服务器，用于解决跨域问题
      proxy: {
        '/api': {
          target: 'http://localhost:8080', // 目标服务器地址
          changeOrigin: true, // 是否改变请求源
          rewrite: (path) => path.replace(/^\/api/, ''), // 重写请求路径
        },
      },
    },

    plugins: [react()],
      // 模块解析配置
      resolve: {
        // 配置路径别名
        alias: {
          '@': path.resolve(__dirname, './src'), // 将 @ 映射到 src 目录
        },
      },

    // CSS 配置
    css: {
      // 配置 CSS 预处理器选项
      preprocessorOptions: {
        scss: {
          // 全局注入 SCSS 变量
          additionalData: `@import "@/styles/index.scss";`,
        },
      },
    },

    // 环境变量配置
    envPrefix: 'VITE_', // 环境变量前缀，默认为 VITE_

      // 构建配置
    build: {
      // 指定输出目录
      outDir: path.resolve(__dirname, '../dist'),
      // 指定静态资源目录
      assetsDir: 'static',
      // 是否生成 sourcemap 文件
      sourcemap: true,
      // 是否压缩代码
      minify: 'terser', // 使用 terser 进行代码压缩
      // 配置 Rollup 选项
      rollupOptions: {
        // 配置外部依赖
        external: ['lodash'],
        // 配置输出格式
        output: {
          manualChunks: {
            // 将 lodash 单独打包
            lodash: ['lodash'],
          },
        },
      },
    },
})
