<!-- <template>
<div><h1></h1></div>
</template> -->

<template>
    <div >
  
      <q-card class="my-card">
        <q-img src="https://d2e5ushqwiltxm.cloudfront.net/wp-content/uploads/sites/190/2023/02/21040815/Palm-Court.jpg">
            <div class="absolute-bottom custom-title text-center text-white">
            HABITACIONES
          </div>
        </q-img>
      </q-card>
<br><br>

<div class="Habitaciones">
      <div class="q-pa-md">
    <q-carousel
      animated
      v-model="slide1"
      navigation
      infinite
      :autoplay="autoplay"
      arrows
      transition-prev="slide-right"
      transition-next="slide-left"
      @mouseenter="autoplay = false"
      @mouseleave="autoplay = true"
    >
      <q-carousel-slide :name="1" img-src="https://d1t1qzzb2zwrre.cloudfront.net/master/media/cache/raffles_thumbs/room/66/66584eecdd2a9697260048.jpg" />
      <q-carousel-slide :name="2" img-src="https://d1t1qzzb2zwrre.cloudfront.net/master/media/cache/raffles_thumbs/room/66/66584eed27ae4919765212.jpg" />
      <q-carousel-slide :name="3" img-src="https://d1t1qzzb2zwrre.cloudfront.net/master/media/cache/raffles_thumbs/room/66/66584eed6406f118329257.jpg" />
      <q-carousel-slide :name="4" img-src="https://d1t1qzzb2zwrre.cloudfront.net/master/media/cache/raffles_thumbs/room/66/66584eed444cb100858630.jpg" />
      <q-carousel-slide :name="5" img-src="https://d1t1qzzb2zwrre.cloudfront.net/master/media/cache/raffles_thumbs/room/66/66584eed0c4f7564432940.jpg" />
    </q-carousel>

</div>

<div class="contenidoDescriptivo">
 <h4>Habitación State Room con cama king size</h4>
<br>
 <p>Con vista a los exuberantes jardines, los salones
 estatales ofrecen una combinación de encanto colonial
 y comodidad moderna. Todas las habitaciones están bellamente
 decoradas con aire acondicionado, ventiladores de techo y ventanas
 que se abren para que entre aire fresco. Las habitaciones estatales
  cuentan con bañera y ducha independientes.</p>
   
    <br>
    <div class="q-pa-sm q-gutter-sm  ">
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
          Caracteristicas
        </q-card-section>

        <q-card-section class="Caracteristicas">
    
        <p> 💙 Balcón privado o sala de estar de mayror tamaño <br>
                        💙 Botella de agua diaria gratuita <br>
                        💙 Tetera y cafetera <br>
                        💙 Cesta de fruta tropical diaria gratuita <br>
                        💙 Carta de almohadas <br>
                        💙 Ducha de lluvia a ras de suelo y bañera independiente<br>
                        💙 Productos Sodashi<br>
                        💙 Cualquier cosa que se haya dejado en casa<br>
                        💙 Servicio de mayordomo Raffles<br>
                        💙 Servicio de habitaciones 24 horas<br>
                        💙 Servicio de cobertura diario<br>
                        💙 WIFI gratuito<br>
                        💙 Dos líneas telefónicas con marcación internacional directa<br>
                        💙 Prensa electrónica gratuita a través de PressReader <br>
                      </p> 
    
          <img src="https://d1t1qzzb2zwrre.cloudfront.net/master/media/cache/raffles_thumbs/room/66/66584eed27ae4919765212.jpg" alt="">
      
      </q-card-section>

        <q-card-actions align="right">
          <q-btn flat label="Close" color="primary" v-close-popup />
        </q-card-actions>
      </q-card>
    </q-dialog>
  </div> 
 </div>
</div>


