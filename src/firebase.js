import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyBiRvnXKd0YhgpQQNS7ck8jKXh6BHtnrOY",
  authDomain: "instagram-clone-react-11d8a.firebaseapp.com",
  databaseURL: "https://instagram-clone-react-11d8a.firebaseio.com",
  projectId: "instagram-clone-react-11d8a",
  storageBucket: "instagram-clone-react-11d8a.appspot.com",
  messagingSenderId: "440372075901",
  appId: "1:440372075901:web:ed716527494166aa448014",
  measurementId: "G-HRWL0FYMYG",
});

const db = firebaseApp.firestore();
const auth = firebase.auth();
const storgae = firebase.storage();

export { db, auth, storgae };
