import { ProjectTag, projectTags } from "../../../public/data/tags";

interface IProjectTagContainer {
    tagId: string
}

export default function ProjectTagContainer({ tagId }: IProjectTagContainer) {
    const tag: ProjectTag = projectTags.find(tag => tag.id === tagId) as ProjectTag;

    return (
        <p className={`px-2 py-1 ${tag.bgLight} ${tag.textLight} dark:${tag.bgDark} dark:${tag.textDark} h-fit w-fit rounded-lg text-xs font-semibold`}>
            { tag.title }
        </p>
    )
}