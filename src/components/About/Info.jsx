import React from 'react'

// react icon
import { HiOutlineDesktopComputer, HiOutlineTerminal, HiOutlineSparkles } from "react-icons/hi";

function Info() {
    return (
        <>
            <div className="about__info grid">
                <div className="about__box">
                    <HiOutlineDesktopComputer className="about__icon" />
                    <h3 className="about__title">Experience</h3>
                    <span className="about__subtitle">Fresher</span>
                </div>
                <div className="about__box">
                    <HiOutlineTerminal className="about__icon" />
                    <h3 className="about__title">Completed</h3>
                    <span className="about__subtitle">5 Projects</span>
                </div>
                <div className="about__box">
                    <HiOutlineSparkles className="about__icon" />
                    <h3 className="about__title">Support</h3>
                    <span className="about__subtitle">Online 24/7</span>
                </div>
            </div>
        </>
    )
}

export default Info