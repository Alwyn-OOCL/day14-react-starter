import React, {useState, useContext} from 'react';
import {ParkingLotContext} from './ParkingLotContext';
import {parkCar, fetchCar} from '../api';

const ParkingLotOperator = ({refreshParkingLots}) => {
    const [plateNumber, setPlateNumber] = useState('');
    const [parkingStrategy, setParkingStrategy] = useState('');
    const {dispatch, parkingLots} = useContext(ParkingLotContext);


    const handlePark = () => {
        if (!plateNumber || !parkingStrategy) {
            alert('Plate Number and Parking Strategy are required.');
            return;
        }

        parkCar(plateNumber, parkingStrategy)
        .then(response => {
            const {plateNumber, position, parkingLot, parkTime} = response.data;
            dispatch({type: 'PARK_CAR', payload: {plateNumber, position, parkingLot, parkTime}});
            setPlateNumber('');
            setParkingStrategy('');
            refreshParkingLots();
        })
        .catch(error => {
            console.error('Failed to park car:', error);
        });
    };

    const handleFetch = () => {
        if (!plateNumber) {
            alert('Plate Number is required.');
            return;
        }

        const car = parkingLots.flatMap(lot => lot.cars).find(car => car.plateNumber === plateNumber);
        if (!car) {
            alert('Car not found.');
            return;
        }
        console.log(car)

        fetchCar({plateNumber, parkTime: car.parkTime})
        .then(response => {
            const {plateNumber} = response.data;
            dispatch({type: 'REMOVE_CAR', payload: {plateNumber}});
            setPlateNumber('');
            refreshParkingLots();
        })
        .catch(error => {
            console.error('Failed to fetch car:', error);
        });
    };

    return (
        <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px', padding: '10px'}}>
            <div style={{padding: '5px'}}>
                <label>
                    Plate Number:
                    <input
                        type="text"
                        value={plateNumber}
                        onChange={(e) => setPlateNumber(e.target.value)}
                        style={{ marginLeft: '5px', textAlign: 'center' }}
                    />
                </label>
            </div>
            <div style={{padding: '5px'}}>
                <label>
                    Parking Strategy:
                    <select
                        value={parkingStrategy}
                        onChange={(e) => setParkingStrategy(e.target.value)}
                        style={{margin: '5px'}}
                    >
                        <option value="">Select</option>
                        <option value="STANDARD">Standard</option>
                        <option value="SMART">Smart</option>
                        <option value="SUPER_SMART">SuperSmart</option>
                    </select>
                </label>
            </div>
            <div style={{padding: '5px'}}>
                <button
                    onClick={handlePark}
                    style={{backgroundColor: '#a7d9fe', padding: '5px 10px', width: '80px', borderRadius: '5px'}}
                >
                    Park
                </button>
            </div>
            <div style={{padding: '5px'}}>
                <button
                    onClick={handleFetch}
                    style={{backgroundColor: '#a7d9fe', padding: '5px 10px', width: '80px', borderRadius: '5px'}}
                >
                    Fetch
                </button>
            </div>
        </div>
    );
};

export default ParkingLotOperator;