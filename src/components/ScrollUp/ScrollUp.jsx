import React from 'react'

// react icon
import { HiOutlineArrowSmUp } from "react-icons/hi";

// css
import "./scrollup.css"

function Scrollup() {

    window.addEventListener("scroll", function () {
        const scrollUp = document.querySelector(".scrollup");
        if (this.scrollY >= 560) scrollUp.classList.add("show-scroll");
        else scrollUp.classList.remove("show-scroll");
    });

    return (
        <>
            <a href="..." className="scrollup"><HiOutlineArrowSmUp className="scrollup__icon" /></a>
        </>
    )
}

export default Scrollup