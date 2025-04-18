import React from 'react'

import Social from './Social'
import Data from './Data'
import Scroll from './Scroll'

// css
import "./home.css"

function Home() {
    return (
        <>
            <section className="home section" id="home">
                <div className="home__container container grid">
                    <div className="home__content grid">
                        <Social />
                        <div className="home__img" data-aos="fade-left" data-aos-duration="2000"></div>
                        <Data />
                    </div>
                    <Scroll />
                </div>
            </section>
        </>
    )
}

export default Home