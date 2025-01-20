<template>
  <div>
    <div class="u_1755840241 dmRespRow fullBleedChanged fullBleedMode hasExtraLayerOverlay relativePos" id="1755840241" data-video-bg="eyJzcmMiOiJodHRwczovL3ZpZC5jZG4td2Vic2l0ZS5jb20vYWUyNTk4MjMvdmlkZW9zLzV2OUo4T3VyUkE2Zjg0QWlxSlQ0X0FxdWFtYXJlK29jdHVicmUtdi5tcDQiLCJpZCI6Imh0dHBzOi8vdmlkLmNkbi13ZWJzaXRlLmNvbS9hZTI1OTgyMy92aWRlb3MvNXY5SjhPdXJSQTZmODRBaXFKVDRfQXF1YW1hcmUrb2N0dWJyZS12Lm1wNCIsInByb3ZpZGVyIjoiY2RuIiwiZW1iZWQiOiJodHRwczovL3ZpZC5jZG4td2Vic2l0ZS5jb20vYWUyNTk4MjMvdmlkZW9zLzV2OUo4T3VyUkE2Zjg0QWlxSlQ0X0FxdWFtYXJlK29jdHVicmUtdi5tcDQiLCJyYXRpbyI6MC41NjI1LCJ0aHVtYm5haWwiOiJodHRwczovL2lycC5jZG4td2Vic2l0ZS5jb20vYWUyNTk4MjMvZG1zM3JlcC9tdWx0aS81djlKOE91clJBNmY4NEFpcUpUNF9BcXVhbWFyZStvY3R1YnJlLnYyLjAwMDAwMDAuanBnIiwic3VwcG9ydEJnT25Nb2JpbGUiOnRydWUsInN1cHBvcnRCZ0xvb3AiOnRydWUsInBvc3RlciI6Imh0dHBzOi8vaXJwLmNkbi13ZWJzaXRlLmNvbS9hZTI1OTgyMy9kbXMzcmVwL211bHRpLzV2OUo4T3VyUkE2Zjg0QWlxSlQ0X0FxdWFtYXJlK29jdHVicmUudjIuMDAwMDAwMC5qcGcifQ==" data-video-bg-mobile="true" data-video-init="true">
       <div class="videobgwrapper video-ssr" data-ratio="0.5625">
         <video autoplay="autoplay" playsinline="playsinline" muted="muted" loop="loop" class="videobgframe" poster="https://lirp.cdn-website.com/ae259823/dms3rep/multi/opt/5v9J8OurRA6f84AiqJT4_Aquamare+octubre.v2.0000000-1920w.jpg" src="https://vid.cdn-website.com/ae259823/videos/5v9J8OurRA6f84AiqJT4_Aquamare+octubre-v.mp4" style="object-position: 50% 50%" id="videobgframe-1755840241">

         </video> 
    </div>    
</div> 



    <div ref="player">
      <div class="cta-contenedor">
        <h3>Bienvenidos al Hotel Raffles</h3>
        <p>Descubre nuestras habitaciones de lujo y disfruta de una experiencia inolvidable.</p>
        <div class="q-pa-md q-gutter-sm">
          <q-btn v-for="filter in backdropFilterList" :key="filter.label" color="primary" :label="filter.label" no-caps
            @click="filter.onClick" />

          <q-dialog v-model="dialog" :backdrop-filter="backdropFilter">
            <q-card>
              <q-card-section class="row items-center q-pb-none text-h6">
                <h4> Reservar una Habitación</h4>

                <div id="reservacion">
                  <div class="reserva">
                    <label for="nombre">Nombre</label><br>
                    <input type="text" name="" id="" placeholder="Ingrese Nombre">
                  </div>
                  <div class="reserva">
                    <label for="Apellido">Apellido</label><br>
                    <input type="text" name="" id="" placeholder="Ingrese el Apellido ">
                  </div>

                  <div class="reserva">
                    <label for="email">Email</label><br>
                    <input type="email" name="" placeholder="Ingrese su Email" id="">
                  </div>

                  <div class="reserva">
                    <label for="telefono">Telefono</label><br>
                    <input type="text" name="" placeholder="Ingrese su numero de telefono">
                  </div>

                  <div class="reserva">
                    <label for="Habitacion">Tipo de Habitación</label><br>
                    <select name="" id="" placeholder="tipo">
                      <option value="Habitación State Room con cama king size"> Habitación State Room con cama king size
                      </option>
                      <option value="Habitación State con 2 camas individuales">Habitación State con 2 camas
                        individuales</option>
                      <option value="Habitación State Room con vistas a la piscina y cama king size">Habitación State
                        Room con vistas a la piscina y cama king size</option>
                      <option value="Habitación State Room con vistas a la piscina y cama king size">Habitación State
                        Room con vistas a la piscina y cama king size</option>
                      <option value="Habitación Landmark con cama king size">Habitación Landmark con cama king size
                      </option>
                      <option value="Habitación Landmark con 2 camas individuales">Habitación Landmark con 2 camas
                        individuales</option>
                      <option value="Habitación Landmark con vistas a la piscina y cama king size">Habitación Landmark
                        con vistas a la piscina y cama king size</option>
                      <option value="Habitación Landmark con vistas a la piscina y 2 camas individuales">Habitación
                        Landmark con vistas a la piscina y 2 camas individuales</option>
                    </select>
                  </div>
                  <div class="reserva">
                    <label for="fecha">Fecha de llegada</label><br>
                    <input type="date" name="" id="">
                  </div>

                  <div class="reserva">
                    <label for="fecha">Fecha de salida</label><br>
                    <input type="date" name="" id="">

                  </div>
                </div>
              </q-card-section>

              <q-card-actions align="right">
                <q-btn flat label="Close" color="primary" v-close-popup />
                <q-btn color="primary" label="Reservar" class="q-mt-md">
                </q-btn>

              </q-card-actions>
            </q-card>
          </q-dialog>

        </div>
        <router-link to="/habitaciones" class="link">Explora nuestras habitaciones</router-link>
      </div>
    </div>


    <div class="servicios">
      <h2>Servicios Destacados</h2>
      <p>Aquamare Hotel cuenta con los espacios más exclusivos para que disfrutes al máximo tu estadía. Disfruta de
        nuestra piscina ubicada en lo más alto del hotel rodeado de las mejores vistas del mar. Deléitate con la mejor gastronomía de la
        región en nuestro restaurante Varka. Descubre nuestro fitness center, Market y mucho más.</p>

      <div class="Servicios-Destacados">
        <div class="cardServicio"
          style="background-image: url('https://lirp.cdn-website.com/ae259823/dms3rep/multi/opt/hotel-aquamare-espacios-piscina-04+%281%29-1920w.jpg');">
          <div class="infcard">
            <h4>Piscina</h4>
            <p>Disfruta de nuestra piscina de agua cristalina y relájate bajo el sol.</p>
            <button> <router-link class="text" to="/Servicios">VER MAS</router-link> </button>
          </div>

        </div>


        <div class="cardServicio"
          style="background-image: url('https://lirp.cdn-website.com/ae259823/dms3rep/multi/opt/DSC08048+%281%29-1920w.jpg');">
          <div class="infcard">
            <h4>Restaurante</h4>
            <p>Saborea platos gourmet preparados por chefs de renombre.</p>
            <button> <router-link class="text" to="/Servicios">VER MAS</router-link> </button>
          </div>
        </div>

        <div class="cardServicio"
          style="background-image: url('https://res.cloudinary.com/logicaghl/image/upload/w_600,h_720,dpr_3,g_auto,c_fill,q_70,f_auto/GHL_Capital_Spa_1_a0ccff4ee1.jpg');">
          <div class="infcard">
            <h4>Spa</h4>
            <p>Relájate y rejuvenece con nuestros tratamientos de spa de clase mundial.</p>
            <button> <router-link class="text" to="/Servicios">VER MAS</router-link> </button>
          </div>
        </div>
      </div>

    </div>


  </div>



