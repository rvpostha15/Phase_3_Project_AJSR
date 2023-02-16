import React from 'react';
import { Link, NavLink } from 'react-router-dom'

function PropertyCard({ property, currentProperty, setCurrentProperty })
{
    const { street_address, city, state, price_per_night, title, id, available } = property
    


    const handlePropertyClick = (e) =>
    {
        setCurrentProperty({ ...property, [e.target.name]: e.target.value })
    }

    const handleLike = () => {
        console.log("like")
    }
    return (

        <Link className="individual-property-box"
        to ={`/properties/${title}`} 
        onClick={handlePropertyClick} 
        >
            <h3 className="name-title">{title}</h3>
            <p className="address">Street Address: {street_address}</p>
            <p className="address">City: {city}</p>
            <p className="address">State: {state}</p>
            <p className="price">Price per night: {price_per_night}</p>
            <div className='my-btns'>
                <button className="like-button" onClick={handleLike}> ❤️</button>
                <p className = "book-button"> {(available === false)? "Unavailable" : "Available" }</p>
            </div>
    </Link>
    
    )
}

export default PropertyCard