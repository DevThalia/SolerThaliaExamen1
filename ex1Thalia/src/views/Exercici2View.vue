<!-- Implementa un sistema de comptador (ruta /exercici2)
Crea un comptador amb un botó per incrementar el valor i un altre per restar-lo.
Utilitza provide i inject per compartir el valor del comptador i les funcions d'increment i decrement entre un component pare i dos components fills (botó sumar i botó restar).
-->

<template>
    <div>
        <h1>Contador</h1>
        <p>{{ contador }}</p>
        <BotonSuma />
        <BotonResta />
    </div>
</template>

<script setup>
import { ref } from 'vue'
import { provide, inject } from 'vue'
import BotonSuma from '@/components/BotonSuma.vue'
import BotonResta from '@/components/BotonResta.vue'
const contador = ref(0)
provide('contador', contador)

</script>