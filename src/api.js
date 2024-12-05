import axios from 'axios';

const baseUrl = 'http://localhost:8080/parkinglot';

export const fetchParkingLots = () => {
    return axios.get(baseUrl);
};

export const parkCar = (plateNumber, strategyType) => {
    return axios.post(`${baseUrl}/park`, { plateNumber, strategyType }, {
        headers: {
            'Content-Type': 'application/json'
        }
    });
};

export const fetchCar = ({ plateNumber, parkTime }) => {
    return axios.post(`${baseUrl}/fetch`, { plateNumber, parkTime }, {
        headers: {
            'Content-Type': 'application/json'
        }
    });
};