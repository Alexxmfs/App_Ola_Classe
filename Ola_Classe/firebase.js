import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAd5sZs4J_waNwUGwxC50jcYhCBUcWZPTI",
  authDomain: "ola-classe-c6a2f.firebaseapp.com",
  projectId: "ola-classe-c6a2f",
  storageBucket: "ola-classe-c6a2f.appspot.com",
  messagingSenderId: "613915067217",
  appId: "1:613915067217:web:ec866a3c11371d24870970"
};

!firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app()

const db = firebase.firestore()

export { firebase, db }