import firebase from "firebase"


const firebaseConfig = {
    apiKey: "AIzaSyBK1lxS6nejGjTj2UFi2B_ZapnnUc2CFDs",
    authDomain: "linked-in-clone-93b2b.firebaseapp.com",
    projectId: "linked-in-clone-93b2b",
    storageBucket: "linked-in-clone-93b2b.appspot.com",
    messagingSenderId: "719499099962",
    appId: "1:719499099962:web:6b3dbb109fcabd1d291a03"
  };



  const  firebaseApp  = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebaseApp.auth();
  

  export {db,auth} ;
