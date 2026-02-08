"use client";
import { useSearchParams, useRouter } from 'next/navigation'
import { Suspense } from 'react';

function Button() {
    const router = useRouter();
    const searchParams = useSearchParams();
    const tldr = searchParams.get("tldr");

    const handleBtn = () => {
        if (tldr !== "true") {
            router.replace("?tldr=true", { scroll: false });
        } else {
            router.replace("?tldr=false", { scroll: false });
        }
    }

    return (
        <>
            <button className="fixed bottom-10 right-10 py-2 px-10 bg-accent dark:bg-darkaccent text-white hover:drop-shadow-[0_0px_10px_rgba(18,145,143,.4)] font-bold text-xl rounded-full duration-200 z-50" onClick={handleBtn}>
                { tldr == "true" ? "un-tl;dr" : "tl;dr" }
            </button>
        </>
    )
}

export default function TldrButton() { 
    return (
        <Suspense>
            <Button />
        </Suspense>
    )
}