import React ,{usestate, createContext} from 'react';

export const RestaurantsContext = createContext();

export const RestaurantsContextProvider = (props) =>{

    const [restaurants, setRestaurants] =usestate([])


    return (
        <RestaurantsContext.Provider value={{restaurants : restaurants, setRestaurants : setRestaurants}}>
            { props.children }
        </RestaurantsContext.Provider>
    );
}