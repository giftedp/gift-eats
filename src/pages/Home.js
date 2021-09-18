import React from 'react'
import "../styles/Home.css"
import { Link } from 'react-router-dom'
import BannerImage from '../assets/pizza.jpeg'


function Home() {
    return (
        <div className="home" style={{ backgroundImage: `url(${BannerImage})`}}>
            <div className="headerContainer">
                <h1>Gift's Pizzeria</h1>
                <p>Feed your cravings</p>
                <Link to="/Menu">
                <button>ORDER NOW</button>
                </Link>
            </div>
        </div>
    )
}

export default Home
