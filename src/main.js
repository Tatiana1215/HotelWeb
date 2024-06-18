import { createApp } from 'vue'
// import './style.css'
import App from './App.vue'
import { Quasar } from 'quasar'
import '@quasar/extras/material-icons/material-icons.css'
import 'quasar/src/css/index.sass'
import { router } from './router/routes'


const myApp = createApp(App)

myApp.use(Quasar, {
  plugins: {}, // import Quasar plugins and add here
})
myApp.use(router)
// Assumes you have a <div id="app"></div> in your index.html
myApp.mount('#app')
