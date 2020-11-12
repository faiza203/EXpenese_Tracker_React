importScripts("https://www.gstatic.com/firebasejs/8.0.1/firebase-app.js")
importScripts("https://www.gstatic.com/firebasejs/8.0.1/firebase-analytics.js")
const firebaseConfig = {
  apiKey: "AIzaSyAZX5VgMVNTyz-J_UUoCFuXIFK48pk7mzU",
  authDomain: "common-50c43.firebaseapp.com",
  databaseURL: "https://common-50c43.firebaseio.com",
  projectId: "common-50c43",
  storageBucket: "common-50c43.appspot.com",
  messagingSenderId: "670911494230",
  appId: "1:670911494230:web:f3b275d099e5763c75a3f7",
  measurementId: "G-VWTHY9S6DH"
};
firebase.initializeApp(firebaseConfig);
firebase.messaging();