<div class="Habitaciones">
      <div class="q-pa-md">
    <q-carousel
      animated
      v-model="slide2"
      navigation
      infinite
      :autoplay="autoplay"
      arrows
      transition-prev="slide-right"
      transition-next="slide-left"
      @mouseenter="autoplay = false"
      @mouseleave="autoplay = true"
    >
      <q-carousel-slide :name="1" img-src="https://d1t1qzzb2zwrre.cloudfront.net/master/media/cache/raffles_thumbs/room/66/66584efd0f32a250631001.jpg" />
      <q-carousel-slide :name="2" img-src="https://d1t1qzzb2zwrre.cloudfront.net/master/media/cache/raffles_thumbs/room/66/66584efd2b454928587859.jpg" />
      <q-carousel-slide :name="3" img-src="https://d1t1qzzb2zwrre.cloudfront.net/master/media/cache/raffles_thumbs/room/66/66584efcf2ca5905165699.jpg" />
      <q-carousel-slide :name="4" img-src="https://d1t1qzzb2zwrre.cloudfront.net/master/media/cache/raffles_thumbs/room/66/66584efd40165770879528.jpg" />
      <q-carousel-slide :name="5" img-src="https://d1t1qzzb2zwrre.cloudfront.net/master/media/cache/raffles_thumbs/room/66/66584efd5f905985074877.jpg" />
    </q-carousel>
 </div>
 <div class="contenidoDescriptivo">
 <h4>Habitación State con 2 camas individuales</h4>
 <br>
 <p>Los salones estatales ofrecen una combinación de encanto colonial y
    comodidad moderna con vistas a la icónica piscina. Bellamente decoradas 
    con aire acondicionado, ventiladores de techo y ventanas que se abren para 
    que entre aire fresco. Las habitaciones estatales cuentan con bañera y ducha 
    independientes.</p>
      <br>

<div class="q-pa-sm q-gutter-sm  ">
    <q-btn
      v-for="filter in backdropFilterList1"
      :key="filter.label"
      color="primary"
      :label="filter.label"
      no-caps
      @click="filter.onClick"
    />

    <q-dialog v-model="dialog1" :backdrop-filter="backdropFilter1">
      <q-card>
        <q-card-section class="row items-center q-pb-none text-h6">
          Caracteristicas
        </q-card-section>

        <q-card-section class="Caracteristicas">

          <p >
          🧡Balcón privado o sala de estar de mayor tamaño <br>
          🧡Botella de agua diaria gratuita<br>
          🧡Tetera y cafetera<br>
          🧡Cesta de fruta tropical diaria gratuita<br>
          🧡Carta de almohadas<br>
          🧡Ducha de lluvia a ras de suelo y bañera independiente<br>
          🧡Productos Sodashi<br>
          🧡Cualquier cosa que se haya dejado en casa<br>
         🧡Servicio de mayordomo Raffles<br>
         🧡Servicio de habitaciones 24 horas<br>
         🧡Servicio de cobertura diario<br>
         🧡WIFI gratuito<br>
         🧡Dos líneas telefónicas con marcación internacional directa<br>
         🧡Prensa electrónica gratuita a través de PressReader<br>
        </p>
    
          <img src="https://d1t1qzzb2zwrre.cloudfront.net/master/media/cache/raffles_thumbs/room/66/66584efd2b454928587859.jpg" alt="">
      
      </q-card-section>

        <q-card-actions align="right">
          <q-btn flat label="Close" color="primary" v-close-popup />
        </q-card-actions>
      </q-card>
    </q-dialog>
  </div> 
 </div>
</div>


