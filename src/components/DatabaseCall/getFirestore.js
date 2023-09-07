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
        data = this.sortCollection(data, name)

        return data
    }

    static async sortCollection(data, name) {
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

        const sortProjects = (a, b) => {
            // Check for date range
            if (a.year.includes("-") || b.year.includes("-")) {
                if (a.year.includes("Current" || b.year.includes("Current"))) {
                    if (b.year.includes("Current")) {
                        const aDate = Number(a.year.split("-")[0])
                        const bDate = Number(b.year.split("-")[0])

                        if (aDate > bDate) { return -1 }
                        else { return 1 }
                    }

                    return -1
                }
                let aDate
                if (a.year.includes("-")) { aDate = Number(a.year.split("-")[1]) }
                else { aDate = Number(a) }

                let bDate
                if (b.year.includes("-")) { bDate = Number(b.year.split("-")[1]) }
                else { bDate = Number(b) }

                if (aDate > bDate) { return - 1}

                return 1
            }

            // No date range
            if (Number(a.year) > Number(b.year)) { return -1 }
            return 1
        }

        // Sort by the dates
        if (name === "projects") {
            let sortedData = {}
            for (const key in data) {
                sortedData[key] = data[key].sort(sortProjects)
            }
            return sortedData
        }
        else { return data.sort(sortByDate) }
    }
}