import React from 'react'
import "../styles/Contact.css"
import PizzaLeft from "../assets/pizzaLeft.jpg"

function Contact() {
    return (
        <div className="contact">
            <div className="leftSide" style={{ backgroundImage: `url(${PizzaLeft})`}}></div>
            <div className="rightSide">
                <h1>CONTACT US</h1>
                <form id="contact-form" method="POST">
                    <label htmlFor="name">Full Name</label>
                    <input name="name" placeholder="Your Full Name" type="text"/>
                    <label htmlFor="email">Email</label>
                    <input name="email" placeholder="Your Email Address" type="text"/>
                    <label htmlFor="message">Message</label>
                    <textarea rows="3" placeholder="Talk to Us" name="message" required> </textarea>  
                    <button type="submit">Send Message</button>                
                </form>
                </div>            
        </div>
    )
}

export default Contact
