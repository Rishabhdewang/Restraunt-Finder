import axios from 'axios';

// const token  = localStorage.getItem("token")

export default axios.create({
    baseURL : "https://restrau-finder.herokuapp.com/rest"
});


