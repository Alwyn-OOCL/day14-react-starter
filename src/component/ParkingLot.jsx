import React, { useEffect, useContext } from 'react';
import ParkingLotOperator from './ParkingLotOperator';
import ParkingLotSituation from './ParkingLotSituation';
import { ParkingLotContext } from './ParkingLotContext';
import { fetchParkingLots } from './api';

const ParkingLot = () => {
    const { dispatch } = useContext(ParkingLotContext);

    useEffect(() => {
        fetchParkingLots()
            .then(response => {
                const data = response.data;
                const formattedData = data.map(lot => ({
                    name: lot.name,
                    capacity: lot.tickets.length,
                    cars: Array(lot.tickets.length).fill(null).map((_, index) => {
                        const ticket = lot.tickets.find(ticket => ticket.position === index + 1);
                        return ticket ? ticket.plateNumber : null;
                    })
                }));
                dispatch({ type: 'SET_PARKING_LOTS', payload: formattedData });
            })
            .catch(error => {
                console.error('Failed to fetch parking lots:', error);
            })
            .finally(() => {
                console.log('Fetch parking lots request completed.');
            });
    }, [dispatch]);

    return (
        <div>
            <ParkingLotOperator />
            <ParkingLotSituation />
        </div>
    );
};

export default ParkingLot;