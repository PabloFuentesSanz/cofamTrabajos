import firebase from "firebase/app";
import "firebase/auth";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDEqHZQ6KjOLrjNFgkEkoPxcV4nUdRz6jo",
  authDomain: "cofamtrabajos.firebaseapp.com",
  projectId: "cofamtrabajos",
  storageBucket: "cofamtrabajos.appspot.com",
  messagingSenderId: "454680383908",
  appId: "1:454680383908:web:88837f380ade5a1ac73131",
  measurementId: "G-B43M57ER2B",
};

!firebase.apps.length && firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();

export const loginWithMail = (email, password) => {
  return auth.signInWithEmailAndPassword(email, password);
};

export const logout = () => {
  return auth.signOut();
};
