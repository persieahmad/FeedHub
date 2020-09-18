import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import firebase from 'firebase';

firebase.initializeApp({
  apiKey: 'AIzaSyCouK_8wxedZtmvN5A1a97fM4omxRUiOnA',
  authDomain: 'feedhub885.firebaseapp.com',
  databaseURL: 'https://feedhub885.firebaseio.com',
  projectId: 'feedhub885',
  storageBucket: 'feedhub885.appspot.com',
  messagingSenderId: '46501347455',
  appId: '1:46501347455:web:18bd370654dd860ca6ff4a',
  measurementId: 'G-8FX707LTXR',
});

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
