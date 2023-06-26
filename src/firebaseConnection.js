import firebase from 'firebase/app';
import 'firebase/database';


let firebaseConfig = {
  apiKey: "AIzaSyDpwmTdaP1nvNL3Xuw15EKRN5fjHfjuYvk",
  authDomain: "meuaplicativo-c0e02.firebaseapp.com",
  databaseURL: "https://meuaplicativo-c0e02-default-rtdb.firebaseio.com",
  projectId: "meuaplicativo-c0e02",
  storageBucket: "meuaplicativo-c0e02.appspot.com",
  messagingSenderId: "293182190662",
  appId: "1:293182190662:web:2144465f0315f4b2718647",
  measurementId: "G-3TDPTCKXP6"
};
if(!firebase.apps.length){
  //Abrir minha conexao
  firebase.initializeApp(firebaseConfig);
}
export default firebase;