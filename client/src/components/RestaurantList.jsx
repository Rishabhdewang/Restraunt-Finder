import React, { useEffect, useContext } from 'react'
import finder from '../api/finder'
import { RestaurantsContext } from '../contextApi/RestaurantsContext';
import {useHistory} from 'react-router-dom';

const RestaurantList = (props) => {

    const { restaurants, setRestaurants } = useContext(RestaurantsContext);
    let history = useHistory();

    useEffect(() => {

        const fecthData = async () => {
            try {
                const response = await finder.get('/allRestaurants');
                setRestaurants( response.data.Restaurants);
                // console.log(setRestaurants(),response.data.Restaurants);

            } catch (err) { }
        }
        fecthData();
    }, []);
     
    const handleDelete = async(id) =>{
        try {
            const response = await finder.delete(`/deleteRestaurant/${id}`);
            setRestaurants(restaurants.filter(restaurant => {
                return restaurant.id !== id 
            }))
        }catch(err){
            console.log(err)
        }
    }

    const handleUpdate = async (id) =>{
        try{
            history.push(`/Restaurant/${id}/updateRestaurant`)
        }catch(err) {}
    }

    return (
        <div className="list-group">
            <table className="table table-hover table-dark">
                <thead>
                    <tr className="bg-primary">
                        <th scope="col">Restaurant</th>
                        <th scope="col">Location</th>
                        <th scope="col">Price-Range</th>
                        {/* <th scope="col">Ratings</th> */}
                        <th scope="col">Update</th>
                        <th scope="col">Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {  restaurants && restaurants.map((restaurant) => {
                        return (
                            <tr key={restaurant.id}>
                                <td>{restaurant.Name}</td>
                                <td>{restaurant.Location}</td>
                                <td>{restaurant.PriceRange}</td>
                                <td><button onClick ={()=>handleUpdate(restaurant.id)} className="btn btn-warning">Update</button></td> 
                                <td><button onClick={() =>handleDelete(restaurant.id)} className="btn btn-danger">Delete</button></td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    )
}

export default RestaurantList
