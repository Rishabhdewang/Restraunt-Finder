import React ,{useEffect} from 'react'
import finder from '../api/finder'

const RestaurantList = () => {

    useEffect( async ()=>{
        try {
            const response = await finder.get('/');
            console.log(response)
        }catch(err){}
    },[])


    return (
        <div className = "list-group">
            <table className="table table-hover table-dark">
                <thead>
                    <tr className = "bg-primary">
                        <th scope="col">Restaurant</th>
                        <th scope="col">Location</th>
                        <th scope="col">Price-Range</th>
                        <th scope="col">Ratings</th>
                        <th scope="col">Update</th>
                        <th scope="col">Delete</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Guru</td>
                        <td>dewas</td>
                        <td>100</td>
                        <td>2</td>
                        <td><button className="btn btn-warning">Update</button></td>
                        <td><button className="btn btn-danger">Delete</button></td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default RestaurantList
