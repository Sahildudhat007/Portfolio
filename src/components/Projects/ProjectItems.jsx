import React, { useRef } from 'react'

// react icon
import { HiOutlineArrowSmRight } from "react-icons/hi";

function ProjectItems({ item }) {

    const cardRef = useRef(null);

    const handleMouseMove = (e) => {
        const card = cardRef.current;
        const rect = card.getBoundingClientRect();

        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const rotateX = ((y - centerY) / centerY) * -20;
        const rotateY = ((x - centerX) / centerX) * 20;

        card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    };

    const handleMouseLeave = () => {
        const card = cardRef.current;
        card.style.transform = "rotateX(0deg) rotateY(0deg)";
    };

    return (
        <>
            <div
                key={item.id}
                ref={cardRef}
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
                className="project__card"
                style={{
                    transformStyle: "preserve-3d",
                    transition: "transform 0.2s ease",
                }}>
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