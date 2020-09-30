import React from 'react';
import { faHome, faStar, faStarHalfAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const StarRating = ({ rating }) => {

    const stars = [];

    for (let i = 0; i <= 4; i++) {
        if (i <= rating) {
            stars.push(<span><FontAwesomeIcon icon={faStar} /></span>)
            // console.log("a ", i)

        } else {
            stars.push(<FontAwesomeIcon icon={faStarHalfAlt} />)
            // console.log("b",i)
        }
    }

    return (
        <>
        {stars}
        
        </>
    )
}

export default StarRating
