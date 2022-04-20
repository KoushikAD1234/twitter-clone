import firebase from "firebase/compat/app";
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyCp4z-uuHG1TM_YvISAbRF0PZSQevxnRCo",
    authDomain: "twitter-clone-4d25d.firebaseapp.com",
    projectId: "twitter-clone-4d25d",
    storageBucket: "twitter-clone-4d25d.appspot.com",
    messagingSenderId: "233778069421",
    appId: "1:233778069421:web:52e5d6328ebb2a4e55eb24",
    measurementId: "G-9KSQ444R2Y"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig)
  const db = firebaseApp.firestore();
  export default db; 