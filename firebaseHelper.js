
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.1/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.22.1/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyDSGGOl9T1i640irPM4pCe40D85FC8fyHw",
    authDomain: "eko-aile.firebaseapp.com",
    databaseURL: "https://eko-aile-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "eko-aile",
    storageBucket: "eko-aile.appspot.com",
    messagingSenderId: "130244943806",
    appId: "1:130244943806:web:90eab4cb472746351fa3ef",
    measurementId: "G-0R3Z8YVTWD"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);

var database = firebase.database();

