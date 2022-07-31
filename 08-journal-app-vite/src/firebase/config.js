// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore}  from 'firebase/firestore/lite';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAJgxrUtgGeFl1IL196kWCTjh4piFaujsY",
  authDomain: "testfirebase-6cfa8.firebaseapp.com",
  projectId: "testfirebase-6cfa8",
  storageBucket: "testfirebase-6cfa8.appspot.com",
  messagingSenderId: "842450847256",
  appId: "1:842450847256:web:67d40a60041ccdd38ae56d"
};

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);

export const FirebaseAuth = getAuth(FirebaseApp);

export const FirebaseDB = getFirestore(FirebaseApp);