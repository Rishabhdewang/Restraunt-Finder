import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import RestaurantdetailPage from './routes/RestaurantdetailPage';
import UpdatePage from './routes/UpdatePage.jsx';
import Home from './routes/Home';
import { RestaurantsContextProvider } from './contextApi/RestaurantsContext';

const App = () => {
    return (
        <RestaurantsContextProvider>

        
        <div className="container">
            <Router>
                <Switch>
                    <Route exact path='/' component={Home} />
                    <Route exact path='/Restaurant/:id' component={RestaurantdetailPage} />
                    <Route exact path='/Restaurant/:id/updateRestaurant' component={UpdatePage} />
                </Switch>
            </Router>
        </div>
        </RestaurantsContextProvider>
    )
}

export default App;