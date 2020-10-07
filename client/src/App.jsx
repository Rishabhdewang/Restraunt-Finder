import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import RestaurantdetailPage from './routes/RestaurantdetailPage';
import UpdatePage from './routes/UpdatePage.jsx';
import Home from './routes/Home';
import { AuthContext, RestaurantsContextProvider } from './contextApi/RestaurantsContext';
import SignUp from './components/SignUp';
import Login from './components/Login';
import FrontPage from './components/FrontPage';
// import authcomponent from './components/authcomponent';
// import './App.css';

const App = () => { 

        const existingTokens = JSON.parse(localStorage.getItem("token"));
        const [authTokens, setAuthTokens] = useState(existingTokens);
        
        const setTokens = (data) => {
          localStorage.setItem("token", JSON.stringify(data));
          setAuthTokens(data);
        }

    return (
        <RestaurantsContextProvider>
            <AuthContext.Provider value={{authTokens , setAuthTokens : setTokens}}>
            <div className="container">
                <Router>
                    <Switch>
                        <Route exact path='/' component={FrontPage} />
                        <Route exact path='/SignUp' component={SignUp} />
                        <Route exact path='/Login' component={Login} />
                    
                        <Route exact path='/Restaurants' component={Home} />
                        <Route exact path='/Restaurant/:id' component={RestaurantdetailPage} />
                        <Route exact path='/Restaurant/:id/updateRestaurant' component={UpdatePage} />

                    </Switch>
                </Router>
            </div>
            </AuthContext.Provider>
        </RestaurantsContextProvider>
    )
}

export default App;