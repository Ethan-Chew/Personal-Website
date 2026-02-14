import { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
    title: 'Ethan Chew | 404',
    description: `Page not found!`,
}

export default function NotFound() {
    return (
        <>
            <div className="loader bg-background dark:bg-darkbackground flex min-w-screen min-h-screen justify-center items-center">
                <div className="text-center max-w-sm">
                    <div className="my-9">
                        <h1 className="font-semibold text-7xl pb-2">404</h1>
                        <h2 className="font-medium text-2xl">Page not Found</h2>
                    </div>
                    <p className="text-md mb-8">
                        Oops! There is nothing here.. Did you type the wrong link, or... did <b>I</b> have a <i>skill issue?</i> :p
                    </p>
                    <Link href="/" rel="noreferrer" className="p-3 px-5 duration-200 bg-lightbtngrey hover:bg-lightbtnhover dark:bg-darkbtngrey dark:hover:bg-darkbtnhover rounded-3xl">
                        Back to Home
                    </Link>
                </div>
            </div>
        </>
    )
}