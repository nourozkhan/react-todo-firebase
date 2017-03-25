import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import firebase from 'firebase'

  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyCf1z_kI8T20z5pm1iwme22f2VJOh_awuE",
    authDomain: "reactfirebasetodo-e9b5f.firebaseapp.com",
    databaseURL: "https://reactfirebasetodo-e9b5f.firebaseio.com",
    storageBucket: "reactfirebasetodo-e9b5f.appspot.com",
    messagingSenderId: "904674291750"
  };
  firebase.initializeApp(config);

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
