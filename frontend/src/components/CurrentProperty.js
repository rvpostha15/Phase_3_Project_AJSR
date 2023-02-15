function CurrentProperty({ currentProperty })
{
    
    return (
        <div className="property_card">
            <h3 className="property_title">{currentProperty.title}</h3>
            <p>Street Address: {currentProperty.street_address}</p>
            <p>City: {currentProperty.city}</p>
            <p>State: {currentProperty.state}</p>
            <p>Price per night: {currentProperty.price_per_night}</p>
            <button>❤️</button>
        </div>
    )
}

export default CurrentProperty