import React, { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom'

function FavoritePropertyCard({ favorite, currentProperty, setCurrentProperty, userId, setFavorites, setCurrentFavorite })
{
    const [favoriteList, setFavoriteList] = useState([])
    console.log(favorite)

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


    const handlePropertyClick = (e) =>
    {
        setCurrentProperty({ ...property, [e.target.name]: e.target.value })
    }


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
            .then(function ()
            {
                fetch(`http://localhost:9292/users/${userId}/favorite_properties`)
                    .then(function (resp)
                    {
                        return resp.json()
                    })
                    .then(function (data)
                    {
                        return setFavorites(data)
                    });
            })
    }

    return (

        // <Link
        //     to={`/properties/${property.title}`}
        //     onClick={handlePropertyClick}
        // >
        <div className="individual-property-box">
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
        // </Link>


    )
}

export default FavoritePropertyCard