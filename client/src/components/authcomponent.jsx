import React ,{ Component } from 'react'
import { Redirect, Route } from 'react-router-dom'
import { useAuth } from '../contextApi/RestaurantsContext'

const authComponent = ({ component: Component, ...rest }) => {

    const { authTokens } = useAuth();
    return (
        
            <Route {...rest} render={(props) => authTokens ?(
            <Component {...props} />
            
            ) : <Redirect to='/Login' /> }
            />
           
    )
}

export default authComponent
