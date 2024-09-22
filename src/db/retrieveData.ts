// Database
import db from "@/db/firebase"
import { DocumentData, collection, getDocs } from "firebase/firestore";
import { Project, Experience, Education } from "@/db/schema"

export default class getFirestore {
    static async getCollection<T extends Project[] | Experience[] | Education[]>(collectionName: string): Promise<T> {
        if (db === null) throw new Error("Database not initialized");
        const querySnapshot = await getDocs(collection(db, collectionName));
        const data: Experience[] | Education[] | Project[] | DocumentData = []
        
        querySnapshot.forEach((doc) => {
            data.push(doc.data())
        })

        if ((data as Project[])[0].order !== undefined) { // Perform Type Guard to check for Project Data Type
            return data.sort((a: Project, b: Project) => a.order - b.order) as T
        }

        return this.sortCollection(data as T)
    }

    static sortCollection<T extends Project[] | Experience[] | Education[]>(items: T):  T {
        // This function sorts the data according to the start and end dates of the event
        const months = ['Dec', 'Nov', 'Oct', 'Sep', 'Aug', 'July', 'June', 'May', 'Apr', 'Mar', 'Feb', 'Jan']
    
        let sortedData = []

        // Check for Current
        for (let i = 0; i < items.length; i++) {
            if (items[i].endDate === "Current") {
                sortedData.unshift(items[i])
                items.splice(i, 1)
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
                    aMonth = a.startDate.split(" ")[0]
                    bMonth = b.startDate.split(" ")[0]
    
                    if (months.indexOf(aMonth) < months.indexOf(bMonth)) { return -1 }  // First Month is more current
                    if (months.indexOf(aMonth) > months.indexOf(bMonth)) { return 1 }  // First Month is less current
                }
            }

            return 0
        })
    
        sortedData = [...sortedData, ...items as Experience[] | Education[]]
        return sortedData as T
    }
}