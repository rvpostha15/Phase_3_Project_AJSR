import React from 'react';
import { Link, NavLink } from 'react-router-dom'

function PropertyCard({ property, currentProperty, setCurrentProperty, userId, setFavorites })
{
    const { street_address, city, state, price_per_night, title, id } = property



    const handlePropertyClick = (e) =>
    {
        setCurrentProperty({ ...property, [e.target.name]: e.target.value })
    }

    function handleLikeClick(e)
    {
        e.preventDefault()
        let formData = {
            property_id: property.id,
            user_id: userId
        }

        fetch("http://localhost:9292/favorites", {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(formData)
        })
            .then(function (resp)
            {
                return resp.json()
            })
            .then(function (newLike)
            {
                console.log(newLike)
                fetch(`http://localhost:9292/users/${userId}/favorite_properties`)
                    .then((r) => r.json())
                    .then((data) => setFavorites(data));
            })
    }

    return (
        <Link
            to={`/properties/${id}`}
            onClick={handlePropertyClick}
            className="property_card"
        >
            <h3>{title}</h3>
            <p>Street Address: {street_address}</p>
            <p>City: {city}</p>
            <p>State: {state}</p>
            <p>Price per night: {price_per_night}</p>
            <button onClick={handleLikeClick}>❤️</button>

        </Link>
    )
}

export default PropertyCard