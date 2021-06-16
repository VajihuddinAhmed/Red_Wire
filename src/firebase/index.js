import firebase from 'firebase';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyCNg1DqrnZYzttfTg-B6MJMkTjQK3PxdhM',
  authDomain: 'redwire-9c85e.firebaseapp.com',
  projectId: 'redwire-9c85e',
  storageBucket: 'redwire-9c85e.appspot.com',
  messagingSenderId: '746070694097',
  appId: '1:746070694097:web:556591e81179d566360df0',
  measurementId: 'G-MFQL22TSME',
};

firebase.initializeApp(config);

const DB = firebase.firestore();

const usersCollection = DB.collection('users');

const articlesCollection = DB.collection('articles');

const videosCollection = DB.collection('videos');

export {firebase, usersCollection, articlesCollection, videosCollection};
