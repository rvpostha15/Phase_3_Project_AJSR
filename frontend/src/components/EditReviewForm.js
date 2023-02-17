import React, { useState } from "react";

function EditReviewForm ({editReview, setEditReview}) {

    const [formData, setFormData]=useState(editReview)

    const { id, text, property } = editReview

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        fetch(`http://localhost:9292/reviews/${id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })
      .then(response => response.json())
      .then((data) => {
        alert("Your changes have been saved successfully!")
        setEditReview(data)
      .catch(error => (alert(error)))
    })}
    
    
    return (
        <div>
            <h1>Edit This Review</h1>
            <form onSubmit={handleSubmit}>
                <input
                    type='text'
                    name='text'
                    placeholder='Leave a Review'
                    value={formData.text}
                    onChange={handleChange}
                />
                <input type='submit' value='Save Changes'/>
            </form>
        </div>
    )
}

export default EditReviewForm