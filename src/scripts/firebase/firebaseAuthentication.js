import firebase from "firebase/app";
import 'firebase/auth';

const googleSignIn = () => {
    const provider = new firebase.auth.GoogleAuthProvider();

    firebase.auth().signInWithPopup(provider)
        .then(result => console.log("Successfully logged in with Google", result.user))
        .catch(err => console.log("There was an error while signing in with Google: ", err));
}

const googleSignOut = () => {
    firebase.auth().signOut()
        .then(() => console.log("User successfully signed out"))
        .catch(err => console.log("There was an error while signing out: ", err));
}

module.exports = {
    googleSignIn,
    googleSignOut
}