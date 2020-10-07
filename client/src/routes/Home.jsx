import React  from 'react'
import Header from '../components/Header'
import AddRestaurants from '../components/AddRestaurants'
import RestaurantList from '../components/RestaurantList'
import { useHistory } from 'react-router-dom'
import { useAuth } from '../contextApi/RestaurantsContext'

const Home = () => {

    const { authTokens } = useAuth();
    const history = useHistory()
    const handlelogout = () => {
        return (
        <>
        {localStorage.removeItem("token")}
        {history.push('/Login')}     
        </>
        )   
    }
    return (
        <div>

            <Header />
            <AddRestaurants />
            <RestaurantList />
            
        <div className="container text-center">
            <button color="#0000" onClick={handlelogout}>Log out</button>
        </div>
                        
        </div>
    )
}

export default Home
