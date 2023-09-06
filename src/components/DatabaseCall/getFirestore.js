// Database
import db from "@/firebase/config"
import { collection, getDocs } from "firebase/firestore";

export default class getFirestore {
    static async getCollection(name) {
        const querySnapshot = await getDocs(collection(db, name));

        let data = []
        querySnapshot.forEach((doc) => {
            data.push(doc.data())
        });

        return data
    }
}