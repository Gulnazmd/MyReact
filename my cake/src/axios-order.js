import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-cake-app-d2102-default-rtdb.firebaseio.com/'
});

export default instance;