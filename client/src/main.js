import { createApp } from 'vue'
import App from './App.vue'
import {Quasar} from 'quasar'
import {router} from '@/router'
// Import icon libraries
import '@quasar/extras/roboto-font/roboto-font.css'
import '@quasar/extras/material-icons/material-icons.css'
import '@quasar/extras/fontawesome-v6/fontawesome-v6.css'

// Import Quasar css
import 'quasar/dist/quasar.css'

createApp(App)
  .use(router)
  .use(Quasar)
  .mount('#app')
