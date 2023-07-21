import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import { firebaseConfig } from './firebaseConfig';

// Initialize Firebase
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export const auth = firebase.auth();
export default firebase;
