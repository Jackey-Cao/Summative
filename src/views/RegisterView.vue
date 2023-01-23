<script setup>
import { useRouter } from "vue-router";
import { ref } from "vue";
import { auth } from "../firebase/index";
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";

const router = useRouter();
const email = ref("");
const password1 = ref("");
const password2 = ref("");
const invalid = ref(false);

const registerUserByEmail = async () => {
  if (password1.value !== password2.value) {
    invalid.value = true;
    return;
  }
  else {
    await createUserWithEmailAndPassword(auth, email.value, password1.value);
    router.push('./purchase')
  }
};

const registerUserByGoogle = async () => {
  const provider = new GoogleAuthProvider();
  await signInWithPopup(auth, provider);
  router.push('./purchase')
};
</script>

<template>
  <div class="background">
    <h1>Register</h1>
    <div class="popup">
      <a>With Email Or</a>
      <button class="google" @click="registerUserByGoogle">Google</button>
      <form @submit.prevent="registerUserByEmail()">
        <input class="email" v-model="email" type="email" placeholder="Email" /> <br />
        <input class="pass1" v-model="password1" type="password" placeholder="Password" /> <br />
        <input class="pass2" v-model="password2" type="password" placeholder="Re-Enter Password"
          v-on:change="invalid.value = false" /> <br />
        <input class="submit" type="submit" value="Register" />
      </form>
      <div class="invalid" v-if="invalid">
        <p>Passwords Do Not Match</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.background {
  background-image: url(https://st1.bgr.in/wp-content/uploads/2022/04/Untitled-design-2022-04-20T095244.884.jpg);
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

a {
  position: absolute;
  margin-top: 105px;
  margin-left: 3.5vw;
  color: rgb(240, 199, 52);
  z-index: 1;
  font-size: 1vw;
}

.google {
  position: absolute;
  padding: 10px 100px 10px 100px;
  margin-top: 93px;
  margin-left: 10vw;
  background-color: rgb(240, 199, 52);
  color: black;
  border-radius: 8px;
  z-index: 1;
  font-size: 1vw;
  font-weight: bolder;
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
  margin-top: 150px;
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

.email,
.pass1,
.pass2 {
  border: 5px;
}

.submit,
.google:hover {
  cursor: pointer;
}

.invalid {
  margin-top: 430px;
  margin-left: 7.5vw;
  color: rgb(240, 199, 52);
  font-size: 20px;
}

input::placeholder {
  color: rgb(186, 186, 186);
}
</style>
