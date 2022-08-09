import { initializeApp } from 'firebase/app'
import {
  getFirestore, collection, getDocs,
  addDoc, deleteDoc, doc
} from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyCpmj-NmWI5ultEAyNIXuh2tcGrju6Vkg4",
  authDomain: "cobawebfirebase.firebaseapp.com",
  databaseURL: "https://cobawebfirebase-default-rtdb.firebaseio.com",
  projectId: "cobawebfirebase",
  storageBucket: "cobawebfirebase.appspot.com",
  messagingSenderId: "783465140501",
  appId: "1:783465140501:web:68b276a562509d5a6f991c"
}

// init firebase
initializeApp(firebaseConfig)

// init services
const db = getFirestore()

// collection ref
const colRef = collection(db, 'cities')

// get collection data
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

// adding docs
const addBookForm = document.querySelector('.add')
addBookForm.addEventListener('submit', (e) => {
  e.preventDefault()

  addDoc(colRef, {
    title: addBookForm.title.value,
    author: addBookForm.author.value,
  })
  .then(() => {
    addBookForm.reset()
  })
})

// deleting docs
const deleteBookForm = document.querySelector('.delete')
deleteBookForm.addEventListener('submit', (e) => {
  e.preventDefault()

  const docRef = doc(db, 'books', deleteBookForm.id.value)

  deleteDoc(docRef)
    .then(() => {
      deleteBookForm.reset()
    })
})