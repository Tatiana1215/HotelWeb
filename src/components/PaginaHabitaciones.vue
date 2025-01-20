<!-- <template>
<div><h1></h1></div>
</template> -->

<template>
  <div>

    <q-card class="my-card">
      <video autoplay="autoplay" playsinline="playsinline" muted="muted" loop="loop" class="videobgframe"
        poster="https://lirp.cdn-website.com/ae259823/dms3rep/multi/opt/GCmBdIArQ2W6m74QoinF_habitaciones.v2.0000000-1920w.jpg"
        src="https://vid.cdn-website.com/ae259823/videos/GCmBdIArQ2W6m74QoinF_habitaciones-v.mp4"
        style="object-position: 50% 50%" id="videobgframe-1999727445"></video>
    </q-card>
    <br><br>

    <div class="informacionResumida">
      <h2>Habitaciones</h2>
      <p>Tranquilidad y confort es lo que caracteriza nuestros espacios,
        las habitaciones están diseñadas para brindarte una experiencia
        Inolvidable en descanso, comodidad y alojamiento en San Andrés.</p>
    </div>

    <div class="Habitaciones">
      <div class="q-pa-md">
        <q-carousel animated v-model="slide1" navigation infinite :autoplay="autoplay" arrows
          transition-prev="slide-right" transition-next="slide-left" @mouseenter="autoplay = false"
          @mouseleave="autoplay = true">
          <q-carousel-slide :name="1"
            img-src="https://lirp.cdn-website.com/ae259823/dms3rep/multi/opt/AQUAMARE-120-1920w.jpg" />
          <q-carousel-slide :name="2"
            img-src="https://lirp.cdn-website.com/ae259823/dms3rep/multi/opt/AQUAMARE-118-1920w.jpg" />
          <q-carousel-slide :name="3"
            img-src="	https://lirp.cdn-website.com/ae259823/dms3rep/multi/opt/AQUAMARE-96-051898ad-1920w.jpg" />
          <q-carousel-slide :name="4"
            img-src="https://lirp.cdn-website.com/ae259823/dms3rep/multi/opt/AQUAMARE-110-1920w.jpg" />
        </q-carousel>

      </div>

      <div class="contenidoDescriptivo">
        <h4>Estándar</h4>
        <br>
        <p>Habitación Estándar con cama de matrimonio,
          o dos camas, ideal para dos Personas.</p>

        <div class="iconosHabitacion">

          <div class="informacionHabitacion">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" id="1347896792" class="svg u_1347896792"
              data-icon-name="general_double_bed">
              <path
                d="M83.94,74H16.06A1.1,1.1,0,0,1,15,72.91v-17a1.1,1.1,0,0,1,1.09-1.09H83.94A1.1,1.1,0,0,1,85,55.92v17A1.1,1.1,0,0,1,83.94,74ZM17.15,71.82h65.7V57H17.15Z">
              </path>
              <path
                d="M83.94,56.82a1.1,1.1,0,0,1-1.09-1.09v-.93a9,9,0,0,0-9-9H26.18a9,9,0,0,0-9,9v.93a1.09,1.09,0,1,1-2.19,0v-.93A11.23,11.23,0,0,1,26.18,43.58H73.82A11.23,11.23,0,0,1,85,54.79v.93A1.1,1.1,0,0,1,83.94,56.82Z">
              </path>
              <path
                d="M46.24,45.77H24.68a3.29,3.29,0,0,1-3.28-3.28V40a3.29,3.29,0,0,1,3.28-3.28H46.24A3.29,3.29,0,0,1,49.53,40v2.47A3.29,3.29,0,0,1,46.24,45.77ZM24.68,38.91A1.1,1.1,0,0,0,23.59,40v2.47a1.1,1.1,0,0,0,1.09,1.09H46.24a1.1,1.1,0,0,0,1.09-1.09V40a1.1,1.1,0,0,0-1.09-1.09Z">
              </path>
              <path
                d="M75.32,45.77H53.76a3.29,3.29,0,0,1-3.28-3.28V40a3.29,3.29,0,0,1,3.28-3.28H75.32A3.29,3.29,0,0,1,78.6,40v2.47A3.29,3.29,0,0,1,75.32,45.77ZM53.76,38.91A1.1,1.1,0,0,0,52.66,40v2.47a1.1,1.1,0,0,0,1.09,1.09H75.32a1.1,1.1,0,0,0,1.09-1.09V40a1.1,1.1,0,0,0-1.09-1.09Z">
              </path>
              <path
                d="M23.76,81.73H19.54a1.1,1.1,0,0,1-1.09-1.09V72.91a1.1,1.1,0,0,1,1.09-1.09h4.22a1.1,1.1,0,0,1,1.09,1.09v7.72A1.1,1.1,0,0,1,23.76,81.73Zm-3.12-2.19h2V74h-2Z">
              </path>
              <path
                d="M80.46,81.73H76.24a1.1,1.1,0,0,1-1.09-1.09V72.91a1.1,1.1,0,0,1,1.09-1.09h4.22a1.1,1.1,0,0,1,1.09,1.09v7.72A1.1,1.1,0,0,1,80.46,81.73Zm-3.12-2.19h2V74h-2Z">
              </path>
            </svg>
            <p>Cama doble/dos camas</p>
          </div>

          <div class="informacionHabitacion">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 70 70" id="1169184026" class="svg u_1169184026"
              data-icon-name="wp-network">
              <g>
                <circle cx="38.3" cy="51.5" r="2"></circle>
                <path
                  d="M56.5,34.3c-0.3,0-0.5-0.1-0.7-0.3c-4.7-4.6-10.9-7.1-17.5-7.1c-6.6,0-12.8,2.5-17.5,7.1c-0.4,0.4-1,0.4-1.4,0
		                   c-0.4-0.4-0.4-1,0-1.4c5.1-5,11.8-7.7,18.9-7.7c7.1,0,13.8,2.7,18.9,7.7c0.4,0.4,0.4,1,0,1.4C57,34.2,56.8,34.3,56.5,34.3z">
                </path>
                <path
                  d="M62.3,28.3c-0.3,0-0.5-0.1-0.7-0.3c-6.3-6.1-14.6-9.5-23.3-9.5S21.3,21.9,15,28c-0.4,0.4-1,0.4-1.4,0c-0.4-0.4-0.4-1,0-1.4
	                  	c6.7-6.5,15.4-10.1,24.7-10.1c9.3,0,18,3.6,24.7,10.1c0.4,0.4,0.4,1,0,1.4C62.8,28.2,62.6,28.3,62.3,28.3z">
                </path>
                <path
                  d="M50.7,40.2c-0.3,0-0.5-0.1-0.7-0.3c-3.1-3.1-7.3-4.8-11.7-4.8c-4.4,0-8.5,1.7-11.7,4.8c-0.4,0.4-1,0.4-1.4,0
	                 	 c-0.4-0.4-0.4-1,0-1.4c3.5-3.4,8.2-5.3,13.1-5.3c4.9,0,9.5,1.9,13.1,5.3c0.4,0.4,0.4,1,0,1.4C51.2,40.1,50.9,40.2,50.7,40.2z">
                </path>
                <path
                  d="M44.9,46.2c-0.3,0-0.5-0.1-0.7-0.3c-1.6-1.5-3.7-2.4-5.9-2.4c-2.2,0-4.3,0.8-5.9,2.4c-0.4,0.4-1,0.4-1.4,0
	                  	c-0.4-0.4-0.4-1,0-1.4c2-1.9,4.5-3,7.2-3c2.7,0,5.3,1,7.2,3c0.4,0.4,0.4,1,0,1.4C45.4,46.1,45.1,46.2,44.9,46.2z">
                </path>
              </g>
            </svg>
            <p>Wifi</p>
          </div>
          <div class="informacionHabitacion">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 70 70" id="1881503726" class="svg u_1881503726"
              data-icon-name="wp-user_profile">
              <g>
                <path
                  d="M60,60H10v-1c0-2.6,0.5-10.1,3-12.7c1.9-2,9.5-7.3,22.1-7.3c12.5,0,20.2,5.3,22.1,7.3c2.4,2.6,3,10,3,12.7V60z">
                </path>
                <path d="M35,36c-7.2,0-13-5.8-13-13s5.8-13,13-13s13,5.8,13,13S42.2,36,35,36z"></path>
              </g>
            </svg>
            <p>2 máximo</p>
          </div>
        </div>

        <!-- <q-rating v-model="stars" :max="5" size="32px" /><br> <br>
      -->
        <div
          style="display: grid; width: 100%; grid-template-columns: repeat(1,1fr); justify-content: center; margin-left: auto; margin-right: auto; align-items: center;">
          <span style="text-align: center; font-size: 20px;"> <strong>ver más</strong></span>
          <q-btn color="grey" round flat dense :icon="expanded1 ? 'keyboard_arrow_up' : 'keyboard_arrow_down'"
            @click="expanded1 = !expanded1" />

          <div v-show="expanded1">
            <q-separator />
            <q-card-section class="text-subtitle2">
              <p>
                <strong>Las habitaciones cuentan con:</strong> <br>
                Televisor Full HD <br>
                Nevera pequeña <br>
                Escritorio <br>
                Wifi <br>
              </p>
              <hr>
            </q-card-section>
          </div>
        </div><br>
        <button>Reservar</button>
      </div>
    </div>



    <div class="Habitaciones">
      <div class="q-pa-md">
        <q-carousel animated v-model="slide2" navigation infinite :autoplay="autoplay" arrows
          transition-prev="slide-right" transition-next="slide-left" @mouseenter="autoplay = false"
          @mouseleave="autoplay = true">
          <q-carousel-slide :name="1"
            img-src="	https://lirp.cdn-website.com/ae259823/dms3rep/multi/opt/AQUAMARE-104-c0f74d06-1920w.jpg" />
          <q-carousel-slide :name="2"
            img-src="	https://lirp.cdn-website.com/ae259823/dms3rep/multi/opt/AQUAMARE-106-1920w.jpg" />
          <q-carousel-slide :name="3"
            img-src="	https://lirp.cdn-website.com/ae259823/dms3rep/multi/opt/AQUAMARE-110-1920w.jpg" />
        </q-carousel>
      </div>
      <div class="contenidoDescriptivo">
        <h4>Junior Suite</h4>
        <br>
        <p>Habitación de dos camas dobles o full King size para disfrutar de una encantadora
          vista hacia la isla, con capacidad para cuatro personas.</p>
        <br>
        <div class="iconosHabitacion">

          <div class="informacionHabitacion">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" id="1347896792" class="svg u_1347896792"
              data-icon-name="general_double_bed">
              <path
                d="M83.94,74H16.06A1.1,1.1,0,0,1,15,72.91v-17a1.1,1.1,0,0,1,1.09-1.09H83.94A1.1,1.1,0,0,1,85,55.92v17A1.1,1.1,0,0,1,83.94,74ZM17.15,71.82h65.7V57H17.15Z">
              </path>
              <path
                d="M83.94,56.82a1.1,1.1,0,0,1-1.09-1.09v-.93a9,9,0,0,0-9-9H26.18a9,9,0,0,0-9,9v.93a1.09,1.09,0,1,1-2.19,0v-.93A11.23,11.23,0,0,1,26.18,43.58H73.82A11.23,11.23,0,0,1,85,54.79v.93A1.1,1.1,0,0,1,83.94,56.82Z">
              </path>
              <path
                d="M46.24,45.77H24.68a3.29,3.29,0,0,1-3.28-3.28V40a3.29,3.29,0,0,1,3.28-3.28H46.24A3.29,3.29,0,0,1,49.53,40v2.47A3.29,3.29,0,0,1,46.24,45.77ZM24.68,38.91A1.1,1.1,0,0,0,23.59,40v2.47a1.1,1.1,0,0,0,1.09,1.09H46.24a1.1,1.1,0,0,0,1.09-1.09V40a1.1,1.1,0,0,0-1.09-1.09Z">
              </path>
              <path
                d="M75.32,45.77H53.76a3.29,3.29,0,0,1-3.28-3.28V40a3.29,3.29,0,0,1,3.28-3.28H75.32A3.29,3.29,0,0,1,78.6,40v2.47A3.29,3.29,0,0,1,75.32,45.77ZM53.76,38.91A1.1,1.1,0,0,0,52.66,40v2.47a1.1,1.1,0,0,0,1.09,1.09H75.32a1.1,1.1,0,0,0,1.09-1.09V40a1.1,1.1,0,0,0-1.09-1.09Z">
              </path>
              <path
                d="M23.76,81.73H19.54a1.1,1.1,0,0,1-1.09-1.09V72.91a1.1,1.1,0,0,1,1.09-1.09h4.22a1.1,1.1,0,0,1,1.09,1.09v7.72A1.1,1.1,0,0,1,23.76,81.73Zm-3.12-2.19h2V74h-2Z">
              </path>
              <path
                d="M80.46,81.73H76.24a1.1,1.1,0,0,1-1.09-1.09V72.91a1.1,1.1,0,0,1,1.09-1.09h4.22a1.1,1.1,0,0,1,1.09,1.09v7.72A1.1,1.1,0,0,1,80.46,81.73Zm-3.12-2.19h2V74h-2Z">
              </path>
            </svg>
            <p>2 camas dobles/king</p>
          </div>

          <div class="informacionHabitacion">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 70 70" id="1169184026" class="svg u_1169184026"
              data-icon-name="wp-network">
              <g>
                <circle cx="38.3" cy="51.5" r="2"></circle>
                <path
                  d="M56.5,34.3c-0.3,0-0.5-0.1-0.7-0.3c-4.7-4.6-10.9-7.1-17.5-7.1c-6.6,0-12.8,2.5-17.5,7.1c-0.4,0.4-1,0.4-1.4,0
