<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
const router = useRouter();
const username = ref("");
const password = ref("");
const invalid = ref(false);
const login = () => {
  if (username.value === "tmdb" && password.value === "movies") {
    router.push("./purchase");
  }
  else {
    invalid.value = true;
  }
};
</script>

<template>
  <div class="background">
    <h1>Login</h1>
    <div class="popup">
      <form @submit.prevent="login()">
        <input class="user" type="text" placeholder="Username" v-model="username" />
        <input class="pass" type="password" placeholder="Password" v-model="password" />
        <input class="submit" type="submit" value="Login" />
      </form>
      <div class="invalid" v-if="invalid">
        <p>Invalid Username or Password</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.background {
  background-image: url(https://cdn.mos.cms.futurecdn.net/6MEVYx4D4eL2VsSy6uBqLD-1200-80.jpg);
  height: 100vh;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
h1 {
  position: absolute;
  margin-top: 260px;
  margin-left: 38vw;
  color: white;
  z-index: 1;
  font-size: 2.5vw;
}
.popup {
  position: absolute;
  background-color: rgba(0, 0, 0, 0.834);
  margin-top: 225px;
  margin-left: 34.5vw;
  height: 500px;
  width: 30vw;
}
form {
  position: absolute;
  display: flex;
  flex-direction: column;
  margin-top: 125px;
  margin-left: 3.5vw;
  height: 500px;
  width: 23vw;
}
input {
  padding: 15px;
  border-radius: 8px;
  background-color: rgb(61, 61, 61);
  font-weight: bold;  
  color: white;
}
.user {
  margin-bottom: 10px;
  border: 5px;
}
.pass {
  margin-top: 10px;
  margin-bottom: 50px;
  border: 5px;
}
.submit {
  border: 5px;
  color: rgb(186, 186, 186);
}
.submit:hover {
  cursor: pointer;
}
.invalid {
  margin-top: 400px;
  margin-left: 4.2vw;
  color: rgb(240, 199, 52);
  font-size: 20px;
}
input::placeholder {
  color: rgb(186, 186, 186);
}
</style>