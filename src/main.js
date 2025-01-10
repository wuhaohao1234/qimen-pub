import { createApp } from 'vue'
import App from './App.vue'
import router from './router' // 导入路由配置
import Antd from 'ant-design-vue'
import 'ant-design-vue/dist/reset.css'
import './style.css'

const app = createApp(App)

// 使用插件
app.use(Antd)
app.use(router)

app.mount('#app')
