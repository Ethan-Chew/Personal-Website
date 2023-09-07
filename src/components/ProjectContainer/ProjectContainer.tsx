'use client'
import { MdOutlineExpandMore, MdOutlineExpandLess } from 'react-icons/md'
import { useState } from 'react'

export default function ProjectContainer({ project, title }) {
    const [ boxExpanded, setBoxExpanded ] = useState(false)

    return (
        <>
            <div className="w-full border border-darkmode-text rounded-lg p-4 duration-200">
                <div className="flex flex-row">
                    <div>
                        <h2 className="text-3xl font-semibold mb-1">{ title }</h2>
                        { !boxExpanded ? <p className='font-light'>Press the button to view projects</p> : <></> }
                    </div>
                    <button className="ml-auto space-x-3" onClick={() => setBoxExpanded(!boxExpanded)}>
                        { boxExpanded ? <MdOutlineExpandLess size={30} /> : <MdOutlineExpandMore size={30} /> }
                    </button>
                </div>
                { !boxExpanded ? <></> :
                    project.map((proj) => (
                        <IndivProjContainer proj={proj} key={proj.name} />
                    ))
                }
            </div>
        </>
    )
}

const IndivProjContainer = ({ proj }) => {
    return (
        <div>
            { proj.name }
        </div>
    )
}