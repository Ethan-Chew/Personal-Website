import { ProjectKey, ProjectTag, projectTags } from "../../../public/data/tags";

interface IProjectTagContainer {
    tagId: string
}

export default function ProjectTagContainer({ tagId }: IProjectTagContainer) {
    const tag: ProjectTag = projectTags.find(tag => tag.id === tagId) as ProjectTag;
    const colourVariants = {
        "mobile": "text-violet-700 bg-violet-800/30 dark:text-violet-300 dark:bg-violet-500/30",
        "website": "text-yellow-700 bg-yellow-600/30 dark:text-yellow-400/80",
        "webapp": "text-green-700 bg-green-600/30 dark:text-green-400/80",
        "app": "text-blue-700 bg-blue-600/30 dark:text-blue-400/80"
    };

    return (
        <p className={`px-2 py-1 ${colourVariants[tag.id as ProjectKey]} h-fit w-fit rounded-lg text-xs font-semibold`}>
            { tag.title }
        </p>
    )
}