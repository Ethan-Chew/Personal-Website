export interface KSLanguages {
    name: string,
    desc: string[],
    icon: string[]
}

export interface KSSkills {
    name: string,
    desc: string,
    icon: string
}

export interface KSDataSkills {
    "Developer Tools": KSSkills[],
    "Technologies": KSSkills[],
    "Design Tools": KSSkills[],
    "Post Production": KSSkills[]
}

export interface KSData {
    "Languages": KSLanguages[],
    "Skills": KSDataSkills
}

export const dataObj: KSData = {
    "Languages": [
        {
            name: "Web Development",
            desc: ["For web development, I frequently use Next.js and React.js. The framework and library allows me to create websites with ease. While developing these websites, Tailwind CSS and various databases such as Firebase and MongoDB are also used.", "Recently, for web development, I have been working on a revamp of my personal website with Next.js 13 (this website!) and creating a Full-Stack Web Application, ProjMatch, with a bunch of my friends.", "These websites are then deployed either on Vercel or on Google Cloud Run."],
            icon: ["devicon-javascript-plain", "devicon-react-original", "devicon-nextjs-original"]
        },
        {
            name: "Swift",
            desc: ["Swift is a language used to develop iOS, iPadOS, tvOS, MacOS and tvOS. Swift is one of the first language I've actually learnt! One of the most notable apps I have created with Swift is ArrivalSG, a transport app that allows users to view the bus arrival times, the MRT Map and Train Disruptions if any.", "Additionally, I have attained both the App Development in Swift Certified User and Associate Certifications."],
            icon: ["devicon-swift-plain"]
        },
        {
            name: "Python",
            desc: [],
            icon: []
        },
        {
            name: "C#",
            desc: [],
            icon: []
        },
        {
            name: "HTML",
            desc: [],
            icon: []
        },
        {
            name: "CSS",
            desc: [],
            icon: []
        },
    ],
    "Skills": {
        "Developer Tools": [
            {
                name: "GitHub",
                desc: "Version Control",
                icon: "devicon-github-plain"
            },
            {
                name: "Xcode",
                desc: "iOS Development",
                icon: "devicon-xcode-plain"
            },
            {
                name: "Visual Studio Code",
                desc: "General/Web Development",
                icon: "devicon-vscode-plain"
            }
        ],
        "Technologies": [
            {
                name: "MongoDB",
                desc: "NoSQL Database",
                icon: "devicon-mongodb-plain"
            },
            {
                name: "Firebase",
                desc: "NoSQL Database",
                icon: "devicon-firebase-plain"
            },
            {
                name: "Microsoft SQL Server",
                desc: "SQL Database",
                icon: "devicon-microsoftsqlserver-plain"
            },
            {
                name: "Google Cloud Run",
                desc: "Deployment",
                icon: "devicon-googlecloud-plain"
            }
        ],
        "Design Tools": [
            {
                name: "Figma",
                desc: "UI/UX Design",
                icon: "devicon-figma-plain"
            },
            {
                name: "Adobe XD",
                desc: "UI/UX Design",
                icon: "devicon-xd-plain"
            },
            {
                name: "Adobe Photoshop",
                desc: "Image Editing and Creation",
                icon: "devicon-photoshop-plain"
            },
        ],
        "Post Production": [
            {
                name: "Davinci Resolve",
                desc: "Video Editing",
                icon: ""
            },
            {
                name: "iMovie",
                desc: "Video Editing",
                icon: ""
            },
            {
                name: "Adobe Lightroom",
                desc: "Photo Editing",
                icon: ""
            }
        ]
    }
}