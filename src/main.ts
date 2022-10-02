import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import BalmUI from 'balm-ui' // Official Google Material Components
import 'balm-ui-css'
import './index.css'

const app = createApp(App)

app.use(store)
app.use(router)
app.use(BalmUI)
app.mount('#app')
