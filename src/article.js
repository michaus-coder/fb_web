import { initializeApp } from 'firebase/app'
import {
    getFirestore, collection, getDocs, addDoc
} from 'firebase/firestore'

console.log("article js running")
const firebaseConfig = {
    apiKey: "AIzaSyCpmj-NmWI5ultEAyNIXuh2tcGrju6Vkg4",
    authDomain: "cobawebfirebase.firebaseapp.com",
    databaseURL: "https://cobawebfirebase-default-rtdb.firebaseio.com",
    projectId: "cobawebfirebase",
    storageBucket: "cobawebfirebase.appspot.com",
    messagingSenderId: "783465140501",
    appId: "1:783465140501:web:68b276a562509d5a6f991c"
};