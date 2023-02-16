import MyReview from "./MyReview"


function MyAccount ({ currentUser, setProperties}) {

console.log("me:", currentUser)

const { email, first_name, last_name, phone_number, password, username, id, reviews } = currentUser

const myReviews = reviews.map((review) =>
    <MyReview
        review={review}
        setProperties={setProperties}
    />
)

    return (
        <>
        <div className="personal-account">
        <p>Email Address: {email}</p>
        <p>First Name: {first_name}</p>
        <p>Last Name: {last_name}</p>
        <p>Phone: {phone_number}</p>
        <p>Password: {password}</p>
        <p>Username: {username}</p>
        <p>Account Number: {id}</p>
        </div>
        <h2 className="review">My Reviews:</h2>
        <div className="property-box-container">
        {myReviews}
        </div>
        </>
    )
}

export default MyAccount