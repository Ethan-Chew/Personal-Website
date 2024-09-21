"use client";
import { useSearchParams, useRouter } from 'next/navigation'

export default function TldrButton() {
    const router = useRouter();
    const searchParams = useSearchParams();
    const tldr = searchParams.get("tldr");

    const handleBtn = () => {
        if (tldr !== "true") {
            router.push("?tldr=true");
        } else {
            router.push("?tldr=false");
        }
    }

    return (
        <button className="fixed bottom-10 right-10 py-2 px-10 bg-accent text-white hover:drop-shadow-[0_0px_10px_rgba(18,145,143,.4)] font-bold text-xl rounded-full duration-200" onClick={handleBtn}>
            { tldr !== "true" ? "un-tl;dr" : "tl;dr" }
        </button>
    )
}