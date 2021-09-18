import React from 'react'
import  '../styles/Footer.css'
import InstagramIcon from "@material-ui/icons/Instagram"
import GitHubIcon from "@material-ui/icons/GitHub"
import LinkedInIcon from "@material-ui/icons/LinkedIn"
import FacebookIcon from '@material-ui/icons/Facebook';

function Footer() {
    return (
        <div className="footer"> 
        <div className="socialMedia">             
            <GitHubIcon /> 
            <LinkedInIcon />
            <InstagramIcon />  
            <FacebookIcon /> 
        </div>
        <p> &copy; 2021 giftedpeats.online</p>
        </div>
    )
}

export default Footer
