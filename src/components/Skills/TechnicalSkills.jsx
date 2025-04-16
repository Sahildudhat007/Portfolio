import React from 'react'

// react icon
import { HiCheckBadge } from "react-icons/hi2";

// image import
import html from "../../assets/html.png"
import css from "../../assets/css.png"
import sass from "../../assets/sass.png"
import bootstrap from "../../assets/bootstrap.png"
import tailwindcss from "../../assets/tailwindcss.png"
import javascript from "../../assets/javascript.png"
import reactjs from "../../assets/reactjs.png"

function TechnicalSkills() {
    return (
        <>
            <div className="skills__content">
                <h3 className="skills__title">Technical Skills</h3>
                <div className="skills__box">
                    <div className="skills__group">
                        <div className="skills__data" data-aos="zoom-in-up" data-aos-duration="2000">
                            <div className='skill_img'>
                                <img src={html} alt="" />
                            </div>
                            <div>
                                <h3 className="skills__name">HTML</h3>
                            </div>
                        </div>
                        <div className="skills__data" data-aos="zoom-in-up" data-aos-duration="2000">
                            <div className='skill_img'>
                                <img src={css} alt="" />
                            </div>
                            <div>
                                <h3 className="skills__name">CSS</h3>
                            </div>
                        </div>
                        <div className="skills__data" data-aos="zoom-in-up" data-aos-duration="2000">
                            <div className='skill_img'>
                                <img src={sass} alt="" />
                            </div>
                            <div>
                                <h3 className="skills__name">SASS</h3>
                            </div>
                        </div>
                        <div className="skills__data" data-aos="zoom-in-up" data-aos-duration="2000">
                            <div className='skill_img'>
                                <img src={bootstrap} alt="" />
                            </div>
                            <div>
                                <h3 className="skills__name">BOOTSTRAP</h3>
                            </div>
                        </div>
                        <div className="skills__data" data-aos="zoom-in-up" data-aos-duration="2000">
                            <div className='skill_img'>
                                <img src={tailwindcss} alt="" />
                            </div>
                            <div>
                                <h3 className="skills__name">TALWIND CSS</h3>
                            </div>
                        </div>
                        <div className="skills__data" data-aos="zoom-in-up" data-aos-duration="2000">
                            <div className='skill_img'>
                                <img src={javascript} alt="" />
                            </div>
                            <div>
                                <h3 className="skills__name">JAVASCRIPT</h3>
                            </div>
                        </div>
                        <div className="skills__data" data-aos="zoom-in-up" data-aos-duration="2000">
                            <div className='skill_img'>
                                <img src={reactjs} alt="" />
                            </div>
                            <div>
                                <h3 className="skills__name">React-Js</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default TechnicalSkills