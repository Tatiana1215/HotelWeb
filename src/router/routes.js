import Home from "../components/Home.vue"
import Contactos from "../components/PaginaContactos.vue"
import DeportesExtremos from "../components/PaginaDeportesExtremos.vue"
import Habitaciones from "../components/PaginaHabitaciones.vue"
import Servicios from "../components/PaginaServicios.vue"
import TipoChalet from "../components/Chalet.vue"
import {createRouter, createWebHashHistory} from "vue-router"


const  routes = [
    {path: "/Tipochalet", component : TipoChalet},
    {path:"/", component : Home},
    {path: "/Contactos", component : Contactos},
    {path: "/DeportesExtremos", component : DeportesExtremos},
    {path: "/Habitaciones", component : Habitaciones},
    {path: "/Servicios", component : Servicios},
    
    
]

export const router = createRouter({
    history:createWebHashHistory(),
    routes
})