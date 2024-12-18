import { ProjectTag } from "@/data/tags";

export default function ProjectTagContainer({ tag }: { tag: ProjectTag }) {
    return (
        <p className={`px-2 py-1 ${tag.bgLight} ${tag.textLight} dark:${tag.bgDark} dark:${tag.textDark} w-fit rounded-lg text-xs font-semibold`}>
            { tag.title }
        </p>
    )
}