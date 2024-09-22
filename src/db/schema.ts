export interface Project {
    name: string,
    pic: string,
    language: string,
    ghRepo: string,
    startDate: string,
    endDate: string,
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