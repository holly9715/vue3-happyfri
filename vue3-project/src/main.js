// import './assets/main.css'
import './style/common.less'
import './config/rem'
import './config/ajax'
//可以使用axios请求网络

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from "./router/index"

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
