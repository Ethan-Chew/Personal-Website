import Link from 'next/link';
import { FaCamera } from 'react-icons/fa';

export default function PhotographySection() {
    return (
        <section id="photography" className="w-full intersect:animate-slide-in-from-left">
             <div className="relative overflow-hidden rounded-2xl bg-neutral-900 dark:bg-[#1a1a1a] text-white p-8 md:p-12 shadow-2xl border border-white/10">
                {/* Background Pattern/Gradient */}
                <div className="absolute top-0 right-0 -mt-20 -mr-20 w-64 h-64 bg-accent dark:bg-darkaccent opacity-20 blur-3xl rounded-full pointer-events-none"></div>
                <div className="absolute bottom-0 left-0 -mb-20 -ml-20 w-64 h-64 bg-accent dark:bg-darkaccent opacity-20 blur-3xl rounded-full pointer-events-none"></div>
                
                <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
                    <div className="space-y-4 max-w-xl">
                        <div className="flex items-center gap-3 text-accent dark:text-darkaccent">
                            <FaCamera size={20} />
                            <h3 className="text-sm font-bold uppercase tracking-wider">Photography</h3>
                        </div>
                        <h2 className="text-3xl md:text-4xl font-bold leading-tight text-white">Capturing the world,<br/>one frame at a time.</h2>
                        <p className="text-neutral-300 dark:text-neutral-400 text-lg leading-relaxed">
                             Beyond code, I explore the world through my lens. From aviation to street photography, check out some of my <i>snaps</i>.
                        </p>
                    </div>
                    
                    <Link href="https://photography.ethanchew.com" target="_blank" className="group">
                        <button className="px-8 py-4 bg-white text-neutral-900 hover:bg-neutral-100 rounded-xl font-bold transition-all duration-300 transform group-hover:scale-105 group-hover:shadow-lg flex items-center gap-2 whitespace-nowrap">
                            View Gallery ↗
                        </button>
                    </Link>
                </div>
             </div>
        </section>
    )
}