c-0.4-0.4-0.4-1,0-1.4c5.1-5,11.8-7.7,18.9-7.7c7.1,0,13.8,2.7,18.9,7.7c0.4,0.4,0.4,1,0,1.4C57,34.2,56.8,34.3,56.5,34.3z">
                </path>
                <path d="M62.3,28.3c-0.3,0-0.5-0.1-0.7-0.3c-6.3-6.1-14.6-9.5-23.3-9.5S21.3,21.9,15,28c-0.4,0.4-1,0.4-1.4,0c-0.4-0.4-0.4-1,0-1.4
c6.7-6.5,15.4-10.1,24.7-10.1c9.3,0,18,3.6,24.7,10.1c0.4,0.4,0.4,1,0,1.4C62.8,28.2,62.6,28.3,62.3,28.3z"></path>
                <path
                  d="M50.7,40.2c-0.3,0-0.5-0.1-0.7-0.3c-3.1-3.1-7.3-4.8-11.7-4.8c-4.4,0-8.5,1.7-11.7,4.8c-0.4,0.4-1,0.4-1.4,0
c-0.4-0.4-0.4-1,0-1.4c3.5-3.4,8.2-5.3,13.1-5.3c4.9,0,9.5,1.9,13.1,5.3c0.4,0.4,0.4,1,0,1.4C51.2,40.1,50.9,40.2,50.7,40.2z">
                </path>
                <path d="M44.9,46.2c-0.3,0-0.5-0.1-0.7-0.3c-1.6-1.5-3.7-2.4-5.9-2.4c-2.2,0-4.3,0.8-5.9,2.4c-0.4,0.4-1,0.4-1.4,0
