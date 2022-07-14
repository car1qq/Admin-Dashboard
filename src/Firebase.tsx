import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'

export const app = initializeApp({
apiKey: "AIzaSyBsPuDiX8qJs1pmtj7fDPqpEwFeo4SCdvQ",
  authDomain: "socialapp-17226.firebaseapp.com",
  databaseURL: "https://socialapp-17226-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "socialapp-17226",
  storageBucket: "socialapp-17226.appspot.com",
  messagingSenderId: "605228920802",
  appId: "1:605228920802:web:1f511d41f45335e11f93bb",
  measurementId: "G-W4XDY7XRP5"
})
// export const APP_COLLECTION = 'users'
export const auth = getAuth(app)
export const firestore = getFirestore(app)
