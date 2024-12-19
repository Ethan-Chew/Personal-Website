import { CertsAchievements } from "../../public/data/certs";
import { FaSwift } from "react-icons/fa";
import { DiScrum } from "react-icons/di";
import Link from "next/link";

export default function ACContainer({ data }: { data: CertsAchievements}) {
    return (
        <Link href={data.link ? data.link : ""} className={data.link === null ? "pointer-events-none" : "cursor-pointer"}>
            <div className="flex flex-row gap-3 items-center">
                { data.icon ? 
                    <div className="p-2 rounded-lg bg-white">
                        {  data.icon === "swift" ? <FaSwift size={30} className="fill-darkbackground" /> : <DiScrum size={30} className="fill-darkbackground" /> }
                    </div>
                : <></> }
                <div>
                    <p className="font-semibold text-xl">{ data.name }</p>
                    <p className="text-neutral-500 text-base">{ data.date }</p>
                </div>
            </div>
        </Link>
    )
}