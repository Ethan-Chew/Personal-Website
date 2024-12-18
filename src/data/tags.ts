export interface ProjectTag {
    id: string,
    title: string,
    textLight: string,
    textDark: string,
    bgLight: string,
    bgDark: string
}

export const projectTags: ProjectTag[] = [
    {
        id: "mobile",
        title: "Mobile",
        textDark: "text-purple-300/80",
        textLight: "text-purple-700",
        bgDark: "bg-purple-500/30",
        bgLight: "bg-purple-800/30"
    },
    {
        id: "fullstack",
        title: "Full-Stack",
        textDark: "text-yellow-400/80",
        textLight: "text-yellow-700",
        bgDark: "bg-yellow-600/30",
        bgLight: "bg-yellow-600/30"
    },
    {
        id: "frontend",
        title: "Front-End",
        textDark: "text-green-400/80",
        textLight: "text-green-700",
        bgDark: "bg-green-600/30",
        bgLight: "bg-green-600/30"
    },
    {
        id: "app",
        title: "App",
        textDark: "text-blue-400/80",
        textLight: "text-blue-700",
        bgDark: "bg-blue-600/30",
        bgLight: "bg-blue-600/30"
    }
]