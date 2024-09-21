import { Education } from "@/firebase/schema";

// interface IContainer {
//     tldr: boolean;
//     data: Education;
// }

// export default function Container({ tldr, data }: IContainer) {
export default function Container() {
    return (
        <div className="py-3 px-5 border border-lightgrey rounded-xl space-y-2">
            <div id="container-header">
                <h3 className="text-2xl font-semibold">Ngee Ann Polytechnic</h3>
                <p className="text-neutral-500">2020 - 2021 | Information Technology</p>
            </div>
            <ul id="container-desc">
                <li>- aaa</li>
            </ul>
        </div>
    )
}