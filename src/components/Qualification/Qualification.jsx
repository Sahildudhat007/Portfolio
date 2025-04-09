import React, { useState } from 'react'

// react icon
import { HiOutlineAcademicCap, HiOutlineBriefcase, HiOutlineCalendar } from "react-icons/hi";

// css
import "./qualification.css"

function Qualification() {

    const [toggleState, setToggleState] = useState(1)

    const toggleTab = (index) => {
        setToggleState(index);
    };

    return (
        <>
            <section className="qualification section">
                <h2 className="section__title">Qualification</h2>
                <span className="section__subtitle">My Journey</span>

                <div className="qualification__container container">
                    <div className="qualification__tabs">
                        <div className={toggleState === 1 ? "qualification__button button--flex qualification__active"
                            : "qualification__button button--flex"} onClick={() => toggleTab(1)}>
                            <HiOutlineAcademicCap className="qualification__icon" />
                            Education
                        </div>
                        <div className={toggleState === 2 ? "qualification__button button--flex qualification__active"
                            : "qualification__button button--flex"} onClick={() => toggleTab(2)}>
                            <HiOutlineBriefcase className="qualification__icon" />
                            Experience
                        </div>
                    </div>

                    <div className="qualification__sections">
                        <div className={toggleState === 1 ? "qualification__content qualification__content-active"
                            : "qualification__content"}>
                            <div className="qualification__data">
                                <div>
                                    <h3 className="qualification__title">Secondary School</h3>
                                    <span className="qualification__subtitle">Shree Nachiketa Vidhyalaya</span>
                                    <div className="qualification__calendar">
                                        <HiOutlineCalendar className="qualification__calendar-icon" />
                                        2017 - 2018
                                    </div>
                                </div>
                                <div>
                                    <span className="qualification__rounder"></span>
                                    <span className="qualification__line"></span>
                                </div>
                            </div>
                            <div className="qualification__data">
                                <div></div>
                                <div>
                                    <span className="qualification__rounder"></span>
                                    <span className="qualification__line"></span>
                                </div>
                                <div>
                                    <h3 className="qualification__title">Bachelor Of Commerce</h3>
                                    <span className="qualification__subtitle">J.D.Gabani Commerce College</span>
                                    <div className="qualification__calendar">
                                        <HiOutlineCalendar className="qualification__calendar-icon" />
                                        Passing Year : 2023
                                    </div>
                                </div>
                            </div>
                            <div className="qualification__data">
                                <div>
                                    <h3 className="qualification__title">High Secondary School</h3>
                                    <span className="qualification__subtitle">Tapovan Vidhyalaya</span>
                                    <div className="qualification__calendar">
                                        <HiOutlineCalendar className="qualification__calendar-icon" />
                                        2019 - 2020
                                    </div>
                                </div>
                                <div>
                                    <span className="qualification__rounder"></span>
                                    <span className="qualification__line"></span>
                                </div>
                            </div>
                        </div>
                        <div className={toggleState === 2 ? "qualification__content qualification__content-active"
                            : "qualification__content"}>
                            <div className="qualification__data">
                                <div>
                                    <h3 className="qualification__title">No Experience</h3>
                                    <span className="qualification__subtitle">Fresher</span>
                                </div>
                                <div>
                                    <span className="qualification__rounder"></span>
                                    <span className="qualification__line"></span>
                                </div>
                            </div>
                            <div className="qualification__data">
                                <div></div>
                                <div>
                                    <span className="qualification__rounder"></span>
                                    <span className="qualification__line"></span>
                                </div>
                                <div>
                                    <h3 className="qualification__title">Fresher</h3>
                                </div>
                            </div>
                            <div className="qualification__data"></div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Qualification