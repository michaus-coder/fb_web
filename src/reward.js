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

const colRef = collection(db, "reward_options") //get table name

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

//console.log(randomIDFirebase());


//ngambil all data taruh di console
getDocs(colRef)
  .then(snapshot => {
    // console.log(snapshot.docs)
    let rewards = []
    snapshot.docs.forEach(doc => {
      rewards.push({ ...doc.data(), id: doc.id })
    })
    console.log(rewards)
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

//kalo data sudah terisi semua

//function checkisFilled(a,b,c,d){
//  if (a!=0 && b!=0 && c!=0 && d!=0){
//    return true
//  }
//  return false
//}

document.querySelector('#formReward').addEventListener('submit', (e) => {
  e.preventDefault()
  if(e.target.option.value == "" || e.target.description.value=""){
    alert("Please fill all fields")
    return false;
  }
  try{
    let rewardId = randomIDFirebase();
    const docRef = await collection(db, "reward_options").add({
      id: rewardId,
      option: e.target.option.value,
      description: e.target.description.value,
    });
    let suboptions = e.target.suboption[]
    let informations = e.target.amount[]  
    let points = e.target.point[]
    for(let i=0; i<suboptions.length; i++){
      await docRef.document(rewardId).collection("suboptions").add({
        name: suboptions[i].value,
        amount: informations[i].value,
        points: points[i].value,
      })
    }
    console.log(docRef.id);
  }
  catch(err){
    console.log(err.message)
  }
});

document.getElementById('addSuboption').addEventListener('click', (e) => {
  e.preventDefault()
  let suboption = document.createElement('div');
  suboption.className = 'row justify-content-center'; 
  suboption.innerHTML = `
  <div class="col-4">
    <input type="text" class="form-control" name="suboption[]" placeholder="Inputkan jenis reward">
  </div>
  <div class="col-4">
    <input type="text" class="form-control" name="information[]" placeholder="Inputkan jumlah reward">
  </div>
  <div class="col-4">
    <input type="text" class="form-control" name="point[]" placeholder="Inputkan jumlah point">
  </div>
  `;
  let deleteButton = document.createElement('button');
  deleteButton.className = 'btn btn-danger';
  deleteButton.innerHTML = '<i class="fa fa-trash"></i>';
  deleteButton.addEventListener('click', (e) => {
    e.target.beforeElement.remove();
    e.target.remove();
  });
  document.getElementById('addSuboption').insertBefore(deleteButton, null);
  document.getElementById('addSuboption').insertBefore(suboption, null);
}

//const addBookForm =  document.querySelector('.add') //pick which had class add
//if (addBookForm){
//  addBookForm.addEventListener('submit', (e) => {
//    e.preventDefault()
//    const email = addBookForm.nama_mitra.value
//    const pass = addBookForm.email_mitra.value
//    const dp = addBookForm.drop_point.value
//   const wa = addBookForm.whatsapp.value
//
//    // if (checkisFilled(email.length, pass.length, dp.length, wa.length)==true){
//     if (email.length!=0 && pass.length!=0 && dp.length!=0 && wa.length!=0){
//        addDoc(colRef, {
//          nama_mitra : addBookForm.nama_mitra.value,
//         email_mitra : addBookForm.email_mitra.value,
//          drop_point : addBookForm.drop_point.value,
//          whatsapp : addBookForm.whatsapp.value,
//          status : "unvalidated" 
//     })
//
//      .then(() => {
//       addBookForm.reset()
//        alert("Sudah berhasil ditambahkan")
//      })
//    }
//    
//    // }
//    else{
//      alert("Belum berhasil ditambahkan")
//    }
//     
//     
//  })
//}
//else{
// alert("Mohon isi semua field terlebih dahulu")
//}


//const article = document.querySelector('.add_artikel')
//article.addEventListener('submit', (e) => {
//  e.preventDefault()
//  var randomIDArtikel = randomIDFirebase()
//  
//  setDoc(doc(db, "artikel", randomIDArtikel), {
//    id_artikel : randomIDArtikel,
//    judul : article.judul_artikel123.value,
//    konten : article.keterangan_artikel123.value,
//    waktu_artikel :String(new Date().toUTCString())
//  })
//
// .then(() => {
//   alert("sukses added with id + :"+ randomIDArtikel)
//   article.reset()
// })
// alert("Sudah berhasil ditambahkanss")
//})
//
//const Login = document.querySelector('.login_index')
//Login.addEventListener('submit', (e) => {
//  e.preventDefault()
//  
// .then(() => {
//  Login.reset()
// })
// alert("Login button pressed")
//})
