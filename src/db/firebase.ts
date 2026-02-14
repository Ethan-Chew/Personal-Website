import { initializeApp, getApps } from 'firebase/app'
import { getFirestore, Firestore } from "firebase/firestore/lite"

const firebaseConfig = {
    apiKey: process.env.NEXT_PUBLIC_FIREBASE_APIKEY,
    authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
    projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
    storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
    measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID,
}

let db: Firestore;

try {
    if (getApps().length > 0) {
        db = getFirestore(getApps()[0]);
    } else {
        const app = initializeApp(firebaseConfig);
        db = getFirestore(app);
    }
} catch (err) {
    console.warn("Firebase initialization error (likely due to build environment):", err);
    // Don't throw, just let db be undefined or a mock. 
    // retrieveData.ts handles errors when using db.
    db = {} as Firestore;
}

export default db