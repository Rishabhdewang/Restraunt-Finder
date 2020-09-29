import React, { useState } from 'react'

const AddReview = () => {

    const [name, setName] = useState("");
    const [rating, setRating] = useState("");
    const [reviewText, setReviewText] = useState("");
    return (
        <div className="mb-2">
            <form action="">
                <div className="form-row">
                    <div className="form-group col-8">
                        <label htmlFor="name">Name</label>
                        <input value={name} onChange={(e)=> setName(e.target.value)} id="name" placeholder="name" type="text" className="form-control"></input>
                    </div>
                    <div className="form-group col-4">
                        <label htmlFor="ratings">Rating</label>
                        <select id="ratings" className="custom-select">
                            <option disabled></option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                        </select>
                    </div>
                </div>
                <div className="form-group">
                    <label htmlFor="Review">Review</label>
                    <textarea id="Review" className="form-control"></textarea>
                </div>
                <button className="btn btn-primary">Submit</button>
            </form>


        </div>
    )
}

export default AddReview
