<template>
    <div>
        <h1>Contador</h1>
        <p>El valor del contador es: {{ contador }}</p>
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