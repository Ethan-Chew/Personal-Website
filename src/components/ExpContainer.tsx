import { Education, Experience, typeIsEducation } from "@/db/schema";

interface IContainer {
    tldr: boolean;
    data: Education | Experience;
}

export default function ExpContainer({ tldr, data }: IContainer) {
    const pastRoles = !typeIsEducation(data) ? data.pastRoles : undefined;

    return (
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 py-8 px-4 -mx-4 rounded-xl transition-colors duration-200 hover:bg-neutral-50 dark:hover:bg-neutral-800/50">
            <div className="md:col-span-1 space-y-1.5">
                <span className="text-sm font-medium tracking-wide text-neutral-400 dark:text-neutral-500 uppercase">
                    {data.startDate} — {data.endDate}
                </span>
                <h3 className="font-bold text-lg text-neutral-900 dark:text-white leading-tight">
                    {data.name}
                </h3>
                <p className="text-sm font-medium text-neutral-600 dark:text-neutral-400">
                    {typeIsEducation(data) ? data.edulevel : data.place}
                </p>

                {/* Past Roles */}
                {pastRoles && pastRoles.length > 0 && (
                    <div className="pt-3 space-y-2">
                        <p className="text-xs font-semibold uppercase tracking-widest text-neutral-400 dark:text-neutral-500">
                            Past Roles
                        </p>
                        <ul className="space-y-2">
                            {pastRoles.map((role, i) => (
                                <li key={i} className="flex items-start gap-2">
                                    <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-neutral-400 dark:bg-neutral-600" />
                                    <div>
                                        <p className="text-sm font-medium text-neutral-700 dark:text-neutral-300 leading-tight">
                                            {role.name}
                                        </p>
                                        <p className="text-xs text-neutral-400 dark:text-neutral-500 uppercase tracking-wide">
                                            {role.startDate} — {role.endDate}
                                        </p>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                )}
            </div>
            
            <div className="md:col-span-3 text-neutral-600 dark:text-neutral-300">
                <p id="container-desc" className={`${tldr ? "hidden" : "block"} leading-relaxed text-base`}>
                    {data.desc}
                </p>
                <ul id="container-tldr-desc" className={`${tldr ? "block" : "hidden"} space-y-2 list-disc list-inside text-base`}>
                    {data.tldrDesc && data.tldrDesc.split(";").map((desc, index) => (
                        <li key={index} className="leading-relaxed">{desc}</li>
                    ))}
                </ul>
            </div>
        </div>
    )
}