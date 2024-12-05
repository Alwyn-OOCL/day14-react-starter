import React, {useState, useContext} from 'react';
import {ParkingLotContext} from './ParkingLotContext';
import {fetchParkingLots, parkCar} from '../api';

const ParkingLotOperator = () => {
    const [plateNumber, setPlateNumber] = useState('');
    const [parkingStrategy, setParkingStrategy] = useState('Standard');
    const {dispatch} = useContext(ParkingLotContext);

    const handlePark = () => {
        if (!plateNumber || !parkingStrategy) {
            alert('Plate Number and Parking Strategy are required.');
            return;
        }

        parkCar(plateNumber, parkingStrategy).then(response => {
            const {plateNumber, position, parkingLot} = response.data;
            dispatch({type: 'PARK_CAR', payload: {plateNumber, position, parkingLot}});
            setPlateNumber('');
            setParkingStrategy('');
        })
        .catch(error => {
            console.error('Failed to park car:', error);
        }).finally(() => {
            fetchParkingLots();
        });
    };

    const handleFetch = () => {
        console.log('Fetch button clicked');
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
                        style={{marginLeft: '5px'}}
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
                        <option value="Standard">Standard</option>
                        <option value="Smart">Smart</option>
                        <option value="Super">SuperSmart</option>
                    </select>
                </label>
            </div>
            <div style={{padding: '5px'}}>
                <button
                    onClick={handlePark}
                    style={{backgroundColor: '#a7d9fe', padding: '5px 10px'}}
                >
                    Park
                </button>
            </div>
            <div style={{padding: '5px'}}>
                <button
                    onClick={handleFetch}
                    style={{backgroundColor: '#a7d9fe', padding: '5px 10px'}}
                >
                    Fetch
                </button>
            </div>
        </div>
    );
};

export default ParkingLotOperator;