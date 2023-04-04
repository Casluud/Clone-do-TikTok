
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore/lite'

const firebaseConfig = {
  apiKey: "AIzaSyDdJJaf7PmWphvzHvN5dLY7kggQRG8C4y0",
  authDomain: "clone-do-tikoteko.firebaseapp.com",
  projectId: "clone-do-tikoteko",
  storageBucket: "clone-do-tikoteko.appspot.com",
  messagingSenderId: "780506957245",
  appId: "1:780506957245:web:23fb11dcfbafcdcf7b3ed4"
};


const app = initializeApp(firebaseConfig);
const db = getFirestore(app)

export default db;