import axios from 'axios';

// const token  = localStorage.getItem("token")

export default axios.create({
    baseURL : "https://restaurant-finder-backend.herokuapp.com/rest"
});