c-0.4-0.4-0.4-1,0-1.4c2-1.9,4.5-3,7.2-3c2.7,0,5.3,1,7.2,3c0.4,0.4,0.4,1,0,1.4C45.4,46.1,45.1,46.2,44.9,46.2z"></path>
              </g>
            </svg>
            <p>Wifi</p>
          </div>
          <div class="informacionHabitacion">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 70 70" id="1881503726" class="svg u_1881503726"
              data-icon-name="wp-user_profile">
              <g>
                <path
                  d="M60,60H10v-1c0-2.6,0.5-10.1,3-12.7c1.9-2,9.5-7.3,22.1-7.3c12.5,0,20.2,5.3,22.1,7.3c2.4,2.6,3,10,3,12.7V60z">
                </path>
                <path d="M35,36c-7.2,0-13-5.8-13-13s5.8-13,13-13s13,5.8,13,13S42.2,36,35,36z"></path>
              </g>
            </svg>
            <p>4 máximo</p>
          </div>
        </div>

        <!-- <q-rating v-model="stars" :max="5" size="32px" /><br> <br>
-->
        <div
          style="display: grid; width: 100%; grid-template-columns: repeat(1,1fr); justify-content: center; margin-left: auto; margin-right: auto; align-items: center;">
          <span style="text-align: center; font-size: 20px;"> <strong>ver más</strong></span>
          <q-btn color="grey" round flat dense :icon="expanded2 ? 'keyboard_arrow_up' : 'keyboard_arrow_down'"
            @click="expanded2 = !expanded2" />

          <div v-show="expanded2">
            <q-separator />
            <q-card-section class="text-subtitle2">
              <p>
                <strong>Las habitaciones cuentan con:</strong> <br>
                Televisor Full HD <br>
                Nevera pequeña <br>
                Escritorio <br>
                Wifi <br>
                Aire acondicionado con control individual <br>
                Secador de pelo <br>
                Sala de estar <br>
                Vista exterior del balcón <br>

              </p>
              <hr>
            </q-card-section>
          </div>
        </div><br>
        <button>Reservar</button>

      </div>
    </div>


    <div class="Habitaciones">
      <div class="q-pa-md">
        <q-carousel animated v-model="slide3" navigation infinite :autoplay="autoplay" arrows
          transition-prev="slide-right" transition-next="slide-left" class="black" @mouseenter="autoplay = false"
          @mouseleave="autoplay = true">
          <q-carousel-slide :name="1"
            img-src="https://lirp.cdn-website.com/ae259823/dms3rep/multi/opt/AQUAMARE-111-0b5b304d-1920w.jpg" />
          <q-carousel-slide :name="2"
            img-src="https://lirp.cdn-website.com/ae259823/dms3rep/multi/opt/AQUAMARE-112-1920w.jpg" />
          <q-carousel-slide :name="3"
            img-src="https://lirp.cdn-website.com/ae259823/dms3rep/multi/opt/AQUAMARE-114-a83a8867-1920w.jpg" />
          <q-carousel-slide :name="4"
            img-src="https://lirp.cdn-website.com/ae259823/dms3rep/multi/opt/AQUAMARE-113-94a4e0dd-1920w.jpg" />
          <q-carousel-slide :name="5"
            img-src="	https://lirp.cdn-website.com/ae259823/dms3rep/multi/opt/AQUAMARE-115-1920w.jpg" />
        </q-carousel>

      </div>
      <div class="contenidoDescriptivo">
        <h4>Corner Suite Balcón Vista Exterior</h4>
        <br>
        <p>Despierta desde Córner Suite con la más bella vista
          al mar de los siete colores sintiendo la brisa y la tranquilidad isleña
        </p>
        <br>
        <div class="iconosHabitacion">

          <div class="informacionHabitacion">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" id="1347896792" class="svg u_1347896792"
              data-icon-name="general_double_bed">
              <path
                d="M83.94,74H16.06A1.1,1.1,0,0,1,15,72.91v-17a1.1,1.1,0,0,1,1.09-1.09H83.94A1.1,1.1,0,0,1,85,55.92v17A1.1,1.1,0,0,1,83.94,74ZM17.15,71.82h65.7V57H17.15Z">
              </path>
              <path
                d="M83.94,56.82a1.1,1.1,0,0,1-1.09-1.09v-.93a9,9,0,0,0-9-9H26.18a9,9,0,0,0-9,9v.93a1.09,1.09,0,1,1-2.19,0v-.93A11.23,11.23,0,0,1,26.18,43.58H73.82A11.23,11.23,0,0,1,85,54.79v.93A1.1,1.1,0,0,1,83.94,56.82Z">
              </path>
              <path
                d="M46.24,45.77H24.68a3.29,3.29,0,0,1-3.28-3.28V40a3.29,3.29,0,0,1,3.28-3.28H46.24A3.29,3.29,0,0,1,49.53,40v2.47A3.29,3.29,0,0,1,46.24,45.77ZM24.68,38.91A1.1,1.1,0,0,0,23.59,40v2.47a1.1,1.1,0,0,0,1.09,1.09H46.24a1.1,1.1,0,0,0,1.09-1.09V40a1.1,1.1,0,0,0-1.09-1.09Z">
              </path>
              <path
                d="M75.32,45.77H53.76a3.29,3.29,0,0,1-3.28-3.28V40a3.29,3.29,0,0,1,3.28-3.28H75.32A3.29,3.29,0,0,1,78.6,40v2.47A3.29,3.29,0,0,1,75.32,45.77ZM53.76,38.91A1.1,1.1,0,0,0,52.66,40v2.47a1.1,1.1,0,0,0,1.09,1.09H75.32a1.1,1.1,0,0,0,1.09-1.09V40a1.1,1.1,0,0,0-1.09-1.09Z">
              </path>
              <path
                d="M23.76,81.73H19.54a1.1,1.1,0,0,1-1.09-1.09V72.91a1.1,1.1,0,0,1,1.09-1.09h4.22a1.1,1.1,0,0,1,1.09,1.09v7.72A1.1,1.1,0,0,1,23.76,81.73Zm-3.12-2.19h2V74h-2Z">
              </path>
              <path
                d="M80.46,81.73H76.24a1.1,1.1,0,0,1-1.09-1.09V72.91a1.1,1.1,0,0,1,1.09-1.09h4.22a1.1,1.1,0,0,1,1.09,1.09v7.72A1.1,1.1,0,0,1,80.46,81.73Zm-3.12-2.19h2V74h-2Z">
              </path>
            </svg>
            <p> Cama doble/king size</p>
          </div>

          <div class="informacionHabitacion">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 70 70" id="1169184026" class="svg u_1169184026"
              data-icon-name="wp-network">
              <g>
                <circle cx="38.3" cy="51.5" r="2"></circle>
                <path
                  d="M56.5,34.3c-0.3,0-0.5-0.1-0.7-0.3c-4.7-4.6-10.9-7.1-17.5-7.1c-6.6,0-12.8,2.5-17.5,7.1c-0.4,0.4-1,0.4-1.4,0
