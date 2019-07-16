import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

const firebase = require('firebase');
require('firebase/firestore');

const firebaseConfig = {
    apiKey: "AIzaSyDKuQF8r6QkidLfAehyxPeoHDCXERHGfqU",
    authDomain: "evernote-clone-5243b.firebaseapp.com",
    databaseURL: "https://evernote-clone-5243b.firebaseio.com",
    projectId: "evernote-clone-5243b",
    storageBucket: "evernote-clone-5243b.appspot.com",
    messagingSenderId: "883068531837",
    appId: "1:883068531837:web:ba926b8982bb0808"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

ReactDOM.render(<App />, document.getElementById('notify-container'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
