
function NewReview({ formData, setFormData, currentProperty, initialFormData }) {

    
  
    const handleChange = (e) => {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    }
  
    // Add New Review to the Server + Reset formData After Successful Submission
    const handleSubmit = (e) => {
      e.preventDefault()
    //   fetch(`http://localhost:3000/properties/${currentProperty.id}`, {
    //     method: "POST",
    //     headers: {
    //       "Content-Type": "application/json",
    //     },
    //     body: JSON.stringify(formData),
    //   })
    //   .then(response => response.json())
    //   .then(() => {
    //     setFormData(initialFormData)
  
    //     //fetch the updated card list from server and update the state of cardList
    //     // fetch("http://localhost:8001/card")
    //     // .then(response => response.json())
    //     // .then(data => setCardList(data))
    //   })
    //   .catch(error => (alert(error)))
    }
        
    return (
      <div className="form-style-6">
      <h1>{`Leave a Review for ${currentProperty.street_address}`}</h1> 
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