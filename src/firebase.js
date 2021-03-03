import firebase from 'firebase';
import 'firebase/firestore'
import "firebase/auth";
import "firebase/firestore";
 
const firebaseConfigs = {
   /* apiKey: process.env.REACT_APP_FIREBASE_KEY,
    authDomain: process.env.REACT_APP_FIREBASE_DOMAIN,
    databaseURL: process.env.REACT_APP_FIREBASE_DATABASE,
    projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
    storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_FIREBASE_SENDER_ID,
    appId: "1:994880379089:web:bd24da8d676a1fd0758df0",
    measurementId: "G-KM2ZDTEXZ7"
    */
   apiKey: "AIzaSyCY44NmMaX-1m-ziUHuyOR26D0OJAc927c",
    authDomain: "personal-38ff2.firebaseapp.com",
    databaseURL: "https://personal-38ff2.firebaseio.com",
    projectId: "personal-38ff2",
    storageBucket: "personal-38ff2.appspot.com",
    messagingSenderId: "1052030309142",
    appId: "1:1052030309142:web:c910b04497ce69dd1a3637",
    measurementId: "G-YDW2FCR93G"
  };
  
  firebase.initializeApp(firebaseConfigs);
  

  export {firebase}