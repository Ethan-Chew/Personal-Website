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

export interface KSAchievements {
    name: string,
    year: string,
    url: string | null,
}

export interface KSDataSkills {
    "Developer Tools": KSSkills[],
    "Technologies": KSSkills[],
    "Design Tools": KSSkills[],
    "Post Production": KSSkills[]
}

export interface KSData {
    "Languages": KSLanguages[],
    "Skills": KSDataSkills,
    "Achievements": KSAchievements[]
}

export const dataObj: KSData = {
    "Languages": [
        {
            name: "Full-Stack Web Development",
            desc: ["I frequently use Next.js and React.js for Web Development. The framework and library allows me to create websites with ease. While developing these websites, Tailwind CSS and various databases such as Firebase and MongoDB are also used.", "Recently, for web development, I have been working on a revamp of my personal website with Next.js 13 (this website!) and creating a Full-Stack Web Application, ProjMatch, with a bunch of my friends.", "These websites are then deployed either on Vercel or on Google Cloud Run."],
            icon: ["devicon-javascript-plain", "devicon-typescript-plain", "devicon-react-original", "devicon-nextjs-original"]
        },
        {
            name: "App Development",
            desc: ["I have experience in developing apps for both iOS and Android. For iOS, I use Swift and Xcode. For Android, I use Java and Android Studio. App development was my first dive into coding, and I still love it today!", "I have created apps on both platforms, such as ArrivalSG on iOS and Quizzzy on Android."],
            icon: ["devicon-swift-plain", "devicon-android-plain"]
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
            },
            {
                name: "Android Studio",
                desc: "Android Development",
                icon: "devicon-androidstudio-plain"
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
                name: "AWS S3",
                desc: "Object Storage",
                icon: "devicon-amazonwebservices-plain"
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
    },
    "Achievements": [
        {
            name: "FAA Private Pilot Licence (Airplane Single Engine Land)",
            year: "2024",
            url: null
        },
        {
            name: "A*Star Science Award (Polytechnic)",
            year: "2024 - 2025",
            url: null
        },
        {
            name: "Professional Scrum Master™ I (PSM I)",
            year: "2024",
            url: "https://www.credly.com/badges/d36fa9c8-508f-449d-8662-27d9e6bd55a7/public_url"
        },
        {
            name: "Ngee Ann Polytechnic Scholarship",
            year: "2023 - 2024",
            url: null
        },
        {
            name: "App Development in Swift Certified User",
            year: "2022",
            url: "https://www.credly.com/badges/049bd2c9-00a3-41b6-a521-7396b6cf57b9/public_url"
        },
        {
            name: "App Development in Swift Associate",
            year: "2022",
            url: "https://www.credly.com/badges/d8761176-2a3f-4349-9af8-9efc7ef36809/public_url"
        }
    ]
}