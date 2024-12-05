import React, { createContext, useState } from 'react';

const ParkingLotContext = createContext();

const ParkingLotProvider = ({ children }) => {
    const [parkingLots, setParkingLots] = useState([
        { name: 'The Plaza Park', capacity: 9, cars: ['ABC123', 'DEF456', null, null, null, null, null, null, null] },
        { name: 'City Mall Garage', capacity: 12, cars: ['GHI789', 'JKL012', 'MNO345', null, null, null, null, null, null, null, null, null] },
        { name: 'Office Tower Parking', capacity: 9, cars: [null, null, null, null, null, null, null, null, null] }
    ]);

    return (
        <ParkingLotContext.Provider value={{ parkingLots, setParkingLots }}>
            {children}
        </ParkingLotContext.Provider>
    );
};

export { ParkingLotContext, ParkingLotProvider };