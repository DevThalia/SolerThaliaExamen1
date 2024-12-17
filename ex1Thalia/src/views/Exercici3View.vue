<template>
    <h1>Lista de usuarios</h1>
    <input type="text" v-model="texto" />
    <ul>
        <li v-for="usuario in usuariosFiltrados" :key="usuario.id">
            {{ usuario.nombre }}
        </li>
    </ul>
</template>

<script setup>
import { ref, computed, watch } from 'vue'

const texto = ref('')
watch(texto, (newValue, oldValue) => {
    console.log('Texto actual:', newValue)
    console.log('Texto anterior:', oldValue)
})

const usuarios = ref([
    { id: 1, nombre: 'Juan', edad: 25 },
    { id: 2, nombre: 'Ana', edad: 30 },
    { id: 3, nombre: 'Luis', edad: 35 }
])

const usuariosFiltrados = computed(() => {
    return usuarios.value.filter(usuario => usuario.nombre.toLowerCase().includes(texto.value.toLowerCase()))
})  
</script>
