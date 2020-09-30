import React, { useContext, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import finder from '../api/finder';
import { RestaurantsContext } from '../contextApi/RestaurantsContext';



const Reviews = ({ reviews }) => {

    return (
        console.log(reviews),

        <div className="row row-cols-3 mb-2 d-flex justify-content-around" >
            {reviews && reviews.map((review) => {
                return (
                    
                        <div className="card text-white bg-primary mb-3 mb-4" style={{ maxWidth: "30%" }}>
                            <div className="card-header d-flex justify-content-around">
                                {review.UserName}
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
