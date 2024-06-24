<template>
<div>


    


<q-parallax
       src="https://m.ahstatic.com/is/image/accorhotels/aja_p_5629-26?wid=1920"
        :height="500">
 <!-- <div  class="bienvenida"  >
    <p>"Bienvenido a nuestro exclusivo santuario de bienestar y relajación, donde el ritmo frenético del mundo exterior se desvanece ante la tranquilidad de nuestro entorno, y cada momento se convierte en una oportunidad para rejuvenecer cuerpo, mente y alma."</p>
  </div> -->

<div ref="player">
    <div class="cta-contenedor">
      <h2>Bienvenidos al Hotel Raffles</h2>
      <p>Descubre nuestras habitaciones de lujo y disfruta de una experiencia inolvidable.</p>
      <div class="q-pa-md q-gutter-sm">
    <q-btn
      v-for="filter in backdropFilterList"
      :key="filter.label"
      color="primary"
      :label="filter.label"
      no-caps
      @click="filter.onClick"
    />

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
            <option value="Habitación State Room con cama king size"> Habitación State Room con cama king size</option>
             <option value="Habitación State con 2 camas individuales">Habitación State con 2 camas individuales</option>
             <option value="Habitación State Room con vistas a la piscina y cama king size">Habitación State Room con vistas a la piscina y cama king size</option>
             <option value="Habitación State Room con vistas a la piscina y cama king size">Habitación State Room con vistas a la piscina y cama king size</option>
             <option value="Habitación Landmark con cama king size">Habitación Landmark con cama king size</option>
             <option value="Habitación Landmark con 2 camas individuales">Habitación Landmark con 2 camas individuales</option>
             <option value="Habitación Landmark con vistas a la piscina y cama king size">Habitación Landmark con vistas a la piscina y cama king size</option>
             <option value="Habitación Landmark con vistas a la piscina y 2 camas individuales">Habitación Landmark con vistas a la piscina y 2 camas individuales</option>
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
</q-parallax>


<div class="servicios">
  <h2>Servicios Destacados</h2>
 <div class="Servicios-Destacados">
  <div class="cardServicio">
<img src="https://cf.bstatic.com/xdata/images/hotel/max1024x768/271568218.jpg?k=414d4487583f2fda7914e3da868dc41af10feb5320fb1ad310537e46d63bb6e1&o=&hp=1" alt="">
<h4>Piscina</h4>
<p>Disfruta de nuestra piscina de agua cristalina y relájate bajo el sol.</p>
  </div>
  
  <div class="cardServicio">
<img src="https://m.ahstatic.com/is/image/accorhotels/aja_p_5629-41?wid=1920" alt="">
<h4>Restaurante</h4>
<p>Saborea platos gourmet preparados por chefs de renombre.</p>
  </div>

  <div class="cardServicio">
<img src="https://m.ahstatic.com/is/image/accorhotels/aja_p_5195-52?wid=1920" alt="">
<h4>Spa</h4>
<p>Relájate y rejuvenece con nuestros tratamientos de spa de clase mundial.</p>
  </div>


 </div>

</div>

    
  </div>



</template>

<script setup>
import {ref} from 'vue'
const dialog = ref(false)
const backdropFilter = ref(null)
const list = [
      'Reservar ahora',

    ]

    const  backdropFilterList=list.map(filter => ({
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
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

.cta-contenedor {
  text-align: center;
  margin-top: 50px;
  background-color: rgba(11, 10, 10, 0.763);
  padding: 2%;
  color: white;
}
.cta-contenedor p{
  font-size: 20px ;
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
}

.link {
  color: #007bff;
  text-decoration: none;
  margin-top: 10px;
  display: inline-block;
}
.bienvenida{
  background-color: rgba(0, 0, 0, 0.746);
  padding: 2%;
  color: white;
width: 50%; 
font-size: 20px;
}
.servicios{
  display:grid;
  justify-content: center;
   text-align: center;
   margin-top: 30px;
   margin-bottom: 50px;
}
.servicios h2{
padding-bottom: 25px;

}
.Servicios-Destacados{
display:flex;
gap:20px;
width: 70%;
align-content: center;
margin-left: auto;
margin-right: auto;


}
  /* width: 20%; */

.cardServicio{
width: 100%;
 border: 1px solid black;
 
 
}
.cardServicio{
  padding: 2%;
  border-radius: 20px;
  box-shadow: 1px 1px 10px;
}
.cardServicio img{
  width: 100%;
  height: 200px;
 
}
.reserva{
  padding-bottom: 20px;

}
.reserva input, select{
  width: 100%;
  height: 35px;
}
#reservacion{
  display: grid;
  justify-content: center;
  margin-right: auto;
  margin-left: auto;
  
 
}
</style>