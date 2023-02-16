import FavoritePropertyCard from "./FavoritePropertyCard"

function favorite_page({ favorites, userId, setCurrentFavorite, setCurrentProperty })
{
    console.log(favorites)
    const mappedProperties = favorites.map(function (favorite)
    {
        return <FavoritePropertyCard
            key={favorite.id}
            property={favorite}
            setCurrentFavorite={setCurrentFavorite}
            userId={userId}
            setCurrentProperty={setCurrentProperty}
        />
    })
    return (
        <div className="property-box-container">
            {mappedProperties}
        </div>
    )
}

export default favorite_page