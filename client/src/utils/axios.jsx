import axios from 'axios';

export default axios.create({
    // baseURL: 'http://localhost:3000'
    baseURL: 'https://reborn-api.onrender.com/api/auth/'
});