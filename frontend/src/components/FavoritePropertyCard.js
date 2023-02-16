import React, { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom'

function FavoritePropertyCard({ property, currentProperty, setCurrentProperty, userId, setFavorites, setCurrentFavorite })
{
    // console.log(property)
    const { favorites } = property
    console.log(favorites)
    const mappedFavs = favorites.map(function (fav)
    {
        return fav.id
    })
    console.log(mappedFavs)
    const [favoriteList, setFavoriteList] = useState([])
    // console.log(property)

    const { street_address, city, state, price_per_night, title, id, available } = property

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

    const mappedFavorites = favoriteList.map(function (fav)
    {
        return fav.property_id
    })

    // console.log(mappedFavorites)

    const handlePropertyClick = (e) =>
    {
        setCurrentProperty({ ...property, [e.target.name]: e.target.value })
    }


    function handleRemoveClick(e)
    {
        // fetch(`http://localhost:9292/favorites${property.id}`, {
        //     method: 'DELETE',
        //     headers: {
        //         "Content-Type": "application/json"
        //     },
        // })
        //     .then(function (resp)
        //     {
        //         return resp.json()
        //     })
        //     .then(function (removedLike)
        //     {
        //         console.log(removedLike)
        //         fetch(`http://localhost:9292/users/${userId}/favorite_properties`)
        //             .then((r) => r.json())
        //             .then((data) => setFavorites(data));
        //     })
        console.log(property)
    }

    return (

        <Link className="individual-property-box"
            to={`/properties/${title}`}
            onClick={handlePropertyClick}
        >
            <div>
                <h3 className="name-title">{title}</h3>
                <p className="address">Street Address: {street_address}</p>
                <p className="address">City: {city}</p>
                <p className="address">State: {state}</p>
                <p className="price">Price per night: {price_per_night}</p>
                <div className='my-btns'>
                    <button className="remove-button" onClick={handleRemoveClick}>❌</button>
                    <p className="book-button"> {(available === false) ? "Unavailable" : "Available"}</p>
                </div>
            </div>
        </Link>


    )
}

export default FavoritePropertyCard