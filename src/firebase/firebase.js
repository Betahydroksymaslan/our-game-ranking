import firebase from "firebase/app";
import "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyCHFG4J2mf_3Axbo8ND7diX2nOZm293gsk",
  authDomain: "our-game-ranking.firebaseapp.com",
  databaseURL: "https://our-game-ranking-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "our-game-ranking",
  storageBucket: "our-game-ranking.appspot.com",
  messagingSenderId: "118353229617",
  appId: "1:118353229617:web:8fc80354023366c55c6210",
};

firebase.initializeApp(firebaseConfig);

export default firebase;
