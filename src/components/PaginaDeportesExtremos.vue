<template>
  <div id="contendorDeportes">
  <div class="q-pa-md">
    <q-carousel
      animated
      v-model="slide"
      infinite
      arrows
    >
      <q-carousel-slide :name="1" img-src="https://i1.wp.com/hotbook.com.mx/wp-content/uploads/2014/10/hotbook-126.jpg?w=717&ssl=1" />
      <q-carousel-slide :name="2" img-src="https://s7g10.scene7.com/is/image/ktm/r2r-3:Small?wid=1050&hei=1050&dpr=off" />
      <q-carousel-slide :name="3" img-src="https://s7g10.scene7.com/is/image/ktm/377908_engine:Small?wid=1050&hei=1050&dpr=off" />
      <q-carousel-slide :name="4" img-src="https://s7g10.scene7.com/is/image/ktm/378708_design:Small?wid=1050&hei=1050&dpr=off" />
    </q-carousel>
    
    <q-card class="my-card" style="height: 400px;">
      <q-card-section>
        <div class="text-h6">Motocross
        </div>
        <div class="text-subtitle2">
          Experimenta la emoción de recorrer nuestra pista de motocross 
          especialmente diseñada. <br> <br>
          <strong>Nivel de Dificultad:</strong> Alto. Se requiere experiencia 
          previa en motocross y habilidades avanzadas de conducción. <br><br>
          <strong>Requisitos:</strong> Moto de motocross en buen estado,
           casco, gafas de protección, botas de motocross, guantes y equipo de protección completo. <br><br>
          <strong>Precio:</strong> Desde $40 por sesión de práctica.
        </div>
      </q-card-section>
    </q-card>

  
  </div>


  <div class="q-pa-md">
    <q-carousel
      animated
      v-model="slide1"
      infinite
      arrows
    >
      <q-carousel-slide :name="1" img-src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/06/a8/57/cd/skydive-espana.jpg?w=1000&h=800&s=1" />
      <q-carousel-slide :name="2" img-src="https://media-cdn.tripadvisor.com/media/photo-s/06/a8/55/08/skydive-espana.jpg" />
      <q-carousel-slide :name="3" img-src="https://paracaidismonuevoleon.mx/wp-content/uploads/2022/03/14.jpg" />
      <q-carousel-slide :name="4" img-src="https://www.mexicodestinos.com/blog/wp-content/uploads/2017/06/Descenso_en_Paracaidas.jpg" />
    </q-carousel>

    <q-card class="my-card" style="height: 400px;">
      <q-card-section>
        <div class="text-h6">Paracaidismo
        </div>
        <div class="text-subtitle2">
          Experimenta la emoción de lanzarte al vacío y sentir la libertad absoluta mientras 
          caes en paracaídas. Disfruta de vistas impresionantes desde arriba y vive 
          una experiencia inolvidable. <br> <br>
          <strong>Nivel de Dificultad:</strong> Moderado. No se requiere experiencia previa, 
          pero se necesita coraje y disposición para la aventura. <br><br>
          <strong>Requisitos:</strong> Participantes deben cumplir con los requisitos 
          de peso y salud establecidos por nuestro equipo de paracaidismo. <br><br>
          <strong>Precio:</strong> Desde $300 por salto..
        </div>
      </q-card-section>
    </q-card>
  </div>



  <div class="q-pa-md">
    <q-carousel
      animated
      v-model="slide2"
      infinite
      arrows
    >
      <q-carousel-slide :name="1" img-src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/Rio_Salvaje_Jalcomulco.jpeg/1200px-Rio_Salvaje_Jalcomulco.jpeg" />
      <q-carousel-slide :name="2" img-src="https://entremontanas.com/wp-content/uploads/Rafting_brazil-1024x768-1.jpg" />
      <q-carousel-slide :name="3" img-src="https://sietelagos.cl/wp-content/uploads/2022/06/DEPORTE-AVENTURA-RAFTING-2.jpg" />
      <q-carousel-slide :name="4" img-src="https://api.suryabintangadventures.com/storage/upload/images/category/6618c76a8bda2.JPG" />
    </q-carousel>

    <q-card class="my-card" style="height: 400px;">
      <q-card-section>
        <div class="text-h6">Raftings
        </div>
        <div class="text-subtitle2">
          Embárcate en una emocionante aventura en aguas 
          bravas mientras navegas por rápidos emocionantes y disfrutas del paisaje natural. <br> <br>
          <strong>Nivel de Dificultad:</strong> Alto. Se requiere cierto nivel de condición física 
          y disposición para enfrentar desafíos en el agua. <br><br>
          <strong>Requisitos:</strong> Traje de neopreno, chaleco salvavidas y 
          equipo de rafting proporcionado por nuestro equipo. <br><br>
          <strong>Precio:</strong> Desde $50 por persona.
        </div>
      </q-card-section>
    </q-card>
  </div>


    <div class="q-pa-md">
    <q-carousel
      animated
      v-model="slide3"
      infinite
      arrows
    >
      <q-carousel-slide :name="1" img-src="https://ich.unesco.org/img/photo/thumb/12629-BIG.jpg" />
      <q-carousel-slide :name="2" img-src="https://www.revistaoxigeno.es/uploads/s1/23/91/10/0/article-peligros-invernales-5873582b651cb.jpeg" />
      <q-carousel-slide :name="3" img-src="https://blog.howlanders.com/wp-content/uploads/2021/12/escalada-en-hielo.jpg" />
      <q-carousel-slide :name="4" img-src="https://image.jimcdn.com/app/cms/image/transf/none/path/s3e72b73fe8f48274/image/i6d662ebfb5848424/version/1485102667/image.jpg" />
    </q-carousel>

    <q-card class="my-card" style="height: 400px;">
      <q-card-section>
        <div class="text-h6">Alpinismo
        </div>
        <div class="text-subtitle2">
          El alpinismo es una actividad que implica escalar montañas, enfrentándose a 
          terrenos rocosos y glaciares en entornos de alta montaña. 
          Requiere habilidades técnicas, resistencia física y mental, así como un profundo 
          respeto por la montaña y el medio ambiente. <br> <br>
          <strong>Nivel de Dificultad:</strong>Se clasifica en diferentes niveles de dificultad 
          según la pendiente, la altura y la complejidad de la ruta.<br><br>
          <strong>Requisitos:</strong> Experiencia en escalada, buen estado físico, 
          conocimientos de seguridad en montaña y equipo adecuado. <br><br>
          <strong>Precio:</strong> Desde $500 por persona.
        </div>
      </q-card-section>
    </q-card>
  </div>
  
    <!-- <iframe width="560" height="315" src="https://www.youtube.com/embed/AF00Hehb7nE?si=aQzADu9Epq4wnzt8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe> -->
  
     <div class="q-pa-md">
    <q-carousel
      animated
      v-model="slide4"
      infinite
      arrows
    >
      <q-carousel-slide :name="1" img-src="https://simplementedeportes.wordpress.com/wp-content/uploads/2014/10/7-trineo-de-asfalto-e1400700234266.jpg" />
      <q-carousel-slide :name="2" img-src="https://www.notifresh.com/wp-content/uploads/2020/12/180096c4764a60301d6145b3b9ace5ef.jpg" />
      <q-carousel-slide :name="3" img-src="https://blog.marti.mx/wp-content/uploads/2023/03/street-luge-jpg.webp" />
      <q-carousel-slide :name="4" img-src="https://www.notifresh.com/wp-content/uploads/2020/12/Trineo-de-asfaltoun-deporte-s%C3%B3lo-para-los-m%C3%A1s-atrevidos.jpg" />
    </q-carousel>
  </div>


     <div class="q-pa-md">
    <q-carousel
      animated
      v-model="slide5"
      infinite
      arrows
    >
      <q-carousel-slide :name="1" img-src="https://cdn.getyourguide.com/img/tour/e6d3ceee8da987a5.jpeg/145.jpg" />
      <q-carousel-slide :name="2" img-src="https://cdn.getyourguide.com/img/tour/aaa8b3b7be252ff9.jpeg/145.jpg" />
      <q-carousel-slide :name="3" img-src="https://cdn.getyourguide.com/img/tour/73fc3abe81b028a3.jpeg/145.jpg" />
      <q-carousel-slide :name="4" img-src="https://cdn.getyourguide.com/img/tour/5b689c765788c875.jpeg/145.jpg" />
    </q-carousel>
  </div>


     <div class="q-pa-md">
    <q-carousel
      animated
      v-model="slide6"
      infinite
      arrows
    >
      <q-carousel-slide :name="1" img-src="https://media.istockphoto.com/id/960156448/es/foto/ciclista-de-atl%C3%A9tico-sportsman-en-ropa-deportiva-profesional-y-casco-volando-en-el-aire-con-su.webp?b=1&s=170667a&w=0&k=20&c=ryurLOrinG98kgYbiDb9QHXSR1AiIBT2LItIdhJbp58=" />
      <q-carousel-slide :name="2" img-src="https://mejorconsalud.as.com/wp-content/uploads/2018/08/ciclismo-monta%C3%B1a-bici.jpg" />
      <q-carousel-slide :name="3" img-src="https://img.redbull.com/images/c_fill,w_1200,h_630,g_auto,f_auto,q_auto/redbullcom/2013/12/03/1331622865306_2/joscha-forstreuter-mantiene-el-invierno-a-raya" />
      <q-carousel-slide :name="4" img-src="https://www.ciclismo.it/files/articoli/2/9/8/29818/B_d15.jpeg" />
    </q-carousel>
  </div>


     <div class="q-pa-md">
    <q-carousel
      animated
      v-model="slide7"
      infinite
      arrows
    >
      <q-carousel-slide :name="1" img-src="https://i1.wp.com/hotbook.com.mx/wp-content/uploads/2014/10/hotbook-108.jpg?w=714&ssl=1" />
      <q-carousel-slide :name="2" img-src="https://citynews-leccotoday.stgy.ovh/~media/horizontal-mid/13552244059250/base-jumping.jpeg" />
      <q-carousel-slide :name="3" img-src="https://deportesextremosyeah.wordpress.com/wp-content/uploads/2015/07/wing.jpg" />
      <q-carousel-slide :name="4" img-src="https://cdn.sanity.io/images/m2koza6e/production/6fc8d9e72c3bb19b5160e0a1f07e9cbd4e7137d9-1160x1239.jpg?w=1160&h=1239&auto=format" />
    </q-carousel>
  </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
let slide= ref(1)
let slide1= ref(1)
let slide2= ref(1)
let slide3= ref(1)
let slide4= ref(1)
let slide5= ref(1)
let slide6= ref(1)
let slide7= ref(1)
let slide8= ref(1)
let slide9= ref(1)
// const lorem = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
</script>

<style >
#contendorDeportes{
  display: grid;
  grid-template-columns: repeat(3,1fr);
}
.my-card{
    width: 100%;
}

</style>