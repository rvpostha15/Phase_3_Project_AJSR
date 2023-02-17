
import React from 'react';
import { Link, NavLink } from 'react-router-dom'

function CurrentProperty({ currentProperty, currentUser, setCurrentProperty, setFavorites, userId }) {

    const { available, id } = currentProperty

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
            .then(() =>
            {
                fetch(`http://localhost:9292/properties/${id}`)

                    .then(r => r.json())
                    .then(data => (console.log('fetch', data),
                        setCurrentProperty(data)))
            })

    }

    // Return A div for Each Review
    const mappedReviews = currentProperty.reviews.map(function (review)
    {
        return (
            <div className="posted-reviews-container">
                <p className="user-name-for-review">{`User: ${review.user.username}`}</p>
                <p className="review-written">{`Review: ${review.text}`}</p>
            </div>
        )
    })

    function handleLikeClick(e)
    {
        e.preventDefault()
        let formData = {
            property_id: currentProperty.id,
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
        <div className="current-card-container">
            <h3 className="current-title-name">{currentProperty.title}</h3>
            <p className="current-title-address">Street Address:{currentProperty.street_address}</p>
            <p className="current-title-address">City: {currentProperty.city}</p>
            <p className="current-title-address">State: {currentProperty.state}</p>
            <p className="current-title-price">Price per night: {currentProperty.price_per_night}</p>
            <div>
                {/* Replaces Button Element */}
                {(available === false) ? (<h3>Seat's taken</h3>) :
                    <button
                        className="btn"
                        onClick={handleBook}
                    >Book</button>}
                <button onClick={handleLikeClick} className="btn2"> ❤️</button>
            </div>
            <div className="review-section">
            <h2 className="review-header">Reviews:</h2>
            <NavLink className= "leave-review" to='/properties/new_review'>Leave a Review</NavLink>
            {mappedReviews}
            </div>
        </div>
    )
}
// '/properties/:id/review'

export default CurrentProperty