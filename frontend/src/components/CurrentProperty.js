function CurrentProperty({ currentProperty, currentUser, setCurrentProperty })
{

    const { title, available, user_id, id } = currentProperty
    console.log("current", currentProperty)



    const handleBook = () => {
        
            alert(`Congratulations ${currentUser.first_name}! You're stay has been bookd!`)
            fetch(`http://localhost:9292/properties/${id}`, {
                method: "PATCH",
                headers: { "Content-Type": "application/json"},
                body: JSON.stringify({
                    available: false,
                    user_id:  `${currentUser.id}`,
                }),
            })
            .then(r=> r.json())
            .then(() =>{
                fetch(`http://localhost:9292/properties/${id}`)
                .then(r=>r.json())
                .then(data => (console.log('fetch', data), 
                setCurrentProperty(data)))
    })
    }

    const mappedReviews = currentProperty.reviews.map(function (review)
    {
        return <div>
            <p>{`User: ${review.user.username}`}</p>
            <p>{`Review: ${review.text}`}</p>
        </div>
    })
    
    return (
        <div className="">
            <h3 className="property_title">{currentProperty.title}</h3>
            <p>Street Address: {currentProperty.street_address}</p>
            <p>City: {currentProperty.city}</p>
            <p>State: {currentProperty.state}</p>
            <p>Price per night: {currentProperty.price_per_night}</p>
            <div>
                {(available === false)? (<h3>Seat's taken</h3>) : 
                <button 
                    className="btn"
                    
                    onClick={ handleBook }
                >Book</button>}
                <button className="btn2">❤️</button>
            </div>
            <h2>Reviews:</h2>
            {mappedReviews}
        </div>
    )
}

export default CurrentProperty