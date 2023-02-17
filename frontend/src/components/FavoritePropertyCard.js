import React, { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom'

function FavoritePropertyCard({ favorite, currentProperty, setCurrentProperty, userId, setFavorites, setCurrentFavorite, setCurrentUser })
{
    const [favoriteList, setFavoriteList] = useState([])
    // console.log(favorite)

    const { id, property } = favorite

    useEffect(function ()
    {
        fetch("http://localhost:9292/favorites")
            .then(function (resp)
            {
                return resp.json()
            })
            .then(function (data)
            {
                // console.log(data)
                return setFavoriteList(data)
            })
    }, [])

    function handleRemoveClick(e)
    {
        fetch(`http://localhost:9292/favorites/${id}`, {
            method: 'DELETE',
            headers: {
                "Content-Type": "application/json"
            },
        })
            .then(function (resp)
            {
                return resp.json()
            })
            .then( (data) => {
                fetch(`http://localhost:9292/users/${userId}`)
                    .then(function (resp)
                    {
                        return resp.json()
                    })
                    .then(function (data)
                    {
                        return setCurrentUser(data)
                    });
            })
    }

    return (

        <div className="individual-property-box"
            to={`/properties/${property.title}`}
        >       
            <h3 className="name-title">{property.title}</h3>
            <p className="address">Street Address: {property.street_address}</p>
            <p className="address">City: {property.city}</p>
            <p className="address">State: {property.state}</p>
            <p className="price">Price per night: {property.price_per_night}</p>
            <div className='my-btns'>
                <button className="remove-button" onClick={handleRemoveClick}>❌</button>
                <p className="book-button"> {(property.available === false) ? "Unavailable" : "Available"}</p>
            </div>
        </div>
    )
}

export default FavoritePropertyCard