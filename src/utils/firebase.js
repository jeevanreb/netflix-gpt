// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBTQ8T6s7bk_RsMmobpspODE1eVdpe3Cr0",
  authDomain: "netflixgpt-e4595.firebaseapp.com",
  projectId: "netflixgpt-e4595",
  storageBucket: "netflixgpt-e4595.appspot.com",
  messagingSenderId: "843525224112",
  appId: "1:843525224112:web:57a011655f6ba0ece3ad75",
  measurementId: "G-MXBG6GVJL5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);