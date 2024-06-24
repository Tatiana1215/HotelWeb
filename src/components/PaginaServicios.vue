<template>
<div>


     <div id="sevicioEspecial">
    <div  class="Descripcion">
 <h5>Descubre la Armonía Interior Donde el Cuerpo y el Espíritu se Encuentran</h5>
    <p>Explora nuestras lujosas instalaciones, diseñadas para proporcionarte el máximo 
        confort y relajación. Desde nuestras serenas salas de tratamiento hasta nuestras
         áreas de relajación con vistas impresionantes, cada rincón de nuestro spa está 
         pensado para tu bienestar.</p>
    </div>
    <div class="q-pa-md">
    <q-carousel
      swipeable
      animated
      v-model="slide"
      thumbnails
      infinite
      class="Spa"
    >
      <q-carousel-slide :name="1" img-src="https://m.ahstatic.com/is/image/accorhotels/aja_p_5195-52?wid=1920" />
      <q-carousel-slide :name="2" img-src="https://m.ahstatic.com/is/image/accorhotels/aja_p_5484-98?qlt=82&wid=1920&ts=1716777971125&dpr=off" />
      <q-carousel-slide :name="3" img-src="https://m.ahstatic.com/is/image/accorhotels/aja_p_5629-77?wid=1920" />
      <q-carousel-slide :name="4" img-src="https://m.ahstatic.com/is/image/accorhotels/aja_p_5484-97?wid=1920" />
    </q-carousel>
  </div>
</div>




  <div id="sevicioEspecial">
  <div class="q-pa-md">
    <q-carousel
      swipeable
      animated
      v-model="slide1"
      thumbnails
      infinite
      class="Spa"
    >
      <q-carousel-slide :name="1" img-src="https://cf.bstatic.com/xdata/images/hotel/max1024x768/271568218.jpg?k=414d4487583f2fda7914e3da868dc41af10feb5320fb1ad310537e46d63bb6e1&o=&hp=1" />
      <q-carousel-slide :name="2" img-src="https://media-cdn.tripadvisor.com/media/photo-s/03/96/5e/54/raffles-hotel-singapore.jpg" />
      <q-carousel-slide :name="3" img-src="https://i.ytimg.com/vi/pbhHqvanQsM/maxresdefault.jpg" />
      <q-carousel-slide :name="4" img-src="https://media-cdn.tripadvisor.com/media/photo-m/1280/1c/36/f4/62/photo1jpg.jpg" />
    </q-carousel>

  </div>

  
  <div class="Descripcion">
  <h5>Disfruta de la Experiencia Acuática </h5>
    <p>Nuestra piscina es el corazón de nuestras instalaciones, 
        ofreciendo un espacio amplio y acogedor para que nuestros
        huéspedes se relajen y disfruten. Con un diseño elegante 
        y vistas impresionantes, es el lugar perfecto para escapar
         del estrés diario.</p>
  </div>
</div>
<div id="sevicioEspecial">
    <div  class="Descripcion">
       <h5>Descubre una Experiencia Gastronómica Excepcional</h5>
           <p>Con una atmósfera elegante y acogedora, nuestro restaurante 
        es el lugar perfecto para disfrutar de una comida memorable
         en compañía de amigos y seres queridos. Desde la iluminación 
         cuidadosamente seleccionada hasta la decoración exquisita, 
         cada detalle ha sido diseñado para crear un ambiente cálido 
         y acogedor que te haga sentir como en casa.
           </p>
    </div>
  <div class="q-pa-md">
    <q-carousel
      swipeable
      animated
      v-model="slide2"
      thumbnails
      infinite
      class="Spa"
    >
      <q-carousel-slide :name="1" img-src="https://m.ahstatic.com/is/image/accorhotels/aja_p_5629-41?wid=1920"/>
      <q-carousel-slide :name="2" img-src="https://m.ahstatic.com/is/image/accorhotels/aja_p_5195-36?wid=1920" />
      <q-carousel-slide :name="3" img-src="https://m.ahstatic.com/is/image/accorhotels/aja_p_5195-55?wid=1920" />
      <q-carousel-slide :name="4" img-src="https://m.ahstatic.com/is/image/accorhotels/aja_p_5227-57?wid=1920" />
    </q-carousel>
  </div>

  
 </div>
</div>
</template>

<script setup>
import { ref } from 'vue'
let  slide = ref(1)
let  slide1 = ref(1)
let  slide2 = ref(1)
</script>
<style>

*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
.q-pa-md{
width: 100%;
/* height: 10vh; */
}
.Descripcion{
width: 70%;
}
.Descripcion h5{
    text-align: center;
}
.Descripcion p{
    text-align: justify;
}

#sevicioEspecial{
    display: flex; 
    width: 80%;
    align-items: center;
    margin-right: auto;
    margin-left: auto;
}
</style>