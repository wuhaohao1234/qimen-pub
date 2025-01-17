import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue()],
  base: '/qimen-pub/',
  build: {
    outDir: 'docs',
    rollupOptions: {
      output: {
        // 简化文件名
        assetFileNames: 'assets/[name].[hash:8].[ext]',
        chunkFileNames: 'js/[name].[hash:8].js',
        entryFileNames: 'js/[name].[hash:8].js',
        // 简化代码分割
        manualChunks(id) {
          if (id.includes('node_modules')) {
            if (id.includes('vue')) {
              return 'vue'
            }
            if (id.includes('ant-design-vue')) {
              return 'antd'
            }
            return 'vendor'
          }
        }
      }
    },
    minify: 'esbuild',
    sourcemap: false
  }
})
