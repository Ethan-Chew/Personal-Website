// Database
import db from "@/firebase/config"
import { DocumentData, collection, getDocs } from "firebase/firestore";
import { Project, Projects, Experience, Education, typeIsProjects } from "@/firebase/schema"

export default class getFirestore {
    static async getCollection<T extends Projects | Experience[] | Education[]>(name: string): Promise<T> {
        const querySnapshot = await getDocs(collection(db, name));
        
        if (name === "projects") {
            let data: Projects = { "Others": [], "Web Applications": [], "iOS": [] }

            querySnapshot.forEach((doc) => {
                let temp = []
                for (const key in doc.data()) {
                    temp.push(doc.data()[key])
                }
                data[doc.id as keyof Projects] = temp
            })

            return this.sortCollection(data as T)
        } else {
            let data: Experience[] | Education[] | DocumentData = []
            
            querySnapshot.forEach((doc) => {
                data.push(doc.data())
            })

            return this.sortCollection(data as T)
        }
    }

    static sortCollection<T extends Projects | Experience[] | Education[]>(items: T):  T {
        // This function sorts the data according to the start and end dates of the event
        const months = ['Dec', 'Nov', 'Oct', 'Sep', 'Aug', 'July', 'June', 'May', 'Apr', 'Mar', 'Feb', 'Jan']
    
        if (typeIsProjects(items)) {
            let sortedData: Projects = { "Others": [], "Web Applications": [], "iOS": [] }
            // Check for Current
            for (const type in items) {
                const item = items[type as keyof Projects]
                let temp = []
                for (let i = 0; i < item.length; i++) {
                    if (item[i].endYear === "Current") {
                        temp.unshift(item[i])
                        item.splice(i, 1)
                    }
                }
        
                // Sort by end year
                item.sort((a, b) => {
                    if (Number(a.endYear) > Number(b.endYear)) { return -1 } // First one's year is larger
                    if (Number(a.endYear) < Number(b.endYear)) { return 1 } // First one's year is smaller
        
                    if (Number(a.endYear) === Number(b.endYear)) { // Share the same end year, sort by start year
                        if (Number(a.startYear) > Number(b.startYear)) { return -1 } // First one's year is larger
                        if (Number(a.startYear) < Number(b.startYear)) { return 1 } // First one's year is smaller
                    }
                    return 0
                })
    
                sortedData[type as keyof Projects] = [...temp, ...item]
            }
            return sortedData as T
        } else {
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
                        let aMonth = a.startDate.split(" ")[0]
                        let bMonth = b.startDate.split(" ")[0]
        
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
}