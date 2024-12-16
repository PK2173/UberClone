// const mongoose = require('mongoose');

// function connectToDb() {
//     mongoose.connect(process.env.DB_Connect, {
//         useNewUrlParser: true,
//         useUnifiedTopology: true
//     },()=>{
//         console.log("Connected to MongoDB");
//     }).catch(err => console.log(err));
// }

// module.exports = connectToDb;

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// https://uberclone-c5ea8-default-rtdb.firebaseio.com/:

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAMWBU1BjMuP92DS8NxNh5dTVqwuoNyua0",
  authDomain: "uberclone-2cbf4.firebaseapp.com",
  projectId: "uberclone-2cbf4",
  storageBucket: "uberclone-2cbf4.firebasestorage.app",
  messagingSenderId: "270048948964",
  appId: "1:270048948964:web:118c9ce337debb84a8b2f1",
  measurementId: "G-3TVDXN6YRC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);