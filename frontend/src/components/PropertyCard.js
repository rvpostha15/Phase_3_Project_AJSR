import React from 'react';
import { Link, NavLink } from 'react-router-dom'

function PropertyCard({ property, currentProperty, setCurrentProperty })
{
    const { street_address, city, state, price_per_night, title, id } = property
    


    const handlePropertyClick = (e) =>
    {
        setCurrentProperty({ ...property, [e.target.name]: e.target.value })
    }

    return (
        // <Link
        //     to={`/properties/${id}`}
        //     onClick={handlePropertyClick}
        //     className="property_card"
        // >
        //     <h3>{title}</h3>
        //     <p>Street Address: {street_address}</p>
        //     <p>City: {city}</p>
        //     <p>State: {state}</p>
        //     <p>Price per night: {price_per_night}</p>
        //     <button>❤️</button>
            
        // </Link>
        <Link className="individual-property-box"
        to ={`/properties/${title}`} 
        onClick={handlePropertyClick} 
        >
    
        <h3 className="name-title">{title}</h3>
        <p className="address">Street Address: {street_address}</p>
        <p className="address">City: {city}</p>
        <p className="address">State: {state}</p>
        <p className="price">Price per night: {price_per_night}</p>
        <button className="like-button"> ❤️</button>
        {/* <button className = "book-button"> booked </button> */}
    </Link>
    )
}

export default PropertyCard