<div class="Habitaciones">
      <div class="q-pa-md">
    <q-carousel
      animated
      v-model="slide3"
      navigation
      infinite
      :autoplay="autoplay"
      arrows
      transition-prev="slide-right"
      transition-next="slide-left"
       class="black"
      @mouseenter="autoplay = false"
      @mouseleave="autoplay = true"
    >
      <q-carousel-slide :name="1" img-src="https://d1t1qzzb2zwrre.cloudfront.net/master/media/cache/raffles_thumbs/room/66/66584f0c0f0eb861606439.jpg" />
      <q-carousel-slide :name="2" img-src="https://d1t1qzzb2zwrre.cloudfront.net/master/media/cache/raffles_thumbs/room/66/66584f0be571b756984366.jpg" />
      <q-carousel-slide :name="3" img-src="https://d1t1qzzb2zwrre.cloudfront.net/master/media/cache/raffles_thumbs/room/66/66584f0bb98a2124833818.jpg" />
      <q-carousel-slide :name="4" img-src="https://d1t1qzzb2zwrre.cloudfront.net/master/media/cache/raffles_thumbs/room/66/66584f0c2c674618599734.jpg" />
      <q-carousel-slide :name="5" img-src="https://d1t1qzzb2zwrre.cloudfront.net/master/media/cache/raffles_thumbs/room/66/66584f0b9cf5e741562419.jpg" />
    </q-carousel>

</div>
<div class="contenidoDescriptivo">
    <h4>Habitación State Room con vistas a la piscina y cama king size</h4>
 <br>
 <p>Los salones estatales ofrecen una combinación de encanto colonial y 
  comodidad moderna con vistas a la icónica piscina. Bellamente decoradas 
  con aire acondicionado, ventiladores de techo y ventanas que se abren para 
  que entre aire fresco. Las habitaciones estatales cuentan con bañera y ducha independientes.
</p>
<br>
<div class="q-pa-sm q-gutter-sm  ">
    <q-btn
      v-for="filter in backdropFilterList2"
      :key="filter.label"
      color="primary"
      :label="filter.label"
      no-caps
      @click="filter.onClick"
    />

    <q-dialog v-model="dialog2" :backdrop-filter="backdropFilter2">
      <q-card>
        <q-card-section class="row items-center q-pb-none text-h6">
          Caracteristicas
        </q-card-section>

        <q-card-section class="Caracteristicas">

          <p >
            ❤Balcón privado o sala de estar de mayor tamaño <br>
            ❤Botella de agua diaria gratuita<br>
            ❤Tetera y cafetera<br>
            ❤Cesta de fruta tropical diaria gratuita<br>
            ❤Carta de almohadas<br>
            ❤Ducha de lluvia a ras de suelo y bañera independiente<br>
            ❤Productos Sodashi<br>
            ❤Cualquier cosa que se haya dejado en casa<br>
            ❤Servicio de mayordomo Raffles<br>
            ❤Servicio de habitaciones 24 horas<br>
            ❤Servicio de cobertura diario<br>
            ❤WIFI gratuito<br>
            ❤Dos líneas telefónicas con marcación internacional direct<br>
        </p>
    
          <img src="https://d1t1qzzb2zwrre.cloudfront.net/master/room/66/66584f0be571b756984366.jpg" alt="">
      
      </q-card-section>

        <q-card-actions align="right">
          <q-btn flat label="Close" color="primary" v-close-popup />
        </q-card-actions>
      </q-card>
    </q-dialog>
  </div> 
 </div>
</div>






<div class="Habitaciones">
      <div class="q-pa-md">
    <q-carousel
      animated
      v-model="slide4"
      navigation
      infinite
      :autoplay="autoplay"
      arrows
      transition-prev="slide-right"
      transition-next="slide-left"
      @mouseenter="autoplay = false"
      @mouseleave="autoplay = true"
    >
      <q-carousel-slide :name="1" img-src="https://d1t1qzzb2zwrre.cloudfront.net/master/media/cache/raffles_thumbs/room/66/66584f1a6905f554284094.jpg" />
      <q-carousel-slide :name="2" img-src="https://d1t1qzzb2zwrre.cloudfront.net/master/media/cache/raffles_thumbs/room/66/66584f1a288cf404682441.jpg" />
      <q-carousel-slide :name="3" img-src="https://d1t1qzzb2zwrre.cloudfront.net/master/media/cache/raffles_thumbs/room/66/66584f1a3c480476935237.jpg" />
      <q-carousel-slide :name="4" img-src="https://d1t1qzzb2zwrre.cloudfront.net/master/media/cache/raffles_thumbs/room/66/66584f1a0f0ff430312235.jpg" />
      <q-carousel-slide :name="5" img-src="https://d1t1qzzb2zwrre.cloudfront.net/master/media/cache/raffles_thumbs/room/66/66584f1a53216581560401.jpg" />
    </q-carousel>

