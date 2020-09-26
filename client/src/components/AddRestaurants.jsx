import React from 'react'
import { useState, useContext } from 'react';
import finder from '../api/finder';
import { RestaurantsContext } from '../contextApi/RestaurantsContext';

const AddRestaurants = () => {

    const {AddRestaurant} = useContext(RestaurantsContext) 

    const [ name, setName ] = useState("");
    const [ location, setLocation ] = useState("");
    const [ priceRange, setPriceRange ] = useState("Price Range");

    const handleSubmit = async(e) =>{

        e.preventDefault();
        try{
            const response = await finder.post('/createRestaurant', {
                Name : name,
                Location : location,
                PriceRange : priceRange
            });

            AddRestaurant(response.data.created)
            console.log(response.data.created)
            console.log(AddRestaurant);
        }catch(err) {console.log(err)}
        
    }

    return (
        <div className='mb-4'>
            <form action="">
                <div className="form-row">
                    <div className="col">
                        <input value={name} onChange={e => setName(e.target.value)} type='text' className="form-control" placeholder="name" />
                    </div>
                    <div className="col">
                        <input value={location} onChange={e => setLocation(e.target.value)} type='text' className="form-control" placeholder="location" />
                    </div>
                    <div className="col">
                        <select value={priceRange} onChange={e => setPriceRange(e.target.value)} className='custom-select my-1 mr-sm-2'>
                            <option disabled>Price Range</option>
                            <option value="1">100</option>
                            <option value="2">200</option>
                            <option value="3">300</option>
                            <option value="4">400</option>
                            <option value="5">500</option>
                        </select>
                    </div>
                    <button type='submit' onClick={handleSubmit} className="btn btn-primary">Add</button>
                </div>
            </form>

        </div >
    )
}
export default AddRestaurants
