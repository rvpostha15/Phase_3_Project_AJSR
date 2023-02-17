import { Link } from 'react-router-dom'

function MyReview ({ review, setProperties, handleEditReview, currentUser }) {

    const { property, text, id } = review

    const onEditClick = () => {
        handleEditReview(review)
    }
    
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
            <h2 className="review-text">Your Review for: {property.street_address}</h2>
            <p className="review-text">{text}</p>
            <div className="rev-button-box">
                <Link to={`/${currentUser.username}/${id}/edit`}
                    className = "rev-button" 
                    onClick={onEditClick}
                >Edit
                </Link>
                <button 
                    className = "rev-button" 
                    onClick={handleDeleteReview}
                >Delete</button>
            </div>
        </div>
    )
}

export default MyReview