</div>
<div class="contenidoDescriptivo">
 <h4>Habitación State Room con vistas a la piscina y cama king size</h4>
 <br>
 <p>Los salones estatales ofrecen una combinación de encanto colonial y 
  comodidad moderna con vistas a la icónica piscina. Bellamente decoradas 
  con aire acondicionado, ventiladores de techo y ventanas que se abren para 
  que entre aire fresco. Las habitaciones estatales cuentan con bañera y ducha independientes.
   </p>
      <br>
      <div class="q-pa-sm q-gutter-sm  ">
    <q-btn
      v-for="filter in backdropFilterList3"
      :key="filter.label"
      color="primary"
      :label="filter.label"
      no-caps
      @click="filter.onClick"
    />

    <q-dialog v-model="dialog3" :backdrop-filter="backdropFilter3">
      <q-card>
        <q-card-section class="row items-center q-pb-none text-h6">
          Caracteristicas
        </q-card-section>

        <q-card-section class="Caracteristicas">

          <p >
            💛Balcón privado o sala de estar de mayor tamaño <br>
            💛Botella de agua diaria gratuita <br>
            💛Tetera y cafetera<br>
            💛Cesta de fruta tropical diaria gratuita<br>
            💛Carta de almohadas<br>
            💛Ducha de lluvia a ras de suelo y bañera independiente<br>
            💛Productos Sodashi<br>
            💛Cualquier cosa que se haya dejado en casa<br>
            💛Servicio de mayordomo Raffles<br>
            💛Servicio de habitaciones 24 horas<br>
            💛Servicio de cobertura diario<br>
            💛WIFI gratuito<br>
            💛Dos líneas telefónicas con marcación internacional directa<br>
            💛Prensa electrónica gratuita a través de PressReader<br>
            
        </p>
    
          <img src="https://d1t1qzzb2zwrre.cloudfront.net/master/room/66/66584f1a288cf404682441.jpg" alt="">
      
      </q-card-section>

        <q-card-actions align="right">
          <q-btn flat label="Close" color="primary" v-close-popup />
        </q-card-actions>
      </q-card>
    </q-dialog>
  </div> 
 </div> 
</div>


<div class="Habitaciones">
      <div class="q-pa-md">
    <q-carousel
      animated
      v-model="slide5"
      navigation
      infinite
      :autoplay="autoplay"
      arrows
      transition-prev="slide-right"
      transition-next="slide-left"
      @mouseenter="autoplay = false"
      @mouseleave="autoplay = true"
    >
      <q-carousel-slide :name="1" img-src="https://d1t1qzzb2zwrre.cloudfront.net/master/media/cache/raffles_thumbs/room/66/66584f29708ff846672727.jpg" />
      <q-carousel-slide :name="2" img-src="https://d1t1qzzb2zwrre.cloudfront.net/master/media/cache/raffles_thumbs/room/66/66584f2989a24928007016.jpg" />
      <q-carousel-slide :name="3" img-src="https://d1t1qzzb2zwrre.cloudfront.net/master/media/cache/raffles_thumbs/room/66/66584f2963b39359763787.jpg" />
      <q-carousel-slide :name="4" img-src="https://d1t1qzzb2zwrre.cloudfront.net/master/media/cache/raffles_thumbs/room/66/66584f29b747c923271919.jpg" />
    </q-carousel>