c-0.4-0.4-0.4-1,0-1.4c5.1-5,11.8-7.7,18.9-7.7c7.1,0,13.8,2.7,18.9,7.7c0.4,0.4,0.4,1,0,1.4C57,34.2,56.8,34.3,56.5,34.3z">
                </path>
                <path d="M62.3,28.3c-0.3,0-0.5-0.1-0.7-0.3c-6.3-6.1-14.6-9.5-23.3-9.5S21.3,21.9,15,28c-0.4,0.4-1,0.4-1.4,0c-0.4-0.4-0.4-1,0-1.4
c6.7-6.5,15.4-10.1,24.7-10.1c9.3,0,18,3.6,24.7,10.1c0.4,0.4,0.4,1,0,1.4C62.8,28.2,62.6,28.3,62.3,28.3z"></path>
                <path
                  d="M50.7,40.2c-0.3,0-0.5-0.1-0.7-0.3c-3.1-3.1-7.3-4.8-11.7-4.8c-4.4,0-8.5,1.7-11.7,4.8c-0.4,0.4-1,0.4-1.4,0
c-0.4-0.4-0.4-1,0-1.4c3.5-3.4,8.2-5.3,13.1-5.3c4.9,0,9.5,1.9,13.1,5.3c0.4,0.4,0.4,1,0,1.4C51.2,40.1,50.9,40.2,50.7,40.2z">
                </path>
                <path d="M44.9,46.2c-0.3,0-0.5-0.1-0.7-0.3c-1.6-1.5-3.7-2.4-5.9-2.4c-2.2,0-4.3,0.8-5.9,2.4c-0.4,0.4-1,0.4-1.4,0
