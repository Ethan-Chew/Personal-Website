// Database
import db from "@/db/firebase"
import { DocumentData, collection, getDocs } from "firebase/firestore";
import { Project, Experience, Education, Skill, Certificate, Achievement } from "@/db/schema"

export default class getFirestore {
    static async getCollection<T extends Project[] | Experience[] | Education[]>(collectionName: string): Promise<T> {
        if (db === null) throw new Error("Database not initialized");
        const querySnapshot = await getDocs(collection(db, collectionName));
        const data: Experience[] | Education[] | Project[] | DocumentData = []

        querySnapshot.forEach((doc) => {
            data.push(doc.data())
        })

        if (data.length > 0 && (data as Project[])[0].order !== undefined) { // Perform Type Guard to check for Project Data Type
            return data.sort((a: Project, b: Project) => a.order - b.order) as T
        }

        return this.sortCollection(data as T)
    }

    static sortCollection<T extends Project[] | Experience[] | Education[]>(items: T): T {
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
            const getYear = (date: string | undefined) => {
                if (!date || date === "Current") return new Date().getFullYear() + 1; // Future/Top
                const parts = date.split(" ");
                if (parts.length === 2) return Number(parts[1]); // "May 2024" -> 2024
                if (!isNaN(Number(date))) return Number(date); // "2024"
                return 0;
            }

            const getMonth = (date: string | undefined) => {
                if (!date) return -1;
                const parts = date.split(" ");
                if (parts.length === 2) return months.indexOf(parts[0]);
                return -1;
            }

            const aDate = a.endDate || "";
            const bDate = b.endDate || "";

            const aYear = getYear(aDate);
            const bYear = getYear(bDate);

            if (aYear > bYear) return -1;
            if (aYear < bYear) return 1;

            // Same year
            const aMonth = getMonth(aDate);
            const bMonth = getMonth(bDate);

            if (aMonth > bMonth) return -1; // Later month first
            if (aMonth < bMonth) return 1;

            return 0;
        })

        sortedData = [...sortedData, ...items as Experience[] | Education[]]
        return sortedData as T
    }

    static async getSkills(): Promise<Skill[]> {
        if (db === null) throw new Error("Database not initialized");
        const querySnapshot = await getDocs(collection(db, 'skills'));
        const data: Skill[] = []
        querySnapshot.forEach((doc) => {
            data.push(doc.data() as Skill)
        })
        return data.sort((a, b) => b.year - a.year)
    }

    static async getCertificates(): Promise<Certificate[]> {
        if (db === null) throw new Error("Database not initialized");
        const querySnapshot = await getDocs(collection(db, 'certificates'));
        const data: Certificate[] = []
        querySnapshot.forEach((doc) => {
            data.push(doc.data() as Certificate)
        })
        // Simple string sort or parse date if needed. 
        // Current data format "May 2024". 
        // For now, let's just return as is or basic sort. User can verify order.
        return data
    }

    static async getAchievements(): Promise<Achievement[]> {
        if (db === null) throw new Error("Database not initialized");
        const querySnapshot = await getDocs(collection(db, 'achievements'));
        const data: Achievement[] = []
        querySnapshot.forEach((doc) => {
            // Filter out unrelated collections if they share name? No, 'achievements' is unique.
            data.push(doc.data() as Achievement)
        })
        return data
    }
}