</div>
<div class="contenidoDescriptivo">
 <h4>Habitación Landmark con cama king size</h4>
 <br>
 <p>Diseñado por primera vez en 1932, decorado con artefactos 
  que recuerdan a la Edad de Oro de los viajes. El ambiente angkoriano 
  se completa con techos altos, suelos de madera, baños con ducha de mármol 
  y camas con dosel hechas a mano con vistas a la Residencia Real.</p>
  <br>
      <div class="q-pa-sm q-gutter-sm  ">
    <q-btn
      v-for="filter in backdropFilterList4"
      :key="filter.label"
      color="primary"
      :label="filter.label"
      no-caps
      @click="filter.onClick"
    />

    <q-dialog v-model="dialog4" :backdrop-filter="backdropFilter4">
      <q-card>
        <q-card-section class="row items-center q-pb-none text-h6">
          Caracteristicas
        </q-card-section>

        <q-card-section class="Caracteristicas">

          <p >
            💚Balcón privado con mesas y sillas
            💚Botella de agua diaria gratuita
            💚Tetera y cafetera
            💚Cesta de fruta tropical diaria gratuita
            💚Carta de almohadas
            💚Ducha de lluvia a ras de suelo y bañera independientes
            💚Habitaciones con duchas a ras de suelo para silla de ruedas y sin bañeras disponibles
            💚Productos Sodashi
            💚Cualquier cosa que se haya dejado en casa
            💚Servicio de mayordomo Raffles
            💚Servicio de habitaciones 24 horas
            💚Servicio de cobertura diario
            💚WIFI gratuito
            💚Dos líneas telefónicas con marcación internacional directa
            💚Prensa electrónica gratuita a través de PressReader

        
        </p>
    
          <img src="https://d1t1qzzb2zwrre.cloudfront.net/master/room/66/66584f2989a24928007016.jpg" alt="">
      
      </q-card-section>

        <q-card-actions align="right">
          <q-btn flat label="Close" color="primary" v-close-popup />
        </q-card-actions>
      </q-card>
    </q-dialog>
  </div> 
 </div> 
</div>



<div class="Habitaciones">
      <div class="q-pa-md">
    <q-carousel
      animated
      v-model="slide6"
      navigation
      infinite
      :autoplay="autoplay"
      arrows
      transition-prev="slide-right"
      transition-next="slide-left"
      @mouseenter="autoplay = false"
      @mouseleave="autoplay = true"
    >
      <q-carousel-slide :name="1" img-src="https://d1t1qzzb2zwrre.cloudfront.net/master/media/cache/raffles_thumbs/room/66/66584f36a6b37360933023.jpg" />
      <q-carousel-slide :name="2" img-src="https://d1t1qzzb2zwrre.cloudfront.net/master/media/cache/raffles_thumbs/room/66/66584f368f6e4001164771.jpg" />
      <q-carousel-slide :name="3" img-src="https://d1t1qzzb2zwrre.cloudfront.net/master/media/cache/raffles_thumbs/room/66/66584f367011d561855529.jpg" />
      <q-carousel-slide :name="4" img-src="https://d1t1qzzb2zwrre.cloudfront.net/master/media/cache/raffles_thumbs/room/66/66584f365fb2d724207311.jpg" />
      <q-carousel-slide :name="5" img-src="https://d1t1qzzb2zwrre.cloudfront.net/master/media/cache/raffles_thumbs/room/66/66584f364c661192751376.jpg" />
    </q-carousel>
