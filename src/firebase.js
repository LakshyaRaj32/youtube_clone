import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase } from "firebase/database"; 
import { GoogleAuthProvider,getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCzr1L0ItqZUaZOVEyPHsDSNzhsWhEpfbk",
  authDomain: "clone-yt-e0cae.firebaseapp.com",
  projectId: "clone-yt-e0cae",
  storageBucket: "clone-yt-e0cae.appspot.com",
  messagingSenderId: "198828496072",
  appId: "1:198828496072:web:494c9efae04d2fa1d201fd",
  measurementId: "G-SCS8H3FLCZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
export const db = getFirestore(app);
export const provider = new GoogleAuthProvider();

