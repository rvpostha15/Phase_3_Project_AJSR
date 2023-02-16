import PropertyCard from "./PropertyCard"

function HomePage({ hotProperties, setCurrentProperty, currentProperty, searchTerm, changeSearch, userId, setFavorites })
{
    const mappedProps = hotProperties.map(function (hotProp)
    {
        return <PropertyCard
            key={hotProp.id}
            property={hotProp}
            setCurrentProperty={setCurrentProperty}
            currentProperty={currentProperty}
            userId={userId}
            setFavorites={setFavorites}
        />
    })
    return (
        <div className="homepage">
            <p id="featured">Trending Properties</p>
            <div className='property-box-container'>
                {mappedProps}
            </div>
        </div>
    )
}

export default HomePage