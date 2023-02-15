import React from 'react';
import { Link, NavLink } from 'react-router-dom' 

function PropertyCard({ property, currentProperty, setCurrentProperty })
{
    const { street_address, city, state, price_per_night, title, id } = property

    const handlePropertyClick = () => {
        fetch(`http://localhost:9292/properties/${id}`)
        .then(resp => resp.json())
        .then(data => setCurrentProperty(data))
    }

    return (
        <Link
            to = "/properties/:id" 
            onClick={handlePropertyClick} 
            className="property_card"
        >
            <h3 className="property_title">{title}</h3>
            <p>Street Address: {street_address}</p>
            <p>City: {city}</p>
            <p>State: {state}</p>
            <p>Price per night: {price_per_night}</p>
            <button>❤️</button>
        </Link>
    )
}

export default PropertyCard