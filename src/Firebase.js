import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyD8A0byFtqI4drcY0WobesVyqbrvmKK--0",
  authDomain: "point-chat-16979.firebaseapp.com",
  projectId: "point-chat-16979",
  storageBucket: "point-chat-16979.appspot.com",
  messagingSenderId: "166049638330",
  appId: "1:166049638330:web:f416fd6b2ed8f30f0c9f83",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();
