import { initializeApp } from 'firebase/app'
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
    apiKey: process.env.NEXT_PUBLIC_FIREBASE_APIKEY,
    authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
    projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
    storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
    measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID,
}

if (firebaseConfig.apiKey === undefined) {
    console.error("API Key Missing/Corrupted")
} else {
    console.log("API Key Loaded")
}

try {
    const app = initializeApp(firebaseConfig)
    console.log("Initalized Firebase")
} catch (error) {
    console.error("Error in Initalizing Firebase")
    console.log(error)
}

let getFire: any = undefined

try {
    getFire = getFirestore()
    console.log("Initalized Cloud Firestore")
} catch (error) {
    console.error("Error in Getting Firestore")
    console.error(error)
}

export default getFire