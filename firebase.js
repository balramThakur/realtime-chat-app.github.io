// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAKHaCjiJtJJj6AmPJFyMHck5caUG6k3uc",
  authDomain: "realtime-chat-73e7c.firebaseapp.com",
  projectId: "realtime-chat-73e7c",
  storageBucket: "realtime-chat-73e7c.appspot.com",
  messagingSenderId: "587442455368",
  appId: "1:587442455368:web:f58937d6e634c08839297d",
  measurementId: "G-30K6DKB4SW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);