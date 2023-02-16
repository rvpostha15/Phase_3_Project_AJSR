import PropertyCard from './PropertyCard'
import Search from './Search'

function PropertyContainer({ properties, currentProperty, setCurrentProperty, searchTerm, changeSearch })
{
    const mappedProperties = properties.map(function (property)
    {
        return (
            <PropertyCard 
                key={property.id} 
                property={property}
                setCurrentProperty={setCurrentProperty}
                currentProperty={currentProperty}  
            />
        )

    })
    return (

        <div>
            <Search
                searchTerm={searchTerm}
                changeSearch={changeSearch}
            />
            <div className='property-box-container'>
                {mappedProperties}
            </div>
        </div>
    )
}

export default PropertyContainer