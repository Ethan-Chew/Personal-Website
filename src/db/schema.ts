export interface Project {
    name: string,
    language: string,
    ghRepo: string,
    startDate: string,
    endDate: string,
    website: string | null,
    desc: string,
    appStoreLink: string | null,
    order: number,
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

export interface Education {
    name: string,
    edulevel: string,
    desc: string,
    tldrDesc: string,
    startDate: string,
    endDate: string,
}