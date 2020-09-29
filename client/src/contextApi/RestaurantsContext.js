import React ,{useState, createContext} from 'react';

export const RestaurantsContext = createContext();

export const RestaurantsContextProvider = (props) =>{

    //Hook used 
    const [restaurants, setRestaurants] =useState([]);

    const [selectedRestaurant,setSelectedRestaurant] = useState([]);

    const AddRestaurant = (restaurant) =>{
        setRestaurants([...restaurants,restaurant])
    }
    return (
        <RestaurantsContext.Provider value={{restaurants,
                                            setRestaurants,
                                            AddRestaurant,
                                            selectedRestaurant,
                                            setSelectedRestaurant}}>
            { props.children }
        </RestaurantsContext.Provider>
    );
}