</template>

<script setup>
import { ref } from 'vue'
const dialog = ref(false)
const backdropFilter = ref(null)
const list = [
  'Reservar ahora',

]

const backdropFilterList = list.map(filter => ({
  label: filter,
  onClick: () => {
    backdropFilter.value = filter
    dialog.value = true
  }
}))


</script>

<style>
/* body{
  background-color: rgb(239, 218, 145);
} */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.videobgwrapper {
  width: 100%; /* Ajusta este valor según el tamaño deseado */
  margin: 0 auto; /* Centra el video horizontalmente */

}

.videobgframe {
  width: 100%;
  object-fit: cover;
  height: 550px;
}

.cta-contenedor {
  text-align: center;
  /* margin-top: 50px; */
  background-color: rgb(11, 10, 10);
  padding: 2%;
  width: 100%;
  color: white;
  font-family: cursive;
}

.cta-contenedor p {
  font-size: 16px;
  width: 90%;
  margin: 0 auto;
}

.cta-button {
  background-color: #007bff;
  color: #fff;
  padding: 10px 20px;
  font-size: 16px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-top: 20px;
  font-family: cursive;
}

.link {
  color: #007bff;
  text-decoration: none;
  margin-top: 10px;
  display: inline-block;
  font-family: cursive;
}

.bienvenida {
  background-color: rgba(0, 0, 0, 0.746);
  padding: 2%;
  color: white;
  width: 50%;
  font-size: 20px;
  font-family: cursive;
}

.servicios {
  display: grid;
  justify-content: center;
  text-align: center;
  margin-top: 90px;
  margin-bottom: 50px;
  
}
.servicios p{
  width: 50%;
  display: flex;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 50px;
  font-family: cursive;
}

.servicios h2 {
  padding-bottom: 25px;
  font-family: cursive;

}

.Servicios-Destacados {
  display: grid;
  grid-template-columns: repeat(3,1fr);
  gap: 20px;
  width: 70%;
 align-items: center;
 justify-items: center;
 margin: 0 auto;


}

/* width: 20%; */

.cardServicio {
  width: 100%;
  background-size: 100%;
  background-repeat: no-repeat;
  border: 1px solid black;
  color: white;
  padding: 2%;
  border-radius: 20px;
  box-shadow: 1px 1px 10px;
  align-content: center;
  height: 310px;
}

button {
  display: inline-block;
  background-color: #121556;
  color: white;
  padding: 2%;
  width: 40%;

}

.text {
  text-decoration: none;
  color: white;
}



.reserva {
  padding-bottom: 20px;

}

.reserva input,
select {
  width: 100%;
  height: 35px;
}

#reservacion {
  display: grid;
  justify-content: center;
  margin-right: auto;
  margin-left: auto;
}
@media (min-width:1024px) and (max-width:1160px){
  .Servicios-Destacados{
    width: 90%;
  }

}
@media (max-width:800px){
  
  .Servicios-Destacados {
  display: grid;
  grid-template-columns: repeat(2,1fr);
  justify-items: center;
  align-items: center;
  
}
}
@media (max-width:500px){
  .Servicios-Destacados{
    
    display: grid;
    grid-template-columns: repeat(1,1fr);
    width: 90%;
  }

  .servicios h2{
   font-size: 50px;
   display: flex;
   margin: 0 auto;
  }
  .servicios p, h2{
      width: 90%;
    }
}
</style>