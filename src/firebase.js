import firebase from "firebase";
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBkTC6OmRzRC0b37mn_elaZcTGrrP_MRws",
  authDomain: "snapchat-clone-bba5d.firebaseapp.com",
  projectId: "snapchat-clone-bba5d",
  storageBucket: "snapchat-clone-bba5d.appspot.com",
  messagingSenderId: "809329658047",
  appId: "1:809329658047:web:f85c89d7c38198a0c45e0a",
  measurementId: "G-6FLMCC5DZ3",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, storage, provider };
