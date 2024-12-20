export interface Skill {
    name: string,
    desc: string[],
    icon: string[]
}

export interface ISkills {
    "Technologies": Skill[],
    "Softwares": Skill[],
}

export interface ISoftwares {
    "Developer Tools": Skill[],
    
}

export const skills: ISkills = {
    "Technologies": [

    ],
    "Softwares": []
}