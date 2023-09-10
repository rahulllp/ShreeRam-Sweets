import firebase from 'firebase'
var firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyAc0-M2VHS0_nUpmNH0VxkTELGkWP6nxAc",
    authDomain: "srsdata-d6d57.firebaseapp.com",
    databaseURL: "https://srsdata-d6d57-default-rtdb.firebaseio.com",
    projectId: "srsdata-d6d57",
    storageBucket: "srsdata-d6d57.appspot.com",
    messagingSenderId: "220680579514",
    appId: "1:220680579514:web:fc020db6ef2724d4d0d583"
})
var db = firebaseApp.firestore();
export {db};