<script setup>
import productList from '@/assets/productos.json'
import { RouterLink } from 'vue-router'
</script>

<template>
    <p>Esto es una lista de productos:</p>
    <ul>
        <li v-for="product in productList" :key="product.id">
            <RouterLink :to="'/Exercici1/' + product.id">{{ product.name }}</RouterLink>
        </li>
    </ul>
</template>

<style scoped></style>