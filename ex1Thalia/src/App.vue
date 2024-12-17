<template>
  <nav id="nav">
    <router-link to="/">Home</router-link>
    <router-link to="/exercici1">Exercici 1: Productes</router-link>
    <router-link to="/exercici2">Exercici 2: Comptador</router-link>
    <router-link to="/exercici3">Exercici 3: Usuaris</router-link>
  </nav>
  <div class="container">
    <RouterView />
  </div>
</template>