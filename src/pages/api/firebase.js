import { initializeApp } from 'firebase/app'
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
    apiKey: process.env.NEXT_PUBLIC_FIREBASE_APIKEY,
    authDomain: "ethancheww.firebaseapp.com",
    projectId: "ethancheww",
    storageBucket: "ethancheww.appspot.com",
    messagingSenderId: "113750028131",
    appId: "1:113750028131:web:0269497dfedb4160706d56",
    measurementId: "G-XBF3B75BTV"
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

let getFire = undefined

try {
    getFire = getFirestore()
    console.log("Initalized Cloud Firestore")
} catch (error) {
    console.error("Error in Getting Firestore")
    console.error(error)
}

export default getFire