c-0.4-0.4-0.4-1,0-1.4c2-1.9,4.5-3,7.2-3c2.7,0,5.3,1,7.2,3c0.4,0.4,0.4,1,0,1.4C45.4,46.1,45.1,46.2,44.9,46.2z"></path>
              </g>
            </svg>
            <p>Wifi</p>
          </div>
          <div class="informacionHabitacion">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 70 70" id="1881503726" class="svg u_1881503726"
              data-icon-name="wp-user_profile">
              <g>
                <path
                  d="M60,60H10v-1c0-2.6,0.5-10.1,3-12.7c1.9-2,9.5-7.3,22.1-7.3c12.5,0,20.2,5.3,22.1,7.3c2.4,2.6,3,10,3,12.7V60z">
                </path>
                <path d="M35,36c-7.2,0-13-5.8-13-13s5.8-13,13-13s13,5.8,13,13S42.2,36,35,36z"></path>
              </g>
            </svg>
            <p>4 máximo</p>
          </div>
        </div>

        <!-- <q-rating v-model="stars" :max="5" size="32px" /><br> <br>
-->
        <div
          style="display: grid; width: 100%; grid-template-columns: repeat(1,1fr); justify-content: center; margin-left: auto; margin-right: auto; align-items: center;">
          <span style="text-align: center; font-size: 20px;"> <strong>ver más</strong></span>
          <q-btn color="grey" round flat dense :icon="expanded3 ? 'keyboard_arrow_up' : 'keyboard_arrow_down'"
            @click="expanded3 = !expanded3" />

          <div v-show="expanded3">
            <q-separator />
            <q-card-section class="text-subtitle2">
              <p>
                <strong>Las habitaciones cuentan con:</strong> <br>
                Amplio balcón con vista al marb <br>
                Córner Suite cama King Size (2,00) <br>
                TV 55" full HD <br>
                Nevera pequeña <br>
                Escritorio <br>
                Wifi <br>
                Teléfono <br>
                Aire acondicionado con control individual <br>
                Caja de seguridad <br>
                Agua caliente <br>
                Secador de cabello <br>
                Sala de estar <br>

              </p>
              <hr>
            </q-card-section>
          </div>
        </div><br>
        <button>Reservar</button>
      </div>
    </div>



  </div>
