import { Education, Experience, typeIsEducation } from "@/db/schema";

interface IContainer {
    tldr: boolean;
    data: Education | Experience;
}

export default function Container({ tldr, data }: IContainer) {
    return (
        <div className="py-3 px-5 border border-lightgrey rounded-xl space-y-2">
            <div id="container-header">
                <h3 className="text-2xl font-semibold">{ data.name }</h3>
                <p className="text-neutral-500">{ data.startDate } - { data.endDate } | { typeIsEducation(data) ? data.edulevel : data.place }</p>
            </div>
            <p id="container-desc" className={tldr ? "hidden" : "block"}>
                { data.desc }
            </p>
            <ul id="container-tldr-desc" className={tldr ? "block" : "hidden"}>
                { data.tldrDesc && data.tldrDesc.split(";").map((desc, index) => <li key={index}>- { desc }</li>)}
            </ul>
        </div>
    )
}