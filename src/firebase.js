import { initializeApp } from "firebase/app"
import { getFirestore, doc, setDoc } from "firebase/firestore";
import { 
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signOut
 } from '@firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyAXu3Gn5OxguH1aBBUD8V-h6f6k3R0UWdY",
    authDomain: "linkedfy-cl.firebaseapp.com",
    projectId: "linkedfy-cl",
    storageBucket: "linkedfy-cl.appspot.com",
    messagingSenderId: "443373251687",
    appId: "1:443373251687:web:3f0c1467564845e1b578c2"
  };

  const app = initializeApp(firebaseConfig)
  const db = getFirestore(app)
  const auth = getAuth()

  export { 
    auth, 
    createUserWithEmailAndPassword, 
    signInWithEmailAndPassword, 
    onAuthStateChanged, 
    signOut,
  }

  export { db, doc, setDoc }