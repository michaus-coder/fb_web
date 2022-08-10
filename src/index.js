import { initializeApp } from 'firebase/app'
import {
    getFirestore, collection, getDocs, addDoc
} from 'firebase/firestore'

console.log("js updated!")
const firebaseConfig = {
    apiKey: "AIzaSyCpmj-NmWI5ultEAyNIXuh2tcGrju6Vkg4",
    authDomain: "cobawebfirebase.firebaseapp.com",
    databaseURL: "https://cobawebfirebase-default-rtdb.firebaseio.com",
    projectId: "cobawebfirebase",
    storageBucket: "cobawebfirebase.appspot.com",
    messagingSenderId: "783465140501",
    appId: "1:783465140501:web:68b276a562509d5a6f991c"
};

//init fb app
initializeApp(firebaseConfig)

//init service
const db = getFirestore()

var dbLokasi = "books"
const colRef = collection(db, dbLokasi) //get table name

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
const addBookForm =  document.querySelector('.add')
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
})