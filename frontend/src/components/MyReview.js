function MyReview ({ review, setProperties}) {

    const { property, text, id } = review


    const handleDeleteReview = () => {
        console.log(`Delete ${id}`)
        fetch(`http://localhost:9292/reviews/${id}`, {
            method: "DELETE",
        })
        .then(r => r.json())
        .then(() => {
            fetch(`http://localhost:9292/properties`)
            .then(r => r.json())
            .then(data => (console.log('fetch', data),
            setProperties(data)))
        })
        .catch(error => (alert(error)))
    }

    return (
        <div className="individual-property-box">
            <h2>Your Review for: {property.street_address}</h2>
            <p>{text}</p>
            <button className = "book-button" onClick={handleDeleteReview}>Delete</button>
        </div>
    )
}

export default MyReview