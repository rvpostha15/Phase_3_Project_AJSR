import Property from './Property.js'

function PropertyList({ properties }) {

    // Create an Array of Cards for FlashCard Component
    const property = properties.map(property =>(
        console.log(property)
        
        // <Property 
        //     key={card.id}
        //     card={card}
        //     onDeleteCard={onDeleteCard}
        //     toggleFavorite={toggleFavorite}
        // />
  
        
    ))

    return (
        <div>
            {property}
        </div>
    );
  }


export default PropertyList;