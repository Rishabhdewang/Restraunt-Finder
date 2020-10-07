import React from 'react'
import StarRating from './StarRating';

const Reviews = ({ reviews }) => {

    return (
        console.log(reviews),

        <div className="row row-cols-3 mb-2 d-flex justify-content-around" >
            {reviews && reviews.map((review) => {
                return (
                    
                        <div key={review.id} className="card text-white bg-primary mb-3 mb-4" style={{ maxWidth: "30%" }}>
                            <div className="card-header d-flex justify-content-around">
                               <span>
                                   {review.UserName}
                                </span> 
                                <span>
                                    <StarRating rating={review.Ratings} />
                                </span>  
                            </div>
                            <div className="card-body">
                                <p className="card-text">{review.Review} </p>
                            </div>
                        </div>
            
                    )
            })}
        </div>


    )
}

export default Reviews
