import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-burger-6b862.firebaseio.com/'
})


export default instance;