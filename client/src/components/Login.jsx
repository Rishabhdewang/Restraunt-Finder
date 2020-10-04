import React, { useState } from 'react';
import { Link , Redirect, useHistory } from 'react-router-dom';
import finder from '../api/finder'; 
import { useAuth } from '../contextApi/RestaurantsContext';


const Login = () => {

    const history = useHistory();
    const [Email, setEmail] = useState("");
    const [Password, setPassword] = useState("");

    const {setAuthTokens } = useAuth();
    const [isLoggedIn, setLoggedIn] = useState(false);

    const handleLogin = async (e) => {

        e.preventDefault();
        const response = await finder.post(`/Login`, { Email, Password })
            .then(
               async (token) => {
                    if (token.data.accessToken) {
                        localStorage.setItem("token", JSON.stringify(token.data.accessToken));
                        console.log("token added")
                        setLoggedIn(true);
                    }       
                })
            .then(
                history.push('/Restaurants')
            
            )
            .catch( err => {
                    console.log(err)
                });
        if(isLoggedIn) {
            return <Redirect  to='/Restaurants' />// Redirect is not working
        }

        
    }

    return (
        <div className='container col-5 mt-5 mb-4 pt-5 bg-'>
            <h1></h1>
            <form>
                <h3 className='text-center'>Log In</h3>
                <div className="pt-3">
                    <div className="form-group">
                        <label>Email address</label>
                        <input type="email"
                            value={Email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="form-control"
                            placeholder="Enter email" />
                    </div>

                    <div className="form-group">
                        <label>Password</label>
                        <input type="password"
                            className="form-control"
                            value={Password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="Enter password" />
                    </div>

                    <div className="form-group">
                        <div className="custom-control custom-checkbox">
                            <input type="checkbox" className="custom-control-input" id="customCheck1" />
                            <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
                        </div>
                    </div>

                    <button type="submit" className="btn btn-primary btn-block" onClick={handleLogin}>Submit</button>

                </div>
            </form>

        </div>
    )
}

export default Login;