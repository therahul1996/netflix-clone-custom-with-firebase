
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
const firebaseConfig = {
  apiKey: "AIzaSyCU0I3b6WV4pk4SlrPcRF5v290YagTw4Rw",
  authDomain: "netflix-clone-custom.firebaseapp.com",
  projectId: "netflix-clone-custom",
  storageBucket: "netflix-clone-custom.appspot.com",
  messagingSenderId: "268332953658",
  appId: "1:268332953658:web:71ebb3b059a6ccfdbb8503",
  measurementId: "G-J4WXVT80KE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const db = app.firestore();
const auth = getAuth(app);
export {app, auth};