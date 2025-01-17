import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue()],
  base: '/qimen-pub/',
  build: {
    outDir: 'docs',
    // 增加块大小警告限制
    chunkSizeWarningLimit: 1000,
    rollupOptions: {
      output: {
        // 简化文件名
        assetFileNames: 'assets/[name].[hash:8].[ext]',
        chunkFileNames: 'js/[name].[hash:8].js',
        entryFileNames: 'js/[name].[hash:8].js',
        // 优化代码分割策略
        manualChunks(id) {
          if (id.includes('node_modules')) {
            // 基础库分割
            if (id.includes('vue') || id.includes('vue-router')) {
              return 'vue-vendor'
            }
            // UI库分割
            if (id.includes('ant-design-vue') || id.includes('@ant-design')) {
              return 'ant-vendor'
            }
            // 其他依赖分割
            return 'vendors'
          }
          // 视图组件分割
          if (id.includes('src/views/')) {
            const name = id.split('views/')[1].split('.')[0].toLowerCase()
            return `view-${name}`
          }
        }
      }
    },
    minify: 'esbuild',
    sourcemap: false
  }
})
