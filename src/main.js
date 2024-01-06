import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import zhCn from 'element-plus/es/locale/lang/zh-cn'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import axios from 'axios'
import vueAxios from 'vue-axios'
createApp(App).use(router).use(ElementPlus,{locale: zhCn,}).use(vueAxios,axios).mount('#app')
