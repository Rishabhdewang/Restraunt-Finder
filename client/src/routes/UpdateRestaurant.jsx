import React, { useState, useContext, useEffect } from 'react'
import { useParams, useHistory } from 'react-router-dom';
import { RestaurantsContext } from '../contextApi/RestaurantsContext';
import finder from '../api/finder'; 

const UpdateRestaurant = (props) => {

    const { id } = useParams()

    // console.log(id, id.id);
    const { restaurants } = useContext(RestaurantsContext);
    const history = useHistory();

    const [name, setName] = useState("");
    const [location, setLocation] = useState("");
    const [priceRange, setPriceRange] = useState("Price Range");

    useEffect(() => { // used to show the the data to be updated in the input field

    const fetchData = async () => {

        const response = await finder.get(`/Restaurant/${id}`);
        console.log(response.data.found);

        setName(response.data.found.Name)
        setLocation(response.data.found.Location)
        setPriceRange(response.data.found.PriceRange)

        };
        fetchData();
    }, []) // here we pass an empty array because we dont have dependency

    const handleSubmit = async(e) =>{

        e.preventDefault();
        const updatedRestaurant = await finder.put(`/updateRestaurant/${id}` , {Name :name , Location : location ,PriceRange :priceRange })
        history.push('/');
        console.log(updatedRestaurant);
    }

    return <div>
        <form action="">
            <div className="form-group">
                <label htmlFor="name">Name</label>
                <input value={name} onChange={(e) => setName(e.target.value)} id="name" className="form-control" type="text" />
            </div>
            <div className="form-group">
                <label htmlFor="location">Location</label>
                <input value={location} onChange={(e) => setLocation(e.target.value)} id="location" className="form-control" type="text" />
            </div>
            <div className="form-group">
                <label htmlFor="pricerange">PriceRange</label>
                <input value={priceRange} onChange={(e) => setPriceRange(e.target.value)} id="pricerange" className="form-control" type="text" />
            </div>
            <button type="submit" onClick={handleSubmit} className="btn btn-primary">Submit</button>
        </form>
    </div>

}

export default UpdateRestaurant;