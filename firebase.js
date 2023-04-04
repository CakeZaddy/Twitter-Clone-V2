// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getStorage } from 'firebase/storage'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: 'twitter-clone-ea1d4.firebaseapp.com',
  projectId: 'twitter-clone-ea1d4',
  storageBucket: 'twitter-clone-ea1d4.appspot.com',
  messagingSenderId: '730130008658',
  appId: '1:730130008658:web:5bf59bcc76bb6e3cdd2d8b',
}

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp()
const db = getFirestore()
const storage = getStorage()
export { app, db, storage }
