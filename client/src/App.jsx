import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import RestaurantdetailPage from './routes/RestaurantdetailPage';
import UpdatePage from './routes/UpdatePage.jsx';
import Home from './routes/Home';
import { RestaurantsContextProvider } from './contextApi/RestaurantsContext';
import SignUp from './components/SignUp';
import Login from './components/Login';
import FrontPage from './components/FrontPage';

const App = () => {
    return (
        <RestaurantsContextProvider>

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
        </RestaurantsContextProvider>
    )
}

export default App;