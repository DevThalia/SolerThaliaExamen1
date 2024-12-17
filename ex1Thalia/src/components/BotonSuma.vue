<template>
    <button @click="incrementar">+</button>
</template>

<script setup>
import { ref } from 'vue'
import { provide, inject } from 'vue'
const contador=inject('contador')
const incrementar = () => contador.value++
</script>