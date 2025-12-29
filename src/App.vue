<script setup lang="ts">

//import { ref } from 'vue';
import { crearRuta } from './Functions/CrearRuta';
import { ReadFiles } from './Functions/ReadFiles';

</script>

<template>
  <main>
    <div>
      <button v-on:click="crearRuta()"> Presioname</button>
    </div>
    <div>
      <button v-on:click="ReadFiles">
        Selecciona imagenes a Plasmar: 
      </button>
    </div>
    <p>Webo</p>
  </main>
</template>

<style scoped>

</style>