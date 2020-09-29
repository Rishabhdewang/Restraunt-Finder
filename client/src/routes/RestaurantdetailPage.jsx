import React, { useContext, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { RestaurantsContext } from '../contextApi/RestaurantsContext';
import finder from '../api/finder';
import StarRating from '../components/StarRating';
import Reviews from '../components/reviews';
import AddReview from '../components/AddReview';

const RestaurantdetailPage = (props) => {

    const { id } = useParams();
    const {selectedRestaurant , setSelectedRestaurant} = useContext(RestaurantsContext);

    useEffect(() =>{
        const fetchData = async () =>{
            const response = await finder.get(`/Restaurant/${id}`);
            setSelectedRestaurant(response.data.found);
            console.log(response)
        }
        fetchData();    
    },[]);
    
    return (
        <div>
            {/* <h1 className= "text-center">Restaurant Details</h1> */}
    <h1 className= "text-center">{selectedRestaurant && selectedRestaurant.Name }</h1>
     {(
     <>
     <div className="mt-3">
     {/* <div><Reviews  reviews={selectedRestaurant}/></div>
     <div><AddReview/></div> */}
     <StarRating rating={2}/>
         </div>
         </>
     )}
        </div>
    )
}

export default RestaurantdetailPage