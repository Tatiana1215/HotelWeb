import { createApp } from 'vue'
// import './style.css'
import App from './App.vue'
import { Quasar } from 'quasar'
import '@quasar/extras/material-icons/material-icons.css'
import 'quasar/src/css/index.sass'
import { router } from './router/routes'
// import  VueGoogleMaps from '@fawmi/vue-google-maps';

const myApp = createApp(App)

myApp.use(Quasar, {
  plugins: {}, 
})

// myApp.use(VueGoogleMaps, {
//   load: {
//     key: 'YOUR_GOOGLE_MAPS_API_KEY', // Reemplaza con tu clave de API de Google Maps
//   },
// });

myApp.use(router)

myApp.mount('#app')
