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