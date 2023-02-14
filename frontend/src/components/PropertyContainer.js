import PropertyCard from './PropertyCard'

function PropertyContainer({ properties })
{
    const mappedProperties = properties.map(function (property)
    {
        return <PropertyCard key={property.id} property={property} />
    })
    return (
        <div>
            {mappedProperties}
        </div>
    )
}

export default PropertyContainer