import React from 'react'

function MenuItem({name, image, description, price}) {
    return (
        <div className="menuItem">
            <div style={{ backgroundImage: `url(${image})`}}></div>
            <h1>{name}</h1>
            <p>{description}</p> 
            <p>R{price}</p>           
        </div>
    )
}

export default MenuItem
