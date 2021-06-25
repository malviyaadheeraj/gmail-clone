import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDwoHtlEa77jyci4giFUyBqE2sfpaeNC0E",
  authDomain: "react-clone-6bf04.firebaseapp.com",
  projectId: "react-clone-6bf04",
  storageBucket: "react-clone-6bf04.appspot.com",
  messagingSenderId: "324658093304",
  appId: "1:324658093304:web:1fe691b98a602553edef0d",
  measurementId: "G-NL58QKMW59",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };
