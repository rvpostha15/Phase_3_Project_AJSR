
function PropertyCard({ property })
{
    const { street_address, city, state, price_per_night, title } = property

    console.log(property)

    const handlePropertyClick = () => {
        alert(title)
    }

    return (
        <div onClick={handlePropertyClick} className="property_card">
            <h3 className="property_title">{title}</h3>
            <p>Street Address: {street_address}</p>
            <p>City: {city}</p>
            <p>State: {state}</p>
            <p>Price per night: {price_per_night}</p>
            <button>❤️</button>
        </div>
    )
}

export default PropertyCard