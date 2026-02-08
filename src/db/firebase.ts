import { initializeApp, getApps } from 'firebase/app'
import { getFirestore, Firestore } from "firebase/firestore"

const firebaseConfig = {
    apiKey: process.env.NEXT_PUBLIC_FIREBASE_APIKEY,
    authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
    projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
    storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
    measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID,
}

let db: Firestore | null = null

try {
    // console.log("Firebase Config:", JSON.stringify(firebaseConfig, null, 2)) // Debugging
    if (!getApps().length) {
        initializeApp(firebaseConfig)
    }
    db = getFirestore()
} catch (err) {
    console.log(err)
}

export default db