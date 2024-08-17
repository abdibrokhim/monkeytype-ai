// Import the functions you need from the SDKs you need
 // Import the functions you need from the SDKs you need
 import { initializeApp,getApp,getApps } from "firebase/app";
 import {getAuth} from 'firebase/auth'
 import {getFirestore} from 'firebase/firestore'
 
 // TODO: Add SDKs for Firebase products that you want to use
 // https://firebase.google.com/docs/web/setup#available-libraries
export const firebaseConfig = {
  apiKey: process.env.API_KEY,
  authDomain: process.env.AUTH_DOMAIN,
  projectId: process.env.PROJECT_ID,
  storageBucket: process.env.STORAGE_BUCKET,
  messagingSenderId: process.env.MESSAGING_SENDER_ID,
  appId: process.env.APP_ID,
  measurementId: process.env.MEASUREMENT_ID,
};

// Initialize Firebase
const app = !getApps.length ? initializeApp(firebaseConfig) :getApp()
const auth = getAuth(app)
const firestore = getFirestore(app)

export {auth,firestore,app}