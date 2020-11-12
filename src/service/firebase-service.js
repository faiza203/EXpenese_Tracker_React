import firebase from "firebase";
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
  const messaging = firebase.messaging();
  export function initNotification() {
    Notification.requestPermission().then((permission) => {
        console.log(permission);
       if(permission === "granted"){
        messaging.getToken({ vapidKey: 'BHm336ISof5XjwAPbzhRLgD6fLooyIrQ-QepeG2BB6o4gG9U-l4_f7dsGQgJ6MH0BGe9iSqZARQWyWtzCw_yujQ' }).then((currentToken) => {
            if (currentToken) {
                 console.log("TOKEN =>");
                 console.log(currentToken);
            } else {
                console.log('No registration token available. Request permission to generate one.');
            }
        }).catch((err) => {
            console.log('An error occurred while retrieving token. ', err);
        })
       }
    })
}