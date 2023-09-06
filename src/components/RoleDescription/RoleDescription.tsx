import styles from "./roledescription.module.css"

export default function RoleDescription({ content }) {
    return (
        <>
            <div className="pb-6">
                <img className={`${styles.featuredImg} mb-2`} src={content.darkImg} alt={content.name} />
                <h3 className="font-semibold text-xl">{content.name}</h3>
                <div className={`${styles.dateContainer} my-2`}>
                    {`${content.startDate} - ${content.endDate}`}
                </div>
                <p>{content.desc}</p>
            </div>
        </>
    )
}