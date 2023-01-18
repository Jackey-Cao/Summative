import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyB04hcMROB21DYqDy1ey6v81bOW33sQE2U",
  authDomain: "ics4u-918c9.firebaseapp.com",
  projectId: "ics4u-918c9",
  storageBucket: "ics4u-918c9.appspot.com",
  messagingSenderId: "67580510195",
  appId: "1:67580510195:web:631fd323bb3a3219371c86"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth();
const firestore = getFirestore();
const storage = getStorage();

export { auth, firestore, storage }