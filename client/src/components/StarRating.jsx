import React from 'react';
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// function getStars(rating) {
//      const stars = [];
//     const [whole, part] = parseFloat(rating).toString().split(".");

//     for(let i=0;i <whole; i++)   stars.push(<i key={i} className="fas fa-star"></i>)

// }

const StarRating = ({ rating }) => {

    const stars = [];

    for (let i = 0; i <= 5; i++) {
        if (i <= rating) {
            // stars.push(<span><i key={i} className="fas fa-star"></i></span>)
            console.log("a ", i)

        } else {
            stars.push(<i key={i} className="far fa-star"></i>)
            console.log("b",i)
        }
    }

    return (
        <>
            {/* {getStars(rating).map((rating) =>{
                <img src=""
            })} */}
            <div>{
             stars.push(<i className="far fa-star">rating</i>)}</div>
            {/* {stars} */}
        </>
    )
}

export default StarRating
