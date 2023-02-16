import React from 'react';
import { Link, NavLink } from 'react-router-dom'

function CurrentProperty({ currentProperty, currentUser, setCurrentProperty })
{

    const { available, id } = currentProperty
    console.log("current", currentProperty)



    const handleBook = () => {
            // Initiates PATCH Request to Update available and user_id for currentUser
            alert(`CoNgRaTuLaTiOnS ${currentUser.first_name}! Your stay has been booked!`)
            fetch(`http://localhost:9292/properties/${id}`, {
                method: "PATCH",
                headers: { "Content-Type": "application/json"},
                body: JSON.stringify({
                    available: false,
                    user_id:  `${currentUser.id}`,
                }),
            })
            .then(r=> r.json())
            // This 2nd Fetch => Requests the Updated currentUser from the Server, so that DOM === Server
            .then(() =>{
                fetch(`http://localhost:9292/properties/${id}`)
                .then(r=>r.json())
                .then(data => (console.log('fetch', data), 
                setCurrentProperty(data)))
    })
    }

    // Return A div for Each Review
    const mappedReviews = currentProperty.reviews.map(function (review)
    {
        return (
            <div>
                <p>{`User: ${review.user.username}`}</p>
                <p>{`Review: ${review.text}`}</p>
            </div>
    )})
    
    return (
        <div className="">
            <h3 className="property_title">{currentProperty.title}</h3>
            <p>Street Address: {currentProperty.street_address}</p>
            <p>City: {currentProperty.city}</p>
            <p>State: {currentProperty.state}</p>
            <p>Price per night: {currentProperty.price_per_night}</p>
            <div>
                {/* Replaces Button Element */}
                {(available === false)? (<h3>Seat's taken</h3>) : 
                <button 
                    className="btn"
                    onClick={ handleBook }
                >Book</button>}
                <button className="btn2">❤️</button>
            </div>
            <h2>Reviews:</h2>
            <NavLink to='/properties/new_review'>Leave a Review</NavLink>
            {mappedReviews}
        </div>
    )
}
// '/properties/:id/review'

export default CurrentProperty