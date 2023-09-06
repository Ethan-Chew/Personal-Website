// Database
import db from "@/firebase/config"
import { collection, getDocs } from "firebase/firestore";

export default class getFirestore {
    static async getCollection(name) {
        const querySnapshot = await getDocs(collection(db, name));

        let data

        if (name === "projects") { data = {} }
        else { data = [] }

        querySnapshot.forEach((doc) => {
            if (name === "projects") {
                let temp = []
                for (const key in doc.data()) {
                    temp.push(doc.data()[key])
                }
                data[doc.id] = temp
            } else {
                data.push(doc.data())
            }
        });
        if (name !== "projects") { data = this.sortCollection(data) }

        return data
    }

    static async sortCollection(data) {
        // This function sorts the data according to the start and end dates of the event
        const months = ['Dec', 'Nov', 'Oct', 'Sep', 'Aug', 'July', 'June', 'May', 'Apr', 'Mar', 'Feb', 'Jan']

        const sortByDate = (a, b) => {
            if (isNaN(a.startDate)) {
                // Sort by both Year and Month
                if (a.endDate === "Current") { return -1 }
                if (b.endDate === "Current") { return 1 }

                const aMonth = a.endDate.split(" ")[0]
                const bMonth = b.endDate.split(" ")[0]
                return months.indexOf(bMonth) - months.indexOf(aMonth)

            } else {
                // Sort by Year Only
                if (a.startDate === b.startDate) { return a.endDate = b.endDate }
                if (a.startDate > b.startDate) { return -1 }
                else { return 1 }
            }
        }

        // Sort by the dates
        return data.sort(sortByDate)
    }
}