import React from 'react';
import { Link, NavLink } from 'react-router-dom'

function PropertyCard({ property, currentProperty, setCurrentProperty, userId, setFavorites })
{

    const { street_address, city, state, price_per_night, title, id, available } = property
    



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
                <button className="like-button" onClick={handleLikeClick}> ❤️</button>
                <p className = "book-button"> {(available === false)? "Unavailable" : "Available" }</p>
            </div>
    </Link>
    

    )
}

export default PropertyCard