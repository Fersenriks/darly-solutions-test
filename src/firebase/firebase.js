import {initializeApp} from "firebase/app";
import {
    getAuth,
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
    signOut
} from "firebase/auth";
import {getFirestore} from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyBvf469pKYfU4al1jHfsCliyN_XB1bQtaE",
    authDomain: "darly-solutions-test-856c1.firebaseapp.com",
    projectId: "darly-solutions-test-856c1",
    storageBucket: "darly-solutions-test-856c1.appspot.com",
    messagingSenderId: "746448033563",
    appId: "1:746448033563:web:a5dd07ab5213ac5eb365be",
    measurementId: "G-BDEME1247E"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore();

// signIn
const logInWithEmailAndPassword = (email, password) => {
    signInWithEmailAndPassword(auth, email, password).catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
    })
};

// signUp
const createNewUserWithEmailAndPassword = (email, password) => {
    createUserWithEmailAndPassword(auth, email, password)
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode, errorMessage);
        });
};

//logout
const logout = () => {
    signOut(auth).catch(error => console.log(error));
}

export {auth, db, logInWithEmailAndPassword, createNewUserWithEmailAndPassword, logout};