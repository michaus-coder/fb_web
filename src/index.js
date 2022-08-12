// //import { initializeApp } from 'firebase/app'
// const initializeApp = require('firebase/app')
// import {
//     getFirestore, collection, getDocs, addDoc
// } from 'firebase/firestore'
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.4.0/firebase-app.js";
import { getFirestore, getDocs, collection, addDoc, setDoc, doc } from "https://www.gstatic.com/firebasejs/9.4.0/firebase-firestore.js";

console.log("js updated!")
const firebaseConfig = {
  apiKey: "AIzaSyA0N75BHzj4pGmaFgb1fFcuOS1CBXZ5UiY",
  authDomain: "wastemanagement-65034.firebaseapp.com",
  projectId: "wastemanagement-65034",
  storageBucket: "wastemanagement-65034.appspot.com",
  messagingSenderId: "540665383546",
  appId: "1:540665383546:web:d97539d1d9330c55db09c3"
};
//init fb app
initializeApp(firebaseConfig)

//init service
const db = getFirestore()

var dbLokasi = "mitra"
const colRef = collection(db, dbLokasi) //get table name
const colArticle = collection(db, "artikel")

function randomIDFirebase() {
  var result           = '';
  var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  var charactersLength = characters.length;
  for ( var i = 0; i < 20; i++ ) {
    result += characters.charAt(Math.floor(Math.random() * 
charactersLength));
 }
 return result;
}

console.log(randomIDFirebase());

//ngambil all data taruh di console
getDocs(colRef)
  .then(snapshot => {
    // console.log(snapshot.docs)
    let books = []
    snapshot.docs.forEach(doc => {
      books.push({ ...doc.data(), id: doc.id })
    })
    console.log(books)
  })
  .catch(err => {
    console.log(err.message)
  })

// const addBookForm = await document.querySelector('.add')
// addBookForm.addEventListener('submit', (e) => {
//     e.preventDefault()

//     addDoc(colRef, {
//         nama_mitra : addBookForm.nama_mitra.value,
//         email_mitra : addBookForm.email_mitra.value,
//         drop_point : addBookForm.drop_point.value,
//         whatsapp : addBookForm.whatsapp.value
//     })
//     .then(() => {
//         addBookForm.reset()
//     })
// })
const addBookForm =  document.querySelector('.add') //pick which had class add
addBookForm.addEventListener('submit', (e) => {
  e.preventDefault()
   addDoc(colRef, {
    nama_mitra : addBookForm.nama_mitra.value,
    email_mitra : addBookForm.email_mitra.value,
    drop_point : addBookForm.drop_point.value,
    whatsapp : addBookForm.whatsapp.value,
    status : "unvalidated"
  })
  .then(() => {
    addBookForm.reset()
  })
  alert("Sudah berhasil ditambahkan")
})

const article = document.querySelector('.add_artikel')
article.addEventListener('submit', (e) => {
  e.preventDefault()
  var randomIDArtikel = randomIDFirebase()
  
  setDoc(doc(db, "artikel", randomIDArtikel), {
    id_artikel : randomIDArtikel,
    judul : article.judul_artikel123.value,
    konten : article.keterangan_artikel123.value,
    waktu_artikel :new Date("2015-03-25T12:00:00Z")
  })

 .then(() => {
   alert("sukses added with id + :"+ colArticle.id)
   article.reset()
 })
 alert("Sudah berhasil ditambahkanss")
})
