import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import NaiveUI from './components/naive-ui'
import '@/styles/index.scss' // global css

import '@/router/permission'

const app = createApp(App)

app.use(store)
app.use(router)
app.use(NaiveUI)

app.mount('#app')
