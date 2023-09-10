import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";
import {getDatabase,ref,set,get,child} from 'firebase/app'
const firebaseConfig = {
  apiKey: "AIzaSyAc0-M2VHS0_nUpmNH0VxkTELGkWP6nxAc",
  authDomain: "srsdata-d6d57.firebaseapp.com",
  databaseURL: "https://srsdata-d6d57-default-rtdb.firebaseio.com",
  projectId: "srsdata-d6d57",
  storageBucket: "srsdata-d6d57.appspot.com",
  messagingSenderId: "220680579514",
  appId: "1:220680579514:web:fc020db6ef2724d4d0d583"
};

const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);
const firestore = getFirestore(app);
const storage = getStorage(app);
export const auth = getAuth(app);
export { app, firestore, storage };
export const db = getFirestore(app);
var bd =firestore;
export {bd};