<template>
<div>
  <div class="q-pa-md row items-start q-gutter-md">
  <q-card class="my-card">
      <q-img src="https://m.ahstatic.com/is/image/accorhotels/aja_p_5227-41?qlt=82&wid=1920&ts=1701465409526&dpr=off">
        <div class="text-h2 absolute-bottom text-right">
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
<!-- 
      <div class="map-container">
    <GMapMap
      :center="center"
      :zoom="15"
      style="width: 100%; height: 400px"
    >
      <GMapMarker :position="center" />
    </GMapMap>
  </div> -->
    </div>
<div id="Formulario">

  <h2>Formulario</h2> <br>
  <div id="datos">
  <label for="name">Nombre:</label><br>
  <input type="text" name="" label="In" id="">
  </div>

  <div id="datos">
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
 </div>

  <div id="datos">
  <label for="name">Mensaje:</label><br>
  <textarea id="message" ></textarea>
  </div>
  <!-- <div class="q-pa-md q-gutter-sm"> -->
    <q-btn push color="primary" label=" Enviar" />
  <!-- </div> -->
    </div>
  </div>
</div>
</template>

<script setup>
import { ref } from 'vue';
// import { GMapMap, GMapMarker } from '@fawmi/vue-google-maps';
// const center = ref({ lat: -34.397, lng: 150.644 });

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
  /* margin-bottom: 20px; */
  line-height:35px;
}
#Formulario{
  width: 100%;
}

#Formulario button{
width: 20%;
/* padding:1%; */
font-size: 20px;


}
#DatosPersonales{
  display: flex;
  /* gap: 60px; */
  width: 80%;
  margin-top: 30px;
  justify-content: center;
  justify-items: center;
  margin-left: auto;
  margin-right: auto;
}
#datos{
margin-bottom: 20px;


}
#datos input{
  width: 80%;
  height: 40px;
}
#datos textarea{
  width: 80%;
}
.contact-page {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
}
</style>

