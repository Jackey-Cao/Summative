<script setup>
</script>

<template>
  <div class="header">
    <RouterLink to="/login" custom v-slot="{ navigate }">
      <button class="login" @click="navigate" role="link">Login</button>
    </RouterLink>
    <RouterLink to="/register" custom v-slot="{ navigate }">
      <button class="register" @click="navigate" role="link">Register</button>
    </RouterLink>
    <h1>Movies321</h1>
  </div>
</template>

<style scoped>
.header {
  margin-top: 15px;
}

h1 {
  color: rgb(240, 199, 52);
  text-align: left;
  font-size: 40px;
  margin-left: 25px;
}

button {
  position: absolute;
  text-align: center;
  background-color: rgb(61, 61, 61);
  width: 80px;
  height: 40px;
  font-size: 15px;
  color: white;
  border-radius: 10px;
  margin-right: 10px;
  margin-left: 93%;
}

.login {
  position: absolute;
  text-align: center;
  background-color: rgb(61, 61, 61);
  width: 80px;
  height: 40px;
  font-size: 15px;
  color: white;
  border-radius: 10px;
  margin-right: 10px;
  margin-left: 86%;
}

button:hover {
  cursor: pointer;
  opacity: 70%;
}
</style>