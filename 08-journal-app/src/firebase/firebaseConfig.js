import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyAJgxrUtgGeFl1IL196kWCTjh4piFaujsY",
    authDomain: "testfirebase-6cfa8.firebaseapp.com",
    projectId: "testfirebase-6cfa8",
    storageBucket: "testfirebase-6cfa8.appspot.com",
    messagingSenderId: "842450847256",
    appId: "1:842450847256:web:67d40a60041ccdd38ae56d"
  };

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export{
  db,
  googleAuthProvider,
  firebase
}