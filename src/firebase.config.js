// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDxLMJ3xp4rlbxQxXyKxEUq4CXTQeQZf54",
  authDomain: "munas-project-e4ec7.firebaseapp.com",
  projectId: "munas-project-e4ec7",
  storageBucket: "munas-project-e4ec7.appspot.com",
  messagingSenderId: "102023319908",
  appId: "1:102023319908:web:53fcc0c5cf135b27642a71"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth ;