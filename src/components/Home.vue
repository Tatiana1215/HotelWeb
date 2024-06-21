<template>
<div>
<div class="portada">
    <div id="imagenPortada" 
    style=" background-image:
     url('https://stories.forbestravelguide.com/wp-content/uploads/2023/03/HERO-RafflesHotelSingapore-CreditRafflesHotelSingapore.jpg');">
     <!-- <h1>Bienvenidos a Nuestro Hotel Verano Azul</h1> -->
     
    </div>
</div>
</div>
</template>

<script setup>

</script>

<style>
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
.portada img{
    width: 100%;
    height: 50%;
}

#imagenPortada{
    /* background-size: cover;  */
   background-position: center center; 
  background-repeat: no-repeat;
  width: 100%;
  height: 100vh;  
} 
#imagenPortada h1{
    text-align: center;
    align-items: center;
     text-shadow: 5px 10px 4px white;
     width: 80%;
     position: relative;
    top: 30%;
    margin-right: auto;
    margin-left: auto;
   
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
/* .servicios{
    display: flex;
    width: 90%;
    margin-right: auto;
    margin-left: auto;
} */
#sevicioEspecial{
    display: flex; 
    width: 80%;
    align-items: center;
    margin-right: auto;
    margin-left: auto;
}
</style>