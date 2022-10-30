import { createApp } from 'vue'
import App from './App.vue'

const app = createApp(App)

const {worker} = require('@/mocks/browser')
worker.start()

app.mount('#app')