</template>


<script setup>

import { ref } from 'vue'
let slide1 = ref(2)
let slide2 = ref(1)
let slide3 = ref(1)
let expanded1 = ref(false)
let expanded2 = ref(false)
let expanded3 = ref(false)
// const lorem = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
let autoplay = ref(true)





</script>


<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.q-pa-md{
  padding: 0px;
}

.informacionResumida {
  display: grid;
  margin-top: 60px;
  width: 50%;
  text-align: center;
  margin-left: auto;
  margin-right: auto;
  font-family: cursive;

}

.informacionResumida p {
  margin-top: 20px;
  margin-bottom: 40px;
  font-family: cursive;
}

.my-card {
  display: flex;
  width: 100%;
  height: 60vh;
  justify-content: center;

}

.custom-title {
  font-size: 4.5rem;
  /*  Ajusta el tamaño según tus necesidades */
  font-weight: bold;
  /* Opcional: para hacer el texto más grueso */
}

.Habitaciones {
  width: 90%;
  display: flex;
  /* text-align: center; */
  /* align-content: center */
  margin-left: auto;
  margin-right: auto
}

.iconosHabitacion {
  display: grid;
  grid-gap: 20px;
  text-align: center;
  grid-template-columns: repeat(3, 1fr);

}

.contenidoDescriptivo {
  width: 80%;
  margin: 0 auto;

  /* align-content: center; */
}

.contenidoDescriptivo svg {
  width: 50%;
  font-family: cursive;
}

.contenidoDescriptivo h4 {
  text-align: center;
  font-family: cursive;

}

.contenidoDescriptivo {
  text-align: justify;
  padding: 2% 4%;
}

.scroll p {
  width: 100%;
  /* Ancho del contenedor */
  height: 9em;
  /* Altura del contenedor */
  overflow-y: scroll;
}


button {
  margin: 5px;
}

.Caracteristicas img {
  width: 100%;
}

@media (max-width:500px) {
  .Habitaciones {
    flex-wrap: wrap;
  }

  .informacionResumida {
    width: 100%;
    margin-top: 90px;

  }

  .informacionResumida h2 {
    font-size: 50px;
    display: grid;
    margin: 0 auto;

  }

  .informacionResumida p {
    padding: auto;
  }
  .contenidoDescriptivo {
    width: 95%;
  }
}
</style>