export interface Projects {
    "Others": Project[],
    "Web Applications": Project[],
    "iOS": Project[]
}

export function typeIsProjects(obj: any): obj is Projects {
    return "Others" in obj && "Web Applications" in obj && "iOS" in obj
}

export interface Project {
    name: string,
    pic: string,
    language: string,
    ghRepo: string,
    startYear: string | null,
    endYear: string,
    website: string | null,
    desc: string,
    appStoreLink: string | null,
    currentlyUpdated: boolean
}

export interface Experience {
    name: string,
    desc: string,
    darkImg: string,
    lightImg: string,
    startDate: string,
    endDate: string,
}

export interface Education {
    name: string,
    desc: string,
    darkImg: string,
    lightImg: string,
    startDate: string,
    endDate: string,
}