import React from 'react'

// react icon
import { HiOutlineArrowSmRight } from "react-icons/hi";

function ProjectItems({ item }) {
    return (
        <>
            <div className="project__card" key={item.id}>
                <img className="project__img" src={item.image} alt="" />
                <h3 className="project__title">{item.title}</h3>
                <a href={item.link} target='_blank' className="project__button">
                    Live Preview <HiOutlineArrowSmRight className="project__button-icon" />
                </a>
            </div>
        </>
    )
}

export default ProjectItems