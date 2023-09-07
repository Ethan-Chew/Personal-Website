import styles from "./header.module.css"

// Icons
import { FaLinkedin, FaGithub } from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'

export default function Header() {
    return (
        <>
            <div>
                {/* Top Information */}
                <div className="">
                    <h1 className="text-5xl font-semibold pb-2">Ethan Chew</h1>
                    <h2 className="text-xl font-light">This is some sample text lol</h2>
                </div>

                <br />
                <div className={styles.divider}></div>
                <br />

                {/* Description */}
                <div className="break-words">
                    <p className="break-words">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam ornare faucibus sapien vitae sagittis. Cras condimentum fringilla massa. Morbi suscipit commodo varius. Nunc nec lorem a sapien rutrum auctor at quis quam. Sed commodo lorem sit amet ante vulputate, eu convallis ex auctor. Morbi vitae consequat leo. Sed eget condimentum velit. Donec a enim nunc. Nam maximus consequat egestas. Sed et sapien mi.</p>
                </div>

                {/* Social Media Icons */}
                <div className="flex flex-row pt-3 gap-2">
                    <div className={`duration-200 dark:bg-darkmode-btnbg dark:hover:bg-darkmode-btnbg-hover bg-lightmode-btnbg hover:bg-lightmode-btnbg-hover ${styles.iconButton}`}>
                        <FaLinkedin size={23} />
                    </div>

                    <div className={`duration-200 dark:bg-darkmode-btnbg dark:hover:bg-darkmode-btnbg-hover bg-lightmode-btnbg hover:bg-lightmode-btnbg-hover ${styles.iconButton}`}>
                        <FaGithub size={23} />
                    </div>

                    <div className={`duration-200 dark:bg-darkmode-btnbg dark:hover:bg-darkmode-btnbg-hover bg-lightmode-btnbg hover:bg-lightmode-btnbg-hover ${styles.iconButton}`}>
                        <MdEmail size={23} />
                    </div>
                </div>
            </div>
        </>
    )
}