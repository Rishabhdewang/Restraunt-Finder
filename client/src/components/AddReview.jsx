import React, { useEffect, useState } from 'react'
import { useHistory, useParams } from 'react-router-dom';
import finder from '../api/finder';

const AddReview = () => {

    const { id } = useParams();
    const history = useHistory();

    const [name, setName] = useState("");
    const [rating, setRating] = useState("Rating");
    const [reviewText, setReviewText] = useState("");

    const handleSubmitReview = async (e) => {

        e.preventDefault();

        const response = await finder.post(`Restaurant/${id}/addreview`, {
            UserName: name,
            Ratings: rating,
            Review: reviewText
        })
        history.push('/');
        history.push(`/Restaurant/${id}`);
        console.log(response);
    }

    return (
        <div className="mb-2">
            <form action="">
                <div className="form-row">
                    <div className="form-group col-8">
                        <label htmlFor="name">Name</label>
                        <input
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            id="name"
                            placeholder="name"
                            type="text"
                            className="form-control">
                        </input>
                    </div>
                    <div className="form-group col-4">
                        <label htmlFor="ratings">Rating</label>
                        <select
                            value={rating}
                            onChange={(e) => setRating(e.target.value)}
                            id="ratings"
                            className="custom-select">
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
                    <textarea
                        value={reviewText}
                        onChange={(e) => setReviewText(e.target.value)}
                        id="Review"
                        className="form-control">
                    </textarea>
                </div>
                <button
                    onClick={handleSubmitReview}
                    type="submit"
                    className="btn btn-primary">Submit</button>
            </form>
        </div>
    )
}

export default AddReview
