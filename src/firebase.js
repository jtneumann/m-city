import firebase from 'firebase/app';
import 'firebase/app';
import 'firebase/database';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyDJ6ATLvcZlu3P-voXUQERlzls2TMoeoF0",
    authDomain: "m-city-cc64b.firebaseapp.com",
    databaseURL: "https://m-city-cc64b.firebaseio.com",
    projectId: "m-city-cc64b",
    storageBucket: "m-city-cc64b.appspot.com",
    messagingSenderId: "768222323495"
  };

  firebase.initializeApp(config);

  const firebaseDB = firebase.database();
  const firebaseMatches = firebaseDB.ref('matches');
  const firebasePromotions = firebaseDB.ref('promotions');
  const firebaseTeams = firebaseDB.ref('teams');
  const firebasePlayers = firebaseDB.ref('players');

 export {
     firebase,
     firebaseMatches,
     firebasePromotions,
     firebaseTeams,
     firebaseDB,
     firebasePlayers
 }