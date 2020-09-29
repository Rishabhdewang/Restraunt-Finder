import React from 'react';

// function getStars(rating) {
//      const stars = [];
//     const [whole, part] = parseFloat(rating).toString().split(".");
   
//     for(let i=0;i <whole; i++) 

// }

const StarRating = ({ rating }) => {

    const stars = [];
   
    for (let i = 1; i <= 5; i++) {
        if (i <= rating) {
            stars.push(<i key= {i} className ="fas fa-star"></i>)
            console.log(i)

        } else {
            stars.push(<i key= {i} className="far fa-star"></i>)
        }
    }

    return (
        <>
            {/* {getStars(rating).map((rating) =>{
                <img src=""
            })} */}
            {stars}
        </>
    )
}

export default StarRating
