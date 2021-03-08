import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyDWtjoIL3RjXi9id0RYwx11J3nZKSWDBDU",
    authDomain: "maqbool-jumuah-registration.firebaseapp.com",
    projectId: "maqbool-jumuah-registration",
    storageBucket: "maqbool-jumuah-registration.appspot.com",
    messagingSenderId: "78115862260",
    appId: "1:78115862260:web:aee36b7384075e1ec410a1",
    measurementId: "G-0LHZYP4YV1"
};

const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebaseApp.firestore()

export default db;