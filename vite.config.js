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
        // 确保所有文件都在 assets 目录下
        assetFileNames: (assetInfo) => {
          const info = assetInfo.name.split('.')
          let extType = info[info.length - 1]
          if (/\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/i.test(assetInfo.name)) {
            extType = 'media'
          } else if (/\.(png|jpe?g|gif|svg|bmp|webp)(\?.*)?$/i.test(assetInfo.name)) {
            extType = 'img'
          } else if (/\.(woff2?|eot|ttf|otf)(\?.*)?$/i.test(assetInfo.name)) {
            extType = 'fonts'
          }
          return `assets/${extType}/[name]-[hash][extname]`
        },
        chunkFileNames: 'assets/js/[name]-[hash].js',
        entryFileNames: 'assets/js/[name]-[hash].js',
        // 添加这个配置来处理代码分割
        manualChunks: {
          'vue': ['vue'],
          'vue-router': ['vue-router'],
          'ant-design-vue': ['ant-design-vue'],
          'vendor': ['@ant-design/icons-vue']
        }
      }
    },
    // 使用 esbuild 压缩
    minify: 'esbuild',
    sourcemap: false,
    // 确保正确处理静态资源
    assetsInlineLimit: 4096,
    cssCodeSplit: true,
    modulePreload: true
  }
})
