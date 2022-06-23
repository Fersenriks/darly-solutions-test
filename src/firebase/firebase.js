import {initializeApp} from "firebase/app";
import {
    getAuth,
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
    signOut
} from "firebase/auth";
import {getFirestore} from "firebase/firestore";

const firebaseConfig = {
//     don't exist :)
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
