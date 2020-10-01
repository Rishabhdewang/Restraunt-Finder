import React from 'react';
import { faStar as fasstar, faStarHalfAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar as farstar } from '@fortawesome/free-regular-svg-icons';

const StarRating = ({ rating }) => {

    const stars = [];
    let i;

    for (i = 1; i <= 5; i++) {
        if (i <= rating) {
            stars.push(<FontAwesomeIcon key={i} icon={fasstar} color={"#FAC11C"} />)
        }
        else if (i === Math.ceil(rating) && !Number.isInteger(rating)) {
            stars.push(<FontAwesomeIcon key={i} icon={faStarHalfAlt} color={"#FAC11C"} />)
        }
        else {
            stars.push(<FontAwesomeIcon key={i} icon={farstar} color={""}  />)
        }
    }

    return (
        <>
            {stars}
        </>
    )
}

export default StarRating
