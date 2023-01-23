<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import { getAuth, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

const auth = getAuth();
const router = useRouter();
const email = ref("");
const password = ref("");
const error = ref("");

const signInEmail = async () => {
  try {
    await signInWithEmailAndPassword(auth, email.value, password.value);
    router.push("./purchase");
  }
  catch (err) {
    error.value = err.message;
  }
};

const signInGoogle = async () => {
  try {
    const provider = new GoogleAuthProvider();
    await signInWithPopup(auth, provider);
    router.push("./purchase");
  }
  catch (err) {
    error.value = err.message;
  }
};
</script>

<template>
  <div class="background">
    <h1>Login</h1>
    <RouterLink to="/register" custom v-slot="{ navigate }">
      <button class="register" @click="navigate" role="link">Register</button>
    </RouterLink>
    <div class="popup">
      <a>With Email Or</a>
      <button class="google" @click="signInGoogle">Google</button>
      <form @submit.prevent="signInEmail()">
        <input class="email" type="email" placeholder="Email" v-model="email" />
        <input class="pass" type="password" placeholder="Password" v-model="password" />
        <input class="submit" type="submit" value="Login" />
      </form>
      <div class="error" v-if="error">{{ error }}</div>
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

.register {
  position: absolute;
  padding: 10px;
  margin-top: 260px;
  margin-left: 56vw;
  background-color: rgb(61, 61, 61);
  color: white;
  border-radius: 8px;
  z-index: 1;
  font-size: 1vw;
  font-weight: bold;
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
  margin-top: 185px;
  margin-left: 3.5vw;
  height: 500px;
  width: 23vw;
}

a {
  position: absolute;
  margin-top: 135px;
  margin-left: 3.5vw;
  color: rgb(240, 199, 52);
  z-index: 1;
  font-size: 1vw;
}

.google {
  position: absolute;
  padding: 10px 100px 10px 100px;
  margin-top: 123px;
  margin-left: 10vw;
  background-color: rgb(240, 199, 52);
  color: black;
  border-radius: 8px;
  z-index: 1;
  font-size: 1vw;
  font-weight: bolder;
}

input {
  padding: 15px;
  border-radius: 8px;
  background-color: rgb(61, 61, 61);
  font-weight: bold;
  color: white;
}

.email {
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

.submit,
.google,
.register:hover {
  cursor: pointer;
}

.error {
  position: absolute;
  margin-top: 430px;
  margin-left: 3.6vw;
  color: rgb(240, 199, 52);
  font-size: 20px;
}

input::placeholder {
  color: rgb(186, 186, 186);
}
</style>