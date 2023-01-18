<script setup>
import axios from "axios"
import { useStore } from '../store/index.js'

const store = useStore();
const props = defineProps(["id"]);
const emits = defineEmits(["toggleModal"]);

let modalData =
  (await axios.get(`https://api.themoviedb.org/3/movie/${props.id}`, {
    params: {
      api_key: "e8016904e176c4cc2f25acfd19077f5c",
    }
  })).data;
console.log(store.cart)
</script>

<template>
  <Teleport to="body">
    <div class="modal-outer-container" @click.self="emits('toggleModal')">
      <div class="modal-inner-container">
        <button class="close-button" @click="emits('toggleModal')">X</button>
        <h1>{{ modalData.title }}</h1>
        <img :src="`https://image.tmdb.org/t/p/w500${modalData.poster_path}`" />
        <p1>Release Date: {{ modalData.release_date }}</p1>
        <p2>Run Time: {{ modalData.runtime }} mins</p2>
        <p3>Average Vote: {{ modalData.vote_average }}</p3>
        <p4>Vote Count: {{ modalData.vote_count }}</p4>
        <p5>{{ modalData.overview }}</p5>
        <button class="buy-button" @click="store.addToCart(props.id, {
          poster: `https://image.tmdb.org/t/p/w500${modalData.poster_path}`,
          title: modalData.title
        })">Purchase</button>
      </div>
    </div>
  </Teleport>
</template>


<style scoped>
.modal-outer-container {
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.701);
  z-index: 3;
}
.modal-inner-container {
  margin-left: 19vw;
  margin-top: 235px;
  background-color: rgb(61, 61, 61);
  width: 800px;
  height: 400px;
  color: white;
}
.modal-outer-container .modal-inner-container .close-button {
  position: absolute;
  right: 240px;
  padding: 10px;
  border: none;
  background: rgba(0, 0, 0, 0);
  font-weight: bold;
  font-size: 2vw;
  color: rgb(240, 199, 52);
}
.close-button, .buy-button:hover {
  cursor: pointer;
}
h1 {
  text-align: center;
  padding: 10px;
}
img {
  position: absolute;
  margin-left: 15px;
  width: 16.5vw;
  aspect-ratio: 9/14;
}
p1 {
  position: absolute;
  margin-left: 250px;
  margin-top: 15px;
}
p2 {
  position: absolute;
  margin-left: 590px;
  margin-top: 15px;
}
p3 {
  position: absolute;
  margin-left: 250px;
  margin-top: 65px;
}
p4 {
  position: absolute;
  margin-left: 590px;
  margin-top: 65px;
}
p5 {
  position: absolute;
  margin-left: 250px;
  margin-right: 300px;
  margin-top: 120px;
}
.buy-button {
  position: absolute;
  margin-left: 450px;
  margin-top: 260px;
  border-radius: 8px;
  padding: 15px;
  font-weight: bolder;
  background-color: rgb(240, 199, 52);
}
a {
  position: absolute;
  margin-left: 430px;
  margin-top: 290px;
}
</style>