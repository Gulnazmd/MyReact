import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://my-card-f18cf-default-rtdb.firebaseio.com/'
});

export default instance;