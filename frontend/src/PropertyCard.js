
function PropertyCard({ property })
{
    const { street_address, city, state, price_per_night, title } = property

    console.log(property)

    return (
        <div>
            <h3>{title}</h3>
            <p>Street Address: {street_address}</p>
            <p>City: {city}</p>
            <p>State: {state}</p>
            <p>Price per night: {price_per_night}</p>
        </div>
    )
}

export default PropertyCard