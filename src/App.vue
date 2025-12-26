<script setup lang="ts">

//import { ref } from 'vue';
import { crearArchivo } from './Functions/Filehandler';
import { Existe } from './Functions/existe';

const a = "sexito";
const b = "sexote";

async function CarpetayArchivo(Nombre:string) {
 await Existe(Nombre);
 await crearArchivo (a, b);
}

</script>

<template>
  <main>
    <div>
      <button v-on:click="CarpetayArchivo('Test1')"> Presioname</button>
    </div>
  </main>
</template>

<style scoped>

</style>