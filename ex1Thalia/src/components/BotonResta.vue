<template>
    <button @click="decrementar">-</button>
</template>

<script setup>
import { ref } from 'vue'
import { provide, inject } from 'vue'
const contador=inject('contador')
const decrementar = () => contador.value--
</script>