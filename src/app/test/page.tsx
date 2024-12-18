export default function Test() {
    return (
        <main className="p-10">
            <div className="flex flex-col gap-3 bg-background p-5">
                <p className="px-2 py-1 bg-purple-800/30 text-purple-700 w-fit rounded-lg text-xs font-semibold">
                    Mobile
                </p>

                <p className="px-2 py-1 bg-yellow-600/30 text-yellow-700 w-fit rounded-lg text-xs font-semibold">
                    Full-Stack
                </p>

                <p className="px-2 py-1 bg-green-600/30 text-green-700 w-fit rounded-lg text-xs font-semibold">
                    Front-End
                </p>

                <p className="px-2 py-1 bg-blue-600/30 text-blue-700 w-fit rounded-lg text-xs font-semibold">
                    App
                </p>
            </div>
        </main>
    )
}