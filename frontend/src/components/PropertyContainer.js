import PropertyCard from './PropertyCard'

function PropertyContainer({ properties, currentProperty, setCurrentProperty })
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
            {mappedProperties}
        </div>
    )
}

export default PropertyContainer