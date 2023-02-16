import PropertyCard from "./PropertyCard"

function favorite_page({ favorites, userID })
{
    const mappedProperties = favorites.map(function (favorite)
    {
        return <PropertyCard property={favorite} />
    })
    return (
        <div>
            {mappedProperties}
        </div>
    )
}

export default favorite_page