</div>
<div class="contenidoDescriptivo">
 <h4>Habitación Landmark con 2 camas individuales</h4>
 <br>
 <p>Diseñada por primera vez en 1932 y decorada con artefactos que 
  recuerdan a la época dorada de los viajes. El ambiente de Angkor se 
  complementa con techos altos, suelos de madera, baños históricos de 
  mármol con ducha/bañera y camas con dosel artesanal. </p>
  <br>
      <div class="q-pa-sm q-gutter-sm  ">
    <q-btn
      v-for="filter in backdropFilterList6"
      :key="filter.label"
      color="primary"
      :label="filter.label"
      no-caps
      @click="filter.onClick"
    />

    <q-dialog v-model="dialog6" :backdrop-filter="backdropFilter6">
      <q-card>
        <q-card-section class="row items-center q-pb-none text-h6">
          Caracteristicas
        </q-card-section>

        <q-card-section class="Caracteristicas">

          <p >
            💜Balcón privado con mesas y sillas <br>
            💜Botella de agua diaria gratuita<br>
            💜Tetera y cafetera<br>
            💜Cesta de fruta tropical diaria gratuita<br>
            💜Carta de almohadas<br>
            💜Ducha de lluvia a ras de suelo y bañera independientes<br>
            💜Habitaciones con duchas a ras de suelo para silla de ruedas y sin bañeras disponibles<br>
            💜Productos Sodashi<br>
            💜Cualquier cosa que se haya dejado en casa<br>
            💜Servicio de mayordomo Raffles<br>
            💜Servicio de habitaciones 24 horas<br>
            💜Servicio de cobertura diario<br>
            💜WIFI gratuito<br>
            💜Dos líneas telefónicas con marcación internacional directa<br>
            💜Prensa electrónica gratuita a través de PressReader<br>
        </p>
    
          <img src="https://d1t1qzzb2zwrre.cloudfront.net/master/room/66/66584f368f6e4001164771.jpg" alt="">
      
      </q-card-section>

        <q-card-actions align="right">
          <q-btn flat label="Close" color="primary" v-close-popup />
        </q-card-actions>
      </q-card>
    </q-dialog>
  </div> 
 </div> 
</div>




<div class="Habitaciones">
      <div class="q-pa-md">
    <q-carousel
      animated
      v-model="slide7"
      navigation
      infinite
      :autoplay="autoplay"
      arrows
      transition-prev="slide-right"
      transition-next="slide-left"
      @mouseenter="autoplay = false"
      @mouseleave="autoplay = true"
    >
      <q-carousel-slide :name="1" img-src="https://d1t1qzzb2zwrre.cloudfront.net/master/media/cache/raffles_thumbs/room/66/66584f43107bc546995792.jpg" />
      <q-carousel-slide :name="2" img-src="https://d1t1qzzb2zwrre.cloudfront.net/master/media/cache/raffles_thumbs/room/66/66584f42ee1f2377125568.jpg" />
      <q-carousel-slide :name="3" img-src="https://d1t1qzzb2zwrre.cloudfront.net/master/media/cache/raffles_thumbs/room/66/66584f42c7ebb861988543.jpg" />
      <q-carousel-slide :name="4" img-src="https://d1t1qzzb2zwrre.cloudfront.net/master/media/cache/raffles_thumbs/room/66/66584f42aed22269024153.jpg" />
    </q-carousel>
</div>
<div class="contenidoDescriptivo">
 <h4>Habitación Landmark con vistas a la piscina y cama king size</h4>
 <br>
 <p>Diseñada por primera vez en 1932 y decorada con artefactos que 
  recuerdan a la época dorada de los viajes. El ambiente de Angkor se 
  complementa con techos altos, suelos de madera, baños históricos de 
  mármol con ducha/bañera y camas con dosel artesanal. </p>
  <br>
      <div class="q-pa-sm q-gutter-sm  ">
    <q-btn
      v-for="filter in backdropFilterList5"
      :key="filter.label"
      color="primary"
      :label="filter.label"
      no-caps
      @click="filter.onClick"
    />

    <q-dialog v-model="dialog5" :backdrop-filter="backdropFilter5">
      <q-card>
        <q-card-section class="row items-center q-pb-none text-h6">
          Caracteristicas
        </q-card-section>

        <q-card-section class="Caracteristicas">

          <p >
            🤎Balcón privado con mesas y sillas <br>
            🤎Botella de agua diaria gratuita<br>
            🤎Tetera y cafetera<br>
            🤎Cesta de fruta tropical diaria gratuita<br>
            🤎Carta de almohadas<br>
            🤎Ducha de lluvia a ras de suelo y bañera independientes<br>
            🤎Habitaciones con duchas a ras de suelo para silla de ruedas y sin bañeras disponibles<br>
            🤎Productos Sodashi<br>
            🤎Cualquier cosa que se haya dejado en casa<br>
            🤎Servicio de mayordomo Raffles<br>
            🤎Servicio de habitaciones 24 horas<br>
            🤎Servicio de cobertura diario<br>
            🤎WIFI gratuito<br>
            🤎Dos líneas telefónicas con marcación internacional directa<br>
            🤎Prensa electrónica gratuita a través de PressReader<br>
        </p>
    
          <img src="https://d1t1qzzb2zwrre.cloudfront.net/master/room/66/66584f42ee1f2377125568.jpg" alt="">
      
      </q-card-section>

        <q-card-actions align="right">
          <q-btn flat label="Close" color="primary" v-close-popup />
        </q-card-actions>
      </q-card>
    </q-dialog>
  </div> 
 </div> 
