import { initializeApp } from "https://www.gstatic.com/firebasejs/9.4.0/firebase-app.js";
import { getFirestore, getDocs, collection, addDoc, setDoc, doc, onSnapshot} from "https://www.gstatic.com/firebasejs/9.4.0/firebase-firestore.js";
import {
    getAuth, signOut, signInWithEmailAndPassword
} from 'https://www.gstatic.com/firebasejs/9.4.0/firebase-auth.js'
console.log("article js running")
const firebaseConfig = {
    apiKey: "AIzaSyA0N75BHzj4pGmaFgb1fFcuOS1CBXZ5UiY",
    authDomain: "wastemanagement-65034.firebaseapp.com",
    projectId: "wastemanagement-65034",
    storageBucket: "wastemanagement-65034.appspot.com",
    messagingSenderId: "540665383546",
    appId: "1:540665383546:web:d97539d1d9330c55db09c3"
  };

console.log("berhasil masuk")

//init fb app
initializeApp(firebaseConfig)

//init service
const db = getFirestore()
const auth = getAuth()
const colRef= collection(db, "admin")

const Login = document.querySelector('.login_index')
Login.addEventListener('submit', (e) => {
    e.preventDefault()

    const email = Login.login_email.value
    const pass = Login.login_pass.value

    signInWithEmailAndPassword(auth, email, pass)
      .then((cred) =>{
        console.log("user masuk")
        location.replace('https://andrewcortez1.github.io/fb_web/admin.html')
      })
    .catch((err) =>{
        console.log(err.message)
    })
    
})
// const Login = document.querySelector('.login_index')
// Login.addEventListener('submit', (e) => {
//     const docRef = doc(db , 'admin', Login.login_email)
//    onSnapshot(docRef, (doc) => {
//        console.log(doc.data(), doc.id)
//        alert(doc.data())
//    })
// })

