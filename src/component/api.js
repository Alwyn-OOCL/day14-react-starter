import axios from 'axios';

const baseUrl = 'http://localhost:8080/parkinglot';

export const fetchParkingLots = () => {
    return axios.get(baseUrl);
};