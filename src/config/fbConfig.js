import firebase from "firebase";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCKCz6z--PB2KvOVDUQKnGp3M9K7O0qfbw",
  authDomain: "project-party-8f7bd.firebaseapp.com",
  databaseURL: "https://project-party-8f7bd.firebaseio.com",
  projectId: "project-party-8f7bd",
  storageBucket: "project-party-8f7bd.appspot.com",
  messagingSenderId: "197758388835",
  appId: "1:197758388835:web:e465837e27a53643178656",
  measurementId: "G-CRKBCJ5TQK",
};

firebase.initializeApp(firebaseConfig);
firebase.firestore();

export default firebase;
