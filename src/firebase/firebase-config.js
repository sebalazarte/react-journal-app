import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyCJa8y8sXkJ31Q9C6y9AvUTg962rotLrBE",
    authDomain: "react-journal-asl.firebaseapp.com",
    projectId: "react-journal-asl",
    storageBucket: "react-journal-asl.appspot.com",
    messagingSenderId: "662508500125",
    appId: "1:662508500125:web:02ab77bd327196bd651074"
};

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export{
    db,
    googleAuthProvider,
    firebase
}