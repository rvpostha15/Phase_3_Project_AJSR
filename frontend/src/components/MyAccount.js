
function MyAccount ({ currentUser }) {

console.log(currentUser)

const { email, first_name, last_name, phone_number, password, username, id } = currentUser

    return (
        <div className="personal-account">
        <p>Email Address: {email}</p>
        <p>First Name: {first_name}</p>
        <p>Last Name: {last_name}</p>
        <p>Phone: {phone_number}</p>
        <p>Password: {password}</p>
        <p>Username: {username}</p>
        <p>Account Number: {id}</p>
        </div>
    )
}

export default MyAccount