import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

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

const db = firebase.firestore();

const mapUserFromFirebaseAuth = (user) => {
  const { email, displayName } = user;
  return { email, displayName };
};

//Cuando el estado del usuario cambia
export const onAuthStateChanged = (setUser) => {
  return firebase.auth().onAuthStateChanged((user) => {
    const finalUser = user ? mapUserFromFirebaseAuth(user) : null;
    setUser(finalUser);
  });
};

export const loginWithMail = (email, password) => {
  return auth.signInWithEmailAndPassword(email, password);
};

export const logout = () => {
  return auth.signOut();
};

export const getJornadasByDate = async (fecha) => {
  const citiesRef = db.collection('Jornada');
  const snapshot = await citiesRef.where('Fecha', '==', fecha).get();
  if (snapshot.empty) {
    console.log('No matching documents.');
    return;
  }
  return snapshot;
}

export const setJornada = ({ fecha, obra, trabajadores, notas }) => {
  db.collection('Jornada').add({
    Fecha: fecha,
    Notas: notas,
    Obra: obra,
    Trabajadores: trabajadores
  })
}

export const updateJornada = async ({idJornada, fecha, obra, trabajadores, notas})=>{
  const snapshot = db.collection('Jornada').doc(idJornada);
  snapshot.update({
    Fecha: fecha,
    Notas: notas,
    Obra: obra,
    Trabajadores: trabajadores
  });
}

export const getJornadaById = async (obraId) =>{
  const citiesRef = db.collection('Jornada').doc(obraId).get();
  return citiesRef;
}

export const setTrabajador = ({ nombre, apellidos }) => {
  db.collection('Trabajador').add({
    Nombre: nombre,
    Apellidos: apellidos
  })
}
export const getTrabajadores = async () => {
  const citiesRef = db.collection('Trabajador');
  const snapshot = await citiesRef.get();
  if (snapshot.empty) {
    console.log('No matching documents.');
    return;
  }
  return snapshot;
}

export const setObra = ({ nombre, direccion }) => {
  db.collection('Obra').add({
    Nombre: nombre,
    Direccion: direccion
  })
}

export const getObras = async () => {
  const citiesRef = db.collection('Obra');
  const snapshot = await citiesRef.get();
  if (snapshot.empty) {
    console.log('No matching documents.');
    return;
  }
  return snapshot;
}

