<template>
<div>
  <div class="q-pa-md items-start q-gutter-md">
  <q-card class="my-card">
      <q-img src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/16/ff/9a/24/aquamare-beach-hotel.jpg?w=1200&h=-1&s=1">
        <div class="text-h2 absolute-bottom text-right" style="font-family: cursive;">
         Contactos
        </div>
      </q-img>
    </q-card>
    </div>
    
    <div id="DatosPersonales">
    <div id="InformacionContacto">
      <h4>Información de Contacto</h4>
       <p> <strong> Dirección: </strong> Calle Principal 123, Ciudad, País<br>
     <strong>Teléfono:</strong>  +123456789 <br>
     <strong>Correo Electrónico:</strong> info@hotel.com <br>
     <strong>Horarios de Atención:</strong> Lunes a Viernes de 9:00am a 5:00pm
      </p>
    </div>

<div id="Formulario">

  <h4>Formulario de Contactos</h4> <br>
  <div id="datos">
  <label for="name">Nombre:</label><br>
  <input type="text" name="" label="In" id="">
  </div>

  <!-- <div id="datos">
  <label for="name">Apellido:</label><br>
  <input type="text" name="" label="In" id=""> 
  </div>

  <div id="datos">
  <label for="name">Numero de telefono:</label><br>
  <input type="text" name="" label="In" id="">
  </div>

  <div id="datos">
  <label for="name">Correo Electrónico:</label><br>
  <input type="text" name="" label="In" id="">
 </div> -->

  <div id="datos">
  <label for="name">Mensaje:</label><br>
  <textarea id="message" ></textarea>
  </div>
    <q-btn push color="primary" label=" Enviar" />
    </div>
  </div>


  <div id="map" ></div>
</div>
</template>

<script setup>
import { ref } from 'vue'
import { onMounted } from 'vue'
import L from 'leaflet'
import 'leaflet/dist/leaflet.css'

onMounted(() => {
  const map = L.map('map').setView([1.2946, 103.8545], 13);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  lang: 'es'
}).addTo(map);

L.marker([1.2946, 103.8545]).addTo(map)
  .bindPopup('Hotel Raffles Singapur')
  .openPopup();
});


</script>

<style>
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}


#InformacionContacto{
  width: 100%;
}

#InformacionContacto p{
  margin-top: 20px;
  font-size: 20px;

  line-height:35px;
}
#Formulario{
  width: 100%;
  font-family: cursive;
  font-weight: 900;
}

#Formulario button{
width: 30%;
font-size: 20px;
}
h4 {
  font-family: cursive;
}
#DatosPersonales{
  display: flex;
  gap: 10%;
  width: 90%;
  margin-top: 30px;
  justify-content: center;
  justify-items: center;
  margin-left: auto;
  margin-right: auto;
  padding-bottom: 50px;
}
#datos{
margin-bottom: 20px;


}
#datos input{
  width: 100%;
  height: 40px;
}
#datos textarea{
  width: 100%;
}

#map {
  height: 400px;
  width: 100%;

}
@media (max-width:500px){
  #DatosPersonales{
    flex-wrap: wrap;
  }
}
</style>


