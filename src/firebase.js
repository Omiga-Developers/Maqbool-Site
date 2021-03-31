import firebase from 'firebase';

const firebaseConfig = {
	apiKey: "AIzaSyC5DZPHZRL6dTqkwgAZy244TPUjFiLsOPI",
  authDomain: "maqbool-jummah-registration.firebaseapp.com",
  projectId: "maqbool-jummah-registration",
  storageBucket: "maqbool-jummah-registration.appspot.com",
  messagingSenderId: "613171458509",
  appId: "1:613171458509:web:880895cab21db4bff49484",
  measurementId: "G-D4HLR9HND5",
};

// initializing the app
const firebaseApp = firebase.initializeApp(firebaseConfig);

// connecting to the database
const db = firebaseApp.firestore();

// making use of the authentication for Login system
const auth = firebase.auth();

// using google authentication for Login Access
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };

export default db;
