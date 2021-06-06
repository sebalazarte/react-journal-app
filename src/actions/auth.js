import { types } from "../types/types";
import { firebase, googleAuthProvider } from '../firebase/firebase-config'

export const startLoginEmailPassword = (email, password) => {
    return (dispatch) => {
       firebase.auth().signInWithEmailAndPassword(email, password)
        .then(({user}) => {
            dispatch(login(user.uid, user.displayName));
        });
    }
}

export const startRegister = (name, email, password) => {
    return ((dispatch) => {
        firebase.auth().createUserWithEmailAndPassword(email, password)
            .then(async ({ user }) => {
                await user.updateProfile({
                    displayName: name
                });
                dispatch(login(user.uid, user.displayName));
            })
            .catch(err => console.error(err));
    })
}

export const startGoogleLogin = () => {
    return (dispatch) => {
        firebase.auth().signInWithPopup(googleAuthProvider)
            .then(({ user }) => {
                dispatch(login(user.uid, user.displayName));
            })
    }
}


export const login = (uid, displayName) => {
    return {
        type: types.login,
        payload: {
            uid,
            displayName
        }
    }
}