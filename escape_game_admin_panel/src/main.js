import './assets/tailwind_main.css'
import 'v-calendar/style.css'

import VCalendar from 'v-calendar'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(router)
app.use(VCalendar, {})

app.mount('#app')
