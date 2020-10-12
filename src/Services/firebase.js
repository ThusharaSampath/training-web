// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
const firebaseConfig = {
    apiKey: "AIzaSyCXppgd7-rsmNJG6L0s1pPMfwoH4kf-fA4",
    authDomain: "dear-diary-sampath.firebaseapp.com",
    databaseURL: "https://dear-diary-sampath.firebaseio.com",
    projectId: "dear-diary-sampath",
    storageBucket: "dear-diary-sampath.appspot.com",
    messagingSenderId: "104063855658",
    appId: "1:104063855658:web:bb92ed2eeaf4c532662753",
    measurementId: "G-1SPCP8XT5W"
  };

  firebase.initializeApp(firebaseConfig)
  export default firebase;