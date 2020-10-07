import React from 'react'
import { useHistory } from 'react-router-dom'
// import Login from './Login'
// import SignUp from './SignUp'

const FrontPage = () => {

    const history =useHistory();
    return (
    <div className="container-lg pt-5 mt-5" >
        <div className="font-weight-light display-1 text-center">
        <p className=""> Welcome User </p>
        </div>
        <div className=" d-flex align-content-center pt-5 ">

            <button type="submit" className="btn btn-primary btn-block" onClick={()=>{
                history.push('/SignUp')
            }}>Sign Up</button>
        
            
        </div>
        <div className=" d-flex align-content-center pt-5 ">
                                        
            <button type="submit" className="btn btn-primary btn-block" onClick={() =>{
                history.push('/Login')
            }}>Login</button>
    
        </div>
        </div>
        )
}

export default FrontPage
