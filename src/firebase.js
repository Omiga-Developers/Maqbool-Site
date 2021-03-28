import firebase from 'firebase';

const firebaseConfig = {
	apiKey: 'AIzaSyDWtjoIL3RjXi9id0RYwx11J3nZKSWDBDU',
	authDomain: 'maqbool-jumuah-registration.firebaseapp.com',
	projectId: 'maqbool-jumuah-registration',
	storageBucket: 'maqbool-jumuah-registration.appspot.com',
	messagingSenderId: '78115862260',
	appId: '1:78115862260:web:aee36b7384075e1ec410a1',
	measurementId: 'G-0LHZYP4YV1',
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
