<script setup>
import axios from "axios";
import { ref } from "vue";
import SiteModal from "../components/SiteModal.vue";
import { useStore } from "../store/index.js";

const store = useStore();
const genre = ref(0);
const criteria = ref("");
const searchResults = ref([]);
const page = ref(1);
const totalPages = ref(0);
const showModal = ref(false);
const selectedId = ref(0);

const openModal = (id) => {
  showModal.value = true;
  selectedId.value = id;
};

const closeModal = () => {
  showModal.value = false;
};

const getGenres = async () => {
  searchResults.value = [];
  criteria.value = "";
  await store.getMovies(genre.value);
};

const search = async (direction) => {
  page.value += direction;

  let data = (
    await axios.get("https://api.themoviedb.org/3/search/movie", {
      params: {
        api_key: "e8016904e176c4cc2f25acfd19077f5c",
        query: criteria.value,
        include_adult: false,
        page: page.value,
      },
    })
  ).data;

  totalPages.value = data.total_pages;

  searchResults.value = data.results.map((movie) => {
    return {
      id: movie.id,
      image: movie.poster_path,
    };
  });
};
</script>

<template>
  <RouterLink to="/cart" custom v-slot="{ navigate }">
    <button class="cart" @click="navigate" role="link">Cart</button>
  </RouterLink>
  <h1>Purchase</h1>
  <input type="search" v-model="criteria" @keydown.enter="search(0)" />
  <button class="enter" @click="search(0)">Search</button>
  <p class="genre">Select Genre</p>
  <select v-model="genre" @change="getGenres()">
    <option value="Action">Action</option>
    <option value="Family">Family</option>
    <option value="Science Fiction">Science Fiction</option>
    <option value="Adventure">Adventure</option>
    <option value="Fantasy">Fantasy</option>
  </select>
  <template v-if="searchResults.length">
    <div class="navigation">
      <button class="prev" v-show="page > 1" @click="search(-1)">&lt</button>
      <p class="page">{{ `Page ${page} of ${totalPages}` }}</p>
      <button class="next" v-show="page < totalPages" @click="search(1)">&gt</button>
    </div>
  </template>
  <div class="purchase-container">
    <template v-if="searchResults.length">
      <p class="info">Displaying Results For "{{ criteria }}"</p>
      <img v-for="movie in searchResults" :id="movie.id" @click="openModal(movie.id)"
        :src="`https://image.tmdb.org/t/p/w500${movie.image}`" />
    </template>
    <template v-else>
      <img v-for="movie in store.movies" :id="movie.id" @click="openModal(movie.id)"
        :src="`https://image.tmdb.org/t/p/w500${movie.image}`" />
    </template>
    <SiteModal v-if="showModal" @toggleModal="closeModal()" :id="selectedId" />
  </div>
</template>

<style scoped>
h1 {
  position: absolute;
  font-size: 3vw;
  margin-left: 25px;
  margin-top: 15px;
  color: rgb(240, 199, 52);
}

.genre {
  position: absolute;
  font-size: 1vw;
  margin-left: 25px;
  margin-top: 105px;
  color: rgb(240, 199, 52);
}

.cart {
  position: absolute;
  text-align: center;
  background-color: rgb(240, 199, 52);
  width: 80px;
  height: 40px;
  font-size: 15px;
  font-weight: bold;
  color: black;
  border-radius: 10px;
  margin-left: 91.5%;
  margin-top: 25px;
}

.info {
  position: absolute;
  color: rgb(240, 199, 52);
  font-size: 2vw;
  margin-left: 14.1vw;
  margin-top: 98px;
}

img:hover,
.cart:hover,
.enter,
.prev,
.next {
  cursor: pointer;
  opacity: 70%;
}

.purchase-container {
  margin-top: 150px;
  margin-left: 5.5rem;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1rem;
}

img {
  width: 250px;
  aspect-ratio: 2 / 3;
}

input {
  position: absolute;
  margin-left: 20vw;
  margin-top: 25px;
  padding: 7px;
  border-radius: 10px;
  width: 60vw;
}

.enter {
  position: absolute;
  text-align: center;
  margin-left: 81vw;
  margin-top: 25px;
  background-color: white;
  padding: 7px;
  border-radius: 10px;
  width: 5vw;
  font-size: 1vw;
}

select {
  position: absolute;
  background-color: rgb(240, 199, 52);
  border-radius: 5px;
  padding: 3px;
  margin-left: 130px;
  margin-top: 100px;
  font-size: 1vw;
}

option {
  font-weight: bolder;
}

.navigation {
  position: absolute;
  margin-top: 280vh;

}

.prev,
.next {
  background-color: rgb(240, 199, 52);
  font-weight: bolder;
  padding: 10px;
  position: absolute;
  border-radius: 100px;
  font-size: 2vw;
}

.prev {
  margin-left: 41vw;
}

.next {
  margin-left: 56vw;
}

.page {
  position: absolute;
  text-align: center;
  margin-top: 17px;
  margin-left: 45vw;
  width: 10vw;
  color: rgb(240, 199, 52);
}
</style>
