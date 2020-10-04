import React, { Component, useState } from 'react';
import { Redirect, useHistory } from 'react-router-dom';
import finder from '../api/finder';


const Login = () => {

    const history = useHistory();
    const [Email, setEmail] = useState("");
    const [Password, setPassword] = useState("");

    const handleSignUp = async(e) => {

        e.preventDefault();
        const response = await finder.post(`/SignUp`, { Email, Password });
        console.log(response.data.Success)

        if (response.data.Success) {
            history.push('/Login');
        } else {
            return(
            <>
             <h1>User already exists</h1>
            {/* <Redirect to='/Signup'/> */}
            {history.push("/SignUp")}
            </>)
        }
    }

    return (
        <div className='container col-5 mt-5 pt-5'>
            {/* <h1>These is signup page</h1> */}
            <form >

                <h2 className='text-center '>Sign Up</h2>
                <div className="mt-4">
                    <div className="form-group">
                        <label>Email address</label>
                        <input
                            type="email"
                            value={Email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="form-control" 
                            placeholder="Enter email" />
                    </div>

                    <div className="form-group">
                        <label>Password</label>
                        <input
                            type="password"
                            value={Password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="form-control"
                            placeholder="Enter password" />
                    </div>

                    <button type="submit" className="btn btn-primary btn-block" onClick={handleSignUp}>Sign Up</button>
                    <p className="forgot-password text-right">
                        Already registered <a href="/Login">Login in?</a>
                    </p>
                </div>
            </form>
        </div>
    )
}


export default Login


