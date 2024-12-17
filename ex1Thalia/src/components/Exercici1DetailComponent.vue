<script setup>
import products from '../assets/productos.json'
</script>

<template>
    <h1>Detalle del producto</h1>
    <p>{{ $route.params.id }}</p>
    <p>{{ products[$route.params.id - 1].name }}</p>
    <p>{{ products[$route.params.id - 1].description }}</p>
</template>

<style></style>