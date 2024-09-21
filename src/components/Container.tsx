import { Education, Experience } from "@/db/schema";

interface IContainer {
    tldr: boolean;
    data: Education | Experience;
}

export default function Container({ tldr, data }: IContainer) {
    return (
        <div className="py-3 px-5 border border-lightgrey rounded-xl space-y-2">
            <div id="container-header">
                <h3 className="text-2xl font-semibold">{ data.name }</h3>
                <p className="text-neutral-500">{ data.startDate } - { data.endDate } | </p>
            </div>
            <ul id="container-desc">
                <li>- aaa</li>
            </ul>
        </div>
    )
}