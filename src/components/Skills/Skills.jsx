import React from 'react'

import TechnicalSkills from './TechnicalSkills';
import Backend from './SoftSkills';

// css
import "./skills.css"

function Skills() {
    return (
        <>
            <section className="skills section" id="skills">
                <h2 className="section__title">Skills</h2>
                <span className="section__subtitle">Technical Lvl</span>
                <div className="skills__container">
                    <TechnicalSkills />
                    {/* <Backend /> */}
                </div>
            </section>
        </>
    )
}

export default Skills