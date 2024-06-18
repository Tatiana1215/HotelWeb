<!-- <template>
<div>
    <h2>hello2</h2>
</div>
</template>

<script setup>
</script>

<style>
</style> -->
<template>
    <div class="welcome-page">
      <!-- Encabezado -->
      <header class="header">
        <h1>Bienvenido a Hotel Paradise</h1>
        <p>Descubre una experiencia única de hospedaje y relajación</p>
        <router-link to="/reservas" class="btn-reserva">Reservar Ahora</router-link>
      </header>
  
      <!-- Sección de Imágenes Atractivas -->
      <section class="imagenes-atractivas">
        <h2>Explora Nuestras Instalaciones</h2>
        <div class="galeria">
          <div class="imagen" v-for="(imagen, index) in imagenes" :key="index">
            <img :src="imagen.url" :alt="imagen.descripcion">
          </div>
        </div>
      </section>
  
      <!-- Sección de Servicios Destacados -->
      <section class="servicios-destacados">
        <h2>Servicios Destacados</h2>
        <ul>
          <li>Piscinas al Aire Libre</li>
          <li>Restaurantes de Alta Cocina</li>
          <li>Spa y Tratamientos de Belleza</li>
          <!-- Agrega más servicios según sea necesario -->
        </ul>
      </section>
  
      <!-- Llamado a la Acción -->
      <section class="llamado-accion">
        <h2>¡Haz que tus Sueños se Hagan Realidad!</h2>
        <p>Explora más sobre nuestro hotel y reserva tu próxima escapada hoy mismo.</p>
        <router-link to="/habitaciones" class="btn-explorar">Explorar Ahora</router-link>
      </section>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        imagenes: [
          { url: 'piscina.jpg', descripcion: 'Piscina al Aire Libre' },
          { url: 'restaurante.jpg', descripcion: 'Restaurante de Alta Cocina' },
          { url: 'spa.jpg', descripcion: 'Spa y Tratamientos de Belleza' }
          // Agrega más imágenes según sea necesario
        ]
      }
    }
  }
  </script>
  
  <style scoped>
  /* Estilos CSS para la página de inicio */
  .header {
    text-align: center;
    padding: 50px 0;
  }
  
  .btn-reserva, .btn-explorar {
    background-color: #007bff;
    color: white;
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    text-decoration: none;
  }
  
  .imagenes-atractivas {
    text-align: center;
    padding: 50px 0;
  }
  
  .galeria {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
  }
  
  .imagen {
    margin: 10px;
  }
  
  .imagen img {
    width: 300px;
    border-radius: 5px;
  }
  
  .servicios-destacados {
    text-align: center;
    padding: 50px 0;
  }
  
  .llamado-accion {
    text-align: center;
    padding: 50px 0;
  }
  </style>
  

