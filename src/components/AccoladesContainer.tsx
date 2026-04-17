import { CertsAchievements } from "../../public/data/certs";
import Link from "next/link";

export default function AccoladesContainer({
  data,
}: {
  data: CertsAchievements;
}) {
  return (
    <Link
      href={data.link ? data.link : ""}
      className={data.link === null ? "pointer-events-none" : "cursor-pointer"}
    >
      <div className="flex flex-row gap-3 items-center">
        {data.icon ? (
          <div className="p-2 rounded-lg bg-white">{data.icon}</div>
        ) : (
          <></>
        )}
        <div>
          <p className="font-semibold text-lg md:text-xl">{data.name}</p>
          <p className="text-neutral-500 text-base">{data.date}</p>
        </div>
      </div>
    </Link>
  );
}
