import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://burgerbuilder-d28dc-default-rtdb.europe-west1.firebasedatabase.app/'
});

export default instance;