import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-burger-builder-dd7fd.firebaseio.com/'
});

export default instance;
