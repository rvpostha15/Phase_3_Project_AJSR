function CurrentProperty({ currentProperty })
{
    console.log(currentProperty.reviews)
    const mappedReviews = currentProperty.reviews.map(function (review)
    {
        return <div>
            <p>{`User: ${review.user.username}`}</p>
            <p>{`Review: ${review.text}`}</p>
        </div>
    })
    return (
        <div className="property_card">
            <h3 className="property_title">{currentProperty.title}</h3>
            <p>Street Address: {currentProperty.street_address}</p>
            <p>City: {currentProperty.city}</p>
            <p>State: {currentProperty.state}</p>
            <p>Price per night: {currentProperty.price_per_night}</p>
            <h2>Reviews:</h2>
            {mappedReviews}
            <button>❤️</button>
        </div>
    )
}

export default CurrentProperty