import FavoritePropertyCard from "./FavoritePropertyCard"

function FavoritePage({ favorites, userId, setCurrentFavorite, setCurrentProperty, setCurrentUser })
{
    console.log(favorites)

    const mappedProperties = favorites.favorites.map(function (favorite)
    {
        return <FavoritePropertyCard
            key={favorite.id}
            favorite={favorite}
            setCurrentFavorite={setCurrentFavorite}
            userId={userId}
            setCurrentProperty={setCurrentProperty}
            setCurrentUser={setCurrentUser}
        />
    })
    return (
        <div className="property-box-container">
            {mappedProperties}
        </div>
    )
}

export default FavoritePage