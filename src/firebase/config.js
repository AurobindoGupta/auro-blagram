
import firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';


// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyAejWeu3Hgckw-42aXwBoUZ2pMtA0Ln5uY",
    authDomain: "auro-blagram.firebaseapp.com",
    projectId: "auro-blagram",
    storageBucket: "auro-blagram.appspot.com",
    messagingSenderId: "726900413480",
    appId: "1:726900413480:web:3a388df903fcc137f7911d"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const projectStorage = firebase.storage();
  const projectFirestore = firebase.firestore();
  const timeStamp = firebase.firestore.FieldValue.serverTimestamp; 

  export{projectStorage,projectFirestore,timeStamp };