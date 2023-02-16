import React, { useState } from "react";

function NewReview({ currentProperty, currentUser, setCurrentProperty }) {

    const initialFormData = {text: '', user_id: currentUser.id, property_id: currentProperty.id} 
    const [formData, setFormData]=useState(initialFormData)
    const {street_address, id } = currentProperty

    const handleChange = (e) => {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    }

    // Add New Review to the Server + Reset formData After Successful Submission
    const handleSubmit = (e) => {
      e.preventDefault()
      fetch('http://localhost:9292/reviews', {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })
      .then(response => response.json())
      .then(() => {
        alert("Thanks for leaving a review!")
        setFormData(initialFormData)

        // Fetch the Updated Properties from Server so that newReview Immediately Displays in DOM
        fetch(`http://localhost:9292/properties/${id}`)
        .then(r => r.json())
        .then(data => (setCurrentProperty(data)))
      })
      .catch(error => (alert(error)))
    }
        
    return (
      <div className="form-style-6">
      <h1>{`Leave a Review for ${street_address}`}</h1> 
        <form onSubmit={handleSubmit}>
          <input 
            type='text' 
            name="text" 
            placeholder="Leave Your Review" 
            value={formData.text} 
            onChange={handleChange}
          />
          <input type='submit' value="Create"/>
        </form>
      </div>
    )
  }
  
  
  export default NewReview