</div>





<div class="Habitaciones">
      <div class="q-pa-md">
    <q-carousel
      animated
      v-model="slide8"
      navigation
      infinite
      :autoplay="autoplay"
      arrows
      transition-prev="slide-right"
      transition-next="slide-left"
      @mouseenter="autoplay = false"
      @mouseleave="autoplay = true"
    >
      <q-carousel-slide :name="1" img-src="https://d1t1qzzb2zwrre.cloudfront.net/master/media/cache/raffles_thumbs/room/66/66584f50680e8419243425.jpg" />
      <q-carousel-slide :name="2" img-src="https://d1t1qzzb2zwrre.cloudfront.net/master/media/cache/raffles_thumbs/room/66/66584f5051a5a732987369.jpg" />
      <q-carousel-slide :name="3" img-src="https://d1t1qzzb2zwrre.cloudfront.net/master/media/cache/raffles_thumbs/room/66/66584f4fececa993353467.jpg" />
      <q-carousel-slide :name="4" img-src="https://d1t1qzzb2zwrre.cloudfront.net/master/media/cache/raffles_thumbs/room/66/66584f501658a076918149.jpg" />
      <q-carousel-slide :name="5" img-src="https://d1t1qzzb2zwrre.cloudfront.net/master/media/cache/raffles_thumbs/room/66/66584f5037a8e237776305.jpg" />
    </q-carousel>
</div>
<div class="contenidoDescriptivo">
 <h4>Habitación Landmark con vistas a la piscina y 2 camas individuales</h4>
 <br>
 <p>Diseñados por primera vez en 1932, están decorados con recuerdos y artefactos 
  que recuerdan la Edad de Oro de los viajes. El ambiente angkoriano se completa con 
  techos altos, suelos de madera, baños históricos de mármol y camas con dosel hechas 
  a mano.</p>
  <br>
      <div class="q-pa-sm q-gutter-sm  ">
    <q-btn
      v-for="filter in backdropFilterList7"
      :key="filter.label"
      color="primary"
      :label="filter.label"
      no-caps
      @click="filter.onClick"
    />

    <q-dialog v-model="dialog7" :backdrop-filter="backdropFilter7">
      <q-card>
        <q-card-section class="row items-center q-pb-none text-h6">
          Caracteristicas
        </q-card-section>

        <q-card-section class="Caracteristicas">

          <p >
            💗Balcón privado <br>
            💗 de estar espaciosa<br>
            💗Botella de agua diaria gratuita<br>
            💗Tetera y cafetera<br>
            💗Cesta de fruta tropical diaria gratuita<br>
            💗Carta de almohadas<br>
            💗Ducha de lluvia a ras de suelo y bañera independientes<br>
            💗Habitaciones con duchas a ras de suelo para silla de ruedas y sin bañeras disponibles<br>
            💗Productos Sodashi<br>
            💗Cualquier cosa que se haya dejado en casa<br>
            💗Servicio de mayordomo Raffles<br>
            💗Servicio de habitaciones 24 horas<br>
            💗Servicio de cobertura diario<br>
            💗WIFI gratuito<br>
            💗Dos líneas telefónicas con marcación internacional directa<br>
            💗Prensa electrónica gratuita a través de PressReader<br>
        </p>
    
          <img src="https://d1t1qzzb2zwrre.cloudfront.net/master/room/66/66584f5051a5a732987369.jpg" alt="">
      
      </q-card-section>

        <q-card-actions align="right">
          <q-btn flat label="Close" color="primary" v-close-popup />
        </q-card-actions>
      </q-card>
    </q-dialog>
  </div> 
 </div> 
