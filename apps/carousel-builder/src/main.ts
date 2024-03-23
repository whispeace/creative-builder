import './style.css'
import 'primeicons/primeicons.css'

import { createApp } from 'vue'
import PrimeVue from 'primevue/config'
import App from './App.vue'
import preset from '@/presets/preset'

const app = createApp(App)

app.use(PrimeVue, {
  unstyled: true,
  pt: preset,
})

app.mount('#app')
