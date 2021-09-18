import React from 'react'
import "../styles/About.css"
import Pizzeria from "../assets/pizzeria.jpg"

function About() {
    return (
        <div className="about">
            <div className="aboutTop"
             style={{ backgroundImage: `url(${Pizzeria})`}}> 
         </div>
            <div className="aboutBottom">
                <h1>About Gift's Pizzeria</h1>
                <h3>Gift the Pizzaiolo</h3>
                <p>We started making pizza in our family gatherings, everybody loved <br/>it and we started selling to family member, friends started buying,<br/> then neibours, the communities and the we decided to open the Pizzeria.</p>
                <p>We make pizza from old family recipes and it seems like everybody love it, so enjoy the best from our family and friends to yours. </p>
            </div>
            </div>
        
    )
}

export default About
