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
        title: "Mobile Development",
        textDark: "text-violet-300",
        textLight: "text-violet-700",
        bgDark: "bg-violet-500/30",
        bgLight: "bg-violet-800/30"
    },
    {
        id: "website",
        title: "Website",
        textDark: "text-yellow-400/80",
        textLight: "text-yellow-700",
        bgDark: "bg-yellow-600/30",
        bgLight: "bg-yellow-600/30"
    },
    {
        id: "webapp",
        title: "Web App",
        textDark: "text-green-400/80",
        textLight: "text-green-700",
        bgDark: "bg-green-600/30",
        bgLight: "bg-green-600/30"
    },
    {
        id: "app",
        title: "General App",
        textDark: "text-blue-400/80",
        textLight: "text-blue-700",
        bgDark: "bg-blue-600/30",
        bgLight: "bg-blue-600/30"
    }
]