</div>



    

</div>
  </template>


<script setup>

import { ref } from 'vue'

let slide = ref('first')
let slide1= ref(2)
let slide2= ref(1)
let slide3= ref(1)
let slide4= ref(1)
let slide5= ref(1)
let slide6= ref(1)
let slide7= ref(1)
let slide8= ref(1)
let autoplay= ref(true)
const dialog = ref(false)
const dialog1 = ref(false)
const dialog2 = ref(false)
const dialog3 = ref(false)
const dialog4 = ref(false)
const dialog5 = ref(false)
const dialog6 = ref(false)
const dialog7 = ref(false)
const dialog8 = ref(false)
const backdropFilter = ref(null)
const backdropFilter1 = ref(null)
const backdropFilter2 = ref(null)
const backdropFilter3= ref(null)
const backdropFilter4= ref(null)
const backdropFilter5= ref(null)
const backdropFilter6 = ref(null)
const backdropFilter7= ref(null)
const backdropFilter8 = ref(null)


    const list = [
      'Mas Información......',
    ]
    const list1 = [
      'Mas Información......',
    ]
   const list2 = [
      'Mas Información......',
    ]
    const list3 = [
      'Mas Información......',
    ]
    const list4 = [
      'Mas Información......',
    ]
    const list5 = [
      'Mas Información......',
    ]
    const list6 = [
      'Mas Información......',
    ]
    const list7 = [
      'Mas Información......',
    ]
    const list8 = [
      'Mas Información......',
    ]
    const backdropFilterList = list.map(filter => ({
      label: filter,
      onClick: () => {
        dialog.value = true
      }
    }))
    const backdropFilterList1 = list1.map(filter => ({
      label: filter,
      onClick: () => {
        dialog1.value = true
      }
    }))
    const backdropFilterList2 = list2.map(filter => ({
      label: filter,
      onClick: () => {
        dialog2.value = true
      }
    }))
    const backdropFilterList3 = list3.map(filter => ({
      label: filter,
      onClick: () => {
        dialog3.value = true
      }
    }))
    const backdropFilterList4 = list4.map(filter => ({
      label: filter,
      onClick: () => {
        dialog4.value = true
      }
    }))
    const backdropFilterList5 = list5.map(filter => ({
      label: filter,
      onClick: () => {
        dialog5.value = true
      }
    }))
    const backdropFilterList6 = list6.map(filter => ({
      label: filter,
      onClick: () => {
        dialog6.value = true
      }
    }))
    const backdropFilterList7 = list7.map(filter => ({
      label: filter,
      onClick: () => {
        dialog7.value = true
      }
    }))
    const backdropFilterList8 = list1.map(filter => ({
      label: filter,
      onClick: () => {
        dialog8.value = true
      }
    }))


  

</script>


<style>
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

.my-card{
    display: flex;
  width: 100%; 
 height: 60vh;
  justify-content: center;

}

.custom-title {
  font-size: 4.5rem;/*  Ajusta el tamaño según tus necesidades */
  font-weight: bold; /* Opcional: para hacer el texto más grueso */
 }  
.Habitaciones{
    width: 90%;
    display: flex;
    /* text-align: center; */
    /* align-content: center */
    margin-left: auto;
    margin-right: auto
}
.contenidoDescriptivo{
    width: 80%;
   
    /* align-content: center; */
}
.contenidoDescriptivo h4{
    text-align: center;
 
}
.contenidoDescriptivo{
    text-align: justify;   
    padding: 2% 4%;
}
.scroll p{
    width: 100%; /* Ancho del contenedor */
  height: 9em; /* Altura del contenedor */
  overflow-y: scroll; 
}


button {
  margin: 5px;
}
.Caracteristicas img{
  width: 100%;
}




</style>