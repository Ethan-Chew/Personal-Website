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

        data = this.sortCollection(data)

        return data
    }

    static async sortCollection(data) {
        console.log(data)
        // This function sorts the data according to the start and end dates of the event
        const months = ['Dec', 'Nov', 'Oct', 'Sep', 'Aug', 'July', 'June', 'May', 'Apr', 'Mar', 'Feb', 'Jan']

        const sortByDate = (a, b) => {
            if (!isNaN(a.startDate)) {
                // Sort by Year Only
                if (a.startDate === b.startDate) { return a.endDate = b.endDate }
                if (a.startDate > b.startDate) { return -1 }
                else { return 1 }

            } else {
                // Sort by both Year and Month
                if (a.endDate === "Current") { return -1 }
                if (b.endDate === "Current") { return 1 }

                const aMonth = a.startDate.split(" ")[0]
                const bMonth = b.startDate.split(" ")[0]
                return months.indexOf(aMonth) - months.indexOf(bMonth)
            }
        }

        // Sort by the dates
        return data.sort(sortByDate)
    }
}