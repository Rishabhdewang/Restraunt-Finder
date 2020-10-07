import React, { useContext, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { RestaurantsContext } from '../contextApi/RestaurantsContext';
import finder from '../api/finder';
// import StarRating from '../components/StarRating';
import Reviews from '../components/reviews';
import AddReview from '../components/AddReview';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowAltCircleLeft } from '@fortawesome/free-solid-svg-icons';


const RestaurantdetailPage = (props) => {

    const { id } = useParams();
    const { selectedRestaurant, setSelectedRestaurant } = useContext(RestaurantsContext);
    

    useEffect(() => {
        const fetchData = async () => {
            const response = await finder.get(`/Restaurant/${id}`);
            setSelectedRestaurant(response.data);
            console.log(response)
        }
        fetchData();
    }, []);

    return (
        <>
        
        <div className= 'container'>
        <div>
            <h1 className= "text-center">Restaurant Details</h1>
            <h1 
                className="text-center">
                {/* {selectedRestaurant && selectedRestaurant.Restrua} */}
            </h1>
            {
                <>
                {<a href="/Restaurants" title='back to homepage'><FontAwesomeIcon  icon={faArrowAltCircleLeft} size="3x" /></a>} 
                    <div className="mt-3">
                    {/* <StarRating rating={} /> */}
                        <div>
                            <Reviews  reviews = {selectedRestaurant.Newreview}/>
                        </div>
                        <div><AddReview/></div> 
                        
                    
                    </div>
                </>
            }
        </div>
        </div>
        </>
    )
}

export default RestaurantdetailPage