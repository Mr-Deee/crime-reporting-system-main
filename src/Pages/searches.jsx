import React, { useState } from 'react';
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import './search.css'


// Initialize Firebase
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
const db = firebase.firestore();// Initialize Firebase in this file

const SearchBar = ({ setSearchResults }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = async (e) => {

    if (searchTerm.trim() !== '') {
      db.collection('crimeReports')
        .where('reportId', '==', searchTerm)
        .get()
        .then((querySnapshot) => {
          const results = querySnapshot.docs.map((doc) => doc.data());
          setSearchResults(results);
        })
        .catch((error) => {
          console.error('Error searching for items:', error);
        });
    }

  };

  return (
    <div className='search-bar'>
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="search for a case with id"
      />
      <button onClick={handleSearch} className='button3'>Search</button>
    </div>
  );
};

export default SearchBar;

