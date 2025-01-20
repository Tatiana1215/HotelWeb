<template>
  <div>

    <q-card class="my-card">
      <q-img src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/16/ff/97/6e/lobby.jpg?w=1200&h=-1&s=1">
      </q-img>
    </q-card>


    <div class="infomacioServicios">
      <h2>Servicios</h2> <br>
      <p>Descubre los espacios más exclusivos de San Andrés y
        disfruta de todos los servicios que tenemos para ofrecerte
        Haga de su estancia una experiencia maravillosa.</p>
    </div>

    <div id="sevicioEspecial">
      <div class="Descripcion">
        <h3>spa</h3><br>
        <p>Explora nuestras lujosas instalaciones, diseñadas para proporcionarte el máximo
          confort y relajación. Desde nuestras serenas salas de tratamiento hasta nuestras
          áreas de relajación con vistas impresionantes, cada rincón de nuestro spa está
          pensado para tu bienestar.</p>
      </div>
      <div class="q-pa-md">
        <q-carousel swipeable animated v-model="slide" thumbnails infinite class="Spa">
          <q-carousel-slide :name="1" img-src="https://m.ahstatic.com/is/image/accorhotels/aja_p_5195-52?wid=1920" />
          <q-carousel-slide :name="2"
            img-src="https://m.ahstatic.com/is/image/accorhotels/aja_p_5484-98?qlt=82&wid=1920&ts=1716777971125&dpr=off" />
          <q-carousel-slide :name="3" img-src="https://m.ahstatic.com/is/image/accorhotels/aja_p_5629-77?wid=1920" />
          <q-carousel-slide :name="4" img-src="https://m.ahstatic.com/is/image/accorhotels/aja_p_5484-97?wid=1920" />
        </q-carousel>
      </div>
    </div>

    <div id="sevicioEspecial">
      <div class="q-pa-md">
        <q-carousel swipeable animated v-model="slide1" thumbnails infinite class="Spa">
          <q-carousel-slide :name="1"
            img-src="	https://lirp.cdn-website.com/ae259823/dms3rep/multi/opt/Aquamare-hotel-piscina-SAI-1920w.png" />
          <q-carousel-slide :name="2"
            img-src="	https://lirp.cdn-website.com/ae259823/dms3rep/multi/opt/Piscina+002-1920w.jpg" />
        </q-carousel>
      </div>
      <div class="Descripcion">
        <h3>Piscina</h3><br>
        <p>Nuestra piscina es el corazón de nuestras instalaciones,
          ofreciendo un espacio amplio y acogedor para que nuestros
          huéspedes se relajen y disfruten. Con un diseño elegante
          y vistas impresionantes, es el lugar perfecto para escapar
          del estrés diario.</p>
      </div>
    </div>

    <div id="sevicioEspecial">
      <div class="Descripcion">
        <h3>Restaurante</h3> <br>
        <p>Con una atmósfera elegante y acogedora, nuestro restaurante
          es el lugar perfecto para disfrutar de una comida memorable
          en compañía de amigos y seres queridos. Desde la iluminación
          cuidadosamente seleccionada hasta la decoración exquisita,
          cada detalle ha sido diseñado para crear un ambiente cálido
          y acogedor que te haga sentir como en casa.
        </p>
      </div>
      <div class="q-pa-md">
        <q-carousel swipeable animated v-model="slide2" thumbnails infinite class="Spa">
          <q-carousel-slide :name="1"
            img-src="	https://lirp.cdn-website.com/ae259823/dms3rep/multi/opt/AQUAMARE-24-1920w.jpg" />
          <q-carousel-slide :name="2"
            img-src="https://lirp.cdn-website.com/ae259823/dms3rep/multi/opt/Gastronomia-Aquamare-Hotel+%284%29-1920w.JPG" />
          <q-carousel-slide :name="3"
            img-src="	https://lirp.cdn-website.com/ae259823/dms3rep/multi/opt/AQUAMARE-52-1920w.jpg" />
          <q-carousel-slide :name="4"
            img-src="https://lirp.cdn-website.com/ae259823/dms3rep/multi/opt/Gastronomia-Aquamare-Hotel+%281%29-1920w.JPG" />
          <q-carousel-slide :name="5"
            img-src="	https://lirp.cdn-website.com/ae259823/dms3rep/multi/opt/AQUAMARE-21-1920w.jpg" />

        </q-carousel>
      </div>
    </div>

    <!-- <div id="sevicioEspecial">
      <div class="q-pa-md">
        <q-carousel swipeable animated v-model="slide3" thumbnails infinite class="Spa">
          <q-carousel-slide :name="1"
            img-src="	https://lirp.cdn-website.com/ae259823/dms3rep/multi/opt/AQUAMARE-77-01b7ef31-1920w.jpg" />
          <q-carousel-slide :name="2"
            img-src="https://lirp.cdn-website.com/ae259823/dms3rep/multi/opt/Cocteles-Aquamare-Hotel+%2820%29-1920w.JPG" />
          <q-carousel-slide :name="3"
            img-src="https://lirp.cdn-website.com/ae259823/dms3rep/multi/opt/Cocteles-Aquamare-Hotel+%282%29-1920w.JPG" />
          <q-carousel-slide :name="4"
            img-src="https://lirp.cdn-website.com/ae259823/dms3rep/multi/opt/Cocteles-Aquamare-Hotel+%2825%29-1920w.JPG" />
        </q-carousel>
      </div>

      <div class="Descripcion">
        <h3>Coral Bar</h3><br>
        <p ¿>Los cócteles que representan la
          alegría caribeña y los acogedores espacios
          son la propuesta más innovadora del hotel y
          te harán sentir como en casa.</p>

      </div>
    </div> -->



    <div id="sevicioEspecial">
      <div class="q-pa-md">
        <q-carousel swipeable animated v-model="slide3" thumbnails infinite class="Spa">
          <q-carousel-slide :name="1"
            img-src="	https://lirp.cdn-website.com/ae259823/dms3rep/multi/opt/AQUAMARE-77-01b7ef31-1920w.jpg" />
          <q-carousel-slide :name="2"
            img-src="https://lirp.cdn-website.com/ae259823/dms3rep/multi/opt/Cocteles-Aquamare-Hotel+%2820%29-1920w.JPG" />
          <q-carousel-slide :name="3"
            img-src="https://lirp.cdn-website.com/ae259823/dms3rep/multi/opt/Cocteles-Aquamare-Hotel+%282%29-1920w.JPG" />
          <q-carousel-slide :name="4"
            img-src="https://lirp.cdn-website.com/ae259823/dms3rep/multi/opt/Cocteles-Aquamare-Hotel+%2825%29-1920w.JPG" />
        </q-carousel>
      </div>
      <div class="Descripcion">
        <h3>Coral Bar</h3><br>
        <p>Los cócteles que representan la
          alegría caribeña y los acogedores espacios
          son la propuesta más innovadora del hotel y
          te harán sentir como en casa.</p>
      </div>
    </div>
  </div>


