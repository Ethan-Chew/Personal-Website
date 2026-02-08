export interface Project {
    name: string,
    tag: string,
    language: string,
    ghRepo: string,
    startDate: string,
    endDate: string,
    website: string | null,
    desc: string,
    appStoreLink: string | null,
    order: number,
    image: string | null
}

export interface Experience {
    name: string,
    desc: string,
    tldrDesc: string,
    place: string,
    startDate: string,
    endDate: string,
    type: string
}

export function typeIsEducation(data: Education | Experience): data is Education {
    return (data as Education).edulevel !== undefined
}
export interface Education {
    name: string,
    edulevel: string,
    desc: string,
    tldrDesc: string,
    startDate: string,
    endDate: string,
}

export interface Skill {
    id?: string, // Firestore ID
    name: string,
    iconName: string, // String name for IconMapper
    year: number,
    type: string // "Web", "Mobile", "Database", "Programming", "Full-Stack"
}

export interface Certificate {
    id?: string,
    name: string,
    date: string,
    iconName: string | null, // "scrum", "swift", or null
    link: string | null
}

export interface Achievement {
    id?: string,
    name: string,
    date: string,
    // Achievements in current code don't have icons/links usually, but schema in certs.ts had them.
    // We'll keep it consistent with Certificate for flexibility or simple if not needed.
    // Looking at public/data/certs.ts, they share the same interface "CertsAchievements"
    iconName: string | null,
    link: string | null
}