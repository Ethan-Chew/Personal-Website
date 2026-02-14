"use client";
import { useTldr } from './TldrContext';

function Button() {
    const { tldr, toggleTldr } = useTldr();

    return (
        <button 
            className="fixed bottom-10 right-10 py-2 px-10 bg-accent dark:bg-darkaccent text-white hover:drop-shadow-[0_0px_10px_rgba(18,145,143,.4)] font-bold text-xl rounded-full duration-200 z-50" 
            onClick={toggleTldr}
        >
            { tldr ? "un-tl;dr" : "tl;dr" }
        </button>
    )
}

export default function TldrButton() { 
    return <Button />
}