<template>
  <div>
    <q-card class="my-card">
      <q-img src="https://th.bing.com/th/id/OIG4.MKvzpEE3wPD.tZt26trg?w=1024&h=1024&rs=1&pid=ImgDetMain">
        <div class="absolute-bottom text-subtitle2 text-center">
          Deportes Extremos
        <!-- <h1 style="font-family: cursive;">Deportes Extremos</h1> -->
        </div>
      </q-img>
    </q-card>

   
   
    <div id="contendorDeportes">

      <div class="card">
        <div class="card-inner">
          <div class="card-front">
            <img src="https://bouyahwatersports.com/wp-content/uploads/2019/05/parasailing-in-star-island.jpg"
              alt="Imagen de la tarjeta" style="width: 100%; height: 100%; object-fit: cover;">
          </div>
          <div class="card-back">
            <h2>Parasailing</h2><br>
            <p>
              Experimenta la emoción de volar sobre el agua con nuestra experiencia de parasailing. <br>
              <strong> Nivel de Dificultad: </strong>Moderado. No se requiere experiencia previa, pero es importante
              seguir las
              instrucciones de seguridad. <br>
              <strong>Requisitos:</strong> Chaleco salvavidas, arnés de seguridad, casco, y gafas de protección. <br>
              <strong>Precio:</strong> Desde $62 por vuelo. <br>
            </p>
          </div>
        </div>
      </div>

      <div class="card">
        <div class="card-inner">
          <div class="card-front">
            <img
              src="https://www.dresseldivers.com/wp-content/uploads/Divers-Decompression-descompresio%CC%81n-en-el-buceo-5-1024x829.jpg"
              alt="Imagen de la tarjeta" style="width: 100%; height: 100%; object-fit: cover;">
          </div>
          <div class="card-back">
            <h2>Buceo</h2><br>
            <p>
              Sumérgete en una aventura submarina con nuestra experiencia de buceo.<br>
              <strong> Nivel de Dificultad: </strong>Moderado a Alto. Dependiendo del tipo de buceo, puede
              requerir experiencia previa y certificación. <br>
              <strong>Requisitos:</strong> Traje de buceo, tanque de aire, regulador, máscara, aletas, chaleco
              compensador
              de flotabilidad, y equipo de seguridad adicional. <br>
              <strong>Precio:</strong> Desde $150 por inmersión. <br>
            </p>
          </div>
        </div>
      </div>

      <div class="card">
        <div class="card-inner">
          <div class="card-front">
            <img src="https://www.naish.com/cdn/shop/collections/windsurf-foils-naish-com.jpg?v=1707912741"
              alt="Imagen de la tarjeta" style="width: 100%; height: 100%; object-fit: cover;">
          </div>
          <div class="card-back">
            <h2>Windsurf</h2><br>
            <p>
              Experimenta la emoción de deslizarte sobre el agua con nuestra experiencia de windsurf.<br>
              <strong> Nivel de Dificultad: </strong> No se requiere experiencia previa, pero es útil tener
              conocimientos básicos de navegación y equilibrio. <br>
              <strong>Requisitos:</strong> Tabla de windsurf, vela, arnés, chaleco salvavidas, casco, y gafas de
              protección.<br>
              <strong>Precio:</strong> Desde $80 por sesión. <br>
            </p>
          </div>
        </div>
      </div>
      <div class="card">
        <div class="card-inner">
          <div class="card-front">
            <img src="https://holidayexcursion.com/wp-content/uploads/2023/12/Alanya-Flyboard-holiday-excursion.jpg"
              alt="Imagen de la tarjeta" style="width: 100%; height: 100%; object-fit: cover;">
          </div>
          <div class="card-back">
            <h2>Fly Board</h2><br>
            <p>
              Experimenta la emoción de deslizarte sobre el agua con nuestra experiencia de windsurf.<br>
              <strong> Nivel de Dificultad: </strong> No se requiere experiencia previa, pero es útil tener
              conocimientos básicos de navegación y equilibrio. <br>
              <strong>Requisitos:</strong> Tabla de windsurf, vela, arnés, chaleco salvavidas, casco, y gafas de
              protección.<br>
              <strong>Precio:</strong> Desde $80 por sesión. <br>
            </p>
          </div>
        </div>
      </div>

      <div class="card">
        <div class="card-inner">
          <div class="card-front">
            <img src="https://fishmasters.com/wp-content/uploads/2022/02/girl-on-a-kayak.jpg" alt="Imagen de la tarjeta"
              style="width: 100%; height: 100%; object-fit: cover;">
          </div>
          <div class="card-back">
            <h2>Kayak</h2><br>
            <p>
              Disfruta de la aventura de remar en aguas abiertas con nuestra experiencia de kayak en el mar.<br>
              <strong> Nivel de Dificultad: </strong> Moderado a Alto. Dependiendo de las condiciones del mar,
              puede requerir experiencia previa y habilidades de navegación. <br>
              <strong>Requisitos:</strong>Chaleco salvavidas, remo, casco, traje de neopreno
              (si aplica), y equipo de seguridad adicional.<br>
              <strong>Precio:</strong> Desde $70 por sesión.<br>
            </p>
          </div>
        </div>
      </div>

      <div class="card">
        <div class="card-inner">
          <div class="card-front">
            <img src="https://img.freepik.com/fotos-premium/hombre-vuela-paracaidas-palabras-palabra-parte-inferior_865967-241766.jpg" alt="Imagen de la tarjeta"
              style="width: 100%; height: 100%; object-fit: cover;">
          </div>
          <div class="card-back">
            <h2>Paracaidismo</h2><br>
            <p>
              Experimenta la emoción de lanzarte desde el cielo con nuestra experiencia de paracaidismo.<br>
              <strong> Nivel de Dificultad: </strong> Alto. Se requiere experiencia previa en paracaidismo y habilidades avanzadas de salto.<br>
              <strong>Requisitos:</strong>Paracaídas en buen estado, traje de vuelo (si aplica), casco, 
              altímetro, gafas de protección y equipo de protección completo.<br>
              <strong>Precio:</strong> Desde $120 por salto.<br>
            </p>
          </div>
        </div>
      </div>

    </div>
  </div>

