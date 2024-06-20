<template>
  <div id="contenedor">
    <q-layout view="hHh LpR fFf">

<q-header elevated class="bg-black text-white" height-hint="98" >
  <q-toolbar >
    <q-toolbar-title class="q-mx-auto">
      <q-avatar>
        <img src="https://cdn.quasar.dev/logo-v2/svg/logo-mono-white.svg">
      </q-avatar>
      Verano Azul
    </q-toolbar-title>
  </q-toolbar>
<div class="q-mx-auto" >
  <q-tabs align="left"  >
    <q-route-tab to="/" label="Home" />
    <q-route-tab to="/Habitaciones" label="Habitaciones"/>
    <q-route-tab to="/Contactos" label="Contactos" />
    <q-route-tab to="/DeportesExtremos" label="Deportes Extremos" />
    <q-route-tab to="/Servicios" label="Servicios" />

  </q-tabs>
</div>
</q-header>

<q-page-container>
  <router-view />
</q-page-container>

</q-layout>
</div>

</template>

<script setup>
</script>

<style>
.q-mx-auto{
  display: flex;
  justify-content: center;
}
</style>
