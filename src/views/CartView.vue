<script setup>
import { useStore } from "../store/index.js";

const store = useStore();
</script>

<template>
  <h1 class="head">Cart</h1>
  <div class="note" v-if="store.cart.size === 0" >
    Your Cart Is Currently Empty.
  </div>
  <div class="page" v-else>
    <div v-for="movie in Array.from(store.cart.values())">
      <img :src="`https://image.tmdb.org/t/p/w500${movie.poster}`" />
      <h1>{{ movie.title }}</h1>
      <button @click="store.removeFromCart(movie.id)">Remove</button>
    </div>
  </div>
</template>

<style scoped>
.head {
  position: absolute;
  font-size: 3vw;
  margin-left: 25px;
  margin-top: 15px;
  color: rgb(240, 199, 52);
}

.page {
  margin-top: 150px;
  margin-left: 3rem;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
}

img {
  width: 300px;
  aspect-ratio: 2 / 3;
  margin-left: 10rem;
  margin-top: 100px;
}

h1 {
  color: white;
  text-align: center;
}

button {
  position: absolute;
  text-align: center;
  background-color: rgb(240, 199, 52);
  width: 80px;
  height: 40px;
  margin-left: 17rem;
  font-size: 15px;
  font-weight: bold;
  color: black;
  border-radius: 10px;
}

button:hover {
  cursor: pointer;
  opacity: 0.7;
}

.note {
  position: absolute;
  color: white;
  text-align: center;
  margin-top: 50vh;
  margin-left: 38.5vw;
  font-size: 2vw;
}
</style>
