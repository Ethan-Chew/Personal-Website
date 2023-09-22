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

    static sortCollection(items, name) {
        // This function sorts the data according to the start and end dates of the event
        const months = ['Dec', 'Nov', 'Oct', 'Sep', 'Aug', 'July', 'June', 'May', 'Apr', 'Mar', 'Feb', 'Jan']
    
        if (name === "projects") {
            let sortedData = {}
            // Check for Current
            for (const type in items) {
                const item = items[type]
                let temp = []
                for (const val in item) {
                    if (item[val].endYear === "Current") {
                        temp.unshift(item[val])
                        item.splice(val, 1)
                    }
                }
        
                // Sort by end year
                item.sort((a, b) => {
                    if (Number(a.endYear) > Number(b.endYear)) { return -1 } // First one's year is larger
                    if (Number(a.endYear) < Number(b.endYear)) { return 1 } // First one's year is smaller
        
                    if (Number(a.endYear) === Number(b.endYear)) { // Share the same end year, sort by start year
                        if (Number(a.startYear) > Number(b.startYear)) { return -1 } // First one's year is larger
                        if (Number(a.startYear) < Number(b.startYear)) { return 1 } // First one's year is smaller
                        
                        return 0
                    }
                })
    
                sortedData[type] = [...temp, ...item]
            }
            return sortedData
        } else {
            let sortedData = []
    
            // Check for Current
            for (const val in items) {
                if (items[val].endDate === "Current") {
                    sortedData.unshift(items[val])
                    items.splice(val, 1)
                    break
                }
            }
        
            // Sort by end date
            items.sort((a, b) => {
                if (Number(a.endDate.slice(-4)) > Number(b.endDate.slice(-4))) { return -1 } // First one's year is larger
                if (Number(a.endDate.slice(-4)) < Number(b.endDate.slice(-4))) { return 1 } // First one's year is smaller
        
                if (Number(a.endDate.slice(-4)) === Number(b.endDate.slice(-4))) { // Share the same year, so sort by endDate month
                    let aMonth = a.endDate.split(" ")[0]
                    let bMonth = b.endDate.split(" ")[0]
        
                    if (months.indexOf(aMonth) < months.indexOf(bMonth)) { return -1 }  // First Month is more current
                    if (months.indexOf(aMonth) > months.indexOf(bMonth)) { return 1 }  // First Month is less current
        
                    if (months.indexOf(aMonth) === months.indexOf(bMonth)) { // Same ending month, sort by startDate month
                        let aMonth = a.startDate.split(" ")[0]
                        let bMonth = b.startDate.split(" ")[0]
        
                        if (months.indexOf(aMonth) < months.indexOf(bMonth)) { return -1 }  // First Month is more current
                        if (months.indexOf(aMonth) > months.indexOf(bMonth)) { return 1 }  // First Month is less current
                    } else { return 0 }
                }
            })
        
            sortedData = [...sortedData, ...items]
            return sortedData
        }
    }
}