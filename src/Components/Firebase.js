import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
    apiKey: "AIzaSyADgUkt7hQF6b5qaT24pUsZITqHdrFItG4",
    authDomain: "booming-arcana-408610.firebaseapp.com",
    projectId: "booming-arcana-408610",
    storageBucket: "booming-arcana-408610.appspot.com",
    messagingSenderId: "187186197502",
    appId: "1:187186197502:web:abe652fca2a6e48ed706af"
};


const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);