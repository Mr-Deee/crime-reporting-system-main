import firebase from "firebase/compat/app";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD_ZTkkSPzOrXPA5n_lTcX0U3q16OS-_VU",
  authDomain: "crime-reporting-system-c4a7b.firebaseapp.com",
  projectId: "crime-reporting-system-c4a7b",
  storageBucket: "crime-reporting-system-c4a7b.appspot.com",
  messagingSenderId: "781871322055",
  appId: "1:781871322055:web:35597bab711f0f47f0bfe2",
  measurementId: "G-08E8GHRL5K",
};

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
export default db;