</template>

<script setup>
import { ref } from 'vue'
</script>
<style>

.inicioDeportes img{
  width: 100%;
  height: 600px;
}
#contendorDeportes {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 20px;
  width: 90%;
  margin-top: 50px;
  margin-bottom: 50px;
  margin-left: auto;
  margin-right: auto;
}

.card {
  width:100%;
  height: 590px;
  perspective: 1000px;
}

.card-inner {
  width: 100%;
  height: 100%;
  transition: transform 0.6s;
  /* Aplica una transición suave de 0.6 segundos a las transformaciones.*/
  transform-style: preserve-3d;
  /* Mantiene el estilo 3*/
  position: relative;
}




.card:hover .card-inner {
  transform: rotateY(180deg);
  /*Rota el contenedor interno 180 grados en el eje Y cuando el cursor se sobrepone a la tarjeta, creando el efecto de volteo.*/
}

.card-front,
.card-back {
  width: 100%;
  height: 100%;
  position: absolute;
  /*Posiciona los lados frontal y trasero absolutamente dentro del contenedor interno.*/
  backface-visibility: hidden;
  /*Oculta la parte trasera de los elementos cuando se rotan. */
  display: grid;
  align-items: center;
  justify-content: center;
  font-size: 1.5em;
  color: white;
}


.card-back {
  background-color: #2848a7;
  transform: rotatey(180deg);
  /* Rota la parte trasera 180 grados en el eje Y para que esté oculta por defecto.*/
  padding: 10%;
}
.card-back h2, p{
  font-family: cursive;
}
@media (max-width:1500px) and (min-width:992px){
  #contendorDeportes {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  }
}
@media ( max-width:800px) and (min-width:700px){
  #contendorDeportes {
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  }
  .card {
  width:100%;
  height: 450px;
  perspective: 1000px;
}
}
@media (max-width:500px){
  #contendorDeportes {
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  }
  .card {
  width:100%;
  height: 470px;
  perspective: 1000px;
}
.card-back h2 {
  font-size: 45px;
}
.card-back p{
  font-size: 15px;
}
}

</style>