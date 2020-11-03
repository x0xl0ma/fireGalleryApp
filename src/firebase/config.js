import * as firebase from "firebase/app";
import "firebase/storage";
import "firebase/firestore";

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyD6xPJmC6vSunKgLZYgaX267-ZC9v48IAA",
  authDomain: "firegramm-fea27.firebaseapp.com",
  databaseURL: "https://firegramm-fea27.firebaseio.com",
  projectId: "firegramm-fea27",
  storageBucket: "firegramm-fea27.appspot.com",
  messagingSenderId: "702016572225",
  appId: "1:702016572225:web:6cf5f7a6719fe840b22fc0",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timeStamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage, projectFirestore, timeStamp };