</template>

<script setup>
import { ref } from 'vue'
let slide = ref(1)
let slide1 = ref(1)
let slide2 = ref(1)
let slide3 = ref(1)
</script>
<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.inicioImg img {
  width: 100%;
  height: 700px;
}

.infomacioServicios {
  width: 60%;
  display: grid;
  text-align: center;
  margin-left: auto;
  margin-right: auto;
  margin-top: 50px;
  margin-bottom: 10px;
}

.infomacioServicios h2,
p {
  font-family: cursive;
}

.infomacioServicios p {
  font-size: 15px;
}

.q-pa-md {
  width: 100%;
}

.Descripcion {
  width: 80%;
  align-content: center;
}

.Descripcion h3 {
  text-align: center;
  font-family: cursive;
}

.Descripcion p {
  text-align: justify;
  font-family: cursive;
  font-size: 15px;
}

#sevicioEspecial {
  display: flex;
  gap: 20px;
  width: 80%;
  align-items: center;
  margin-right: auto;
  margin-left: auto;
  margin-bottom: 50px;
}
@media (max-width:800px){
  
#sevicioEspecial {
width: 95%;
}
}

@media (max-width:500px){
  #sevicioEspecial {
    display: flex;
/* width: 95%; */
flex-wrap:wrap ;

}
.Descripcion{
  display: grid;
  margin-left: auto;
  margin-right: auto;
}
.infomacioServicios {
  width: 90%;
}
}
</style>