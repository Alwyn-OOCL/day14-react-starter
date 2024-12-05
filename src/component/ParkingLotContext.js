import React, { createContext, useReducer } from 'react';

const ParkingLotContext = createContext();

const parkingLotReducer = (state, action) => {
    switch (action.type) {
        case 'SET_PARKING_LOTS':
            return action.payload;
        case 'PARK_CAR':
            return state.map(lot => {
                if (lot.id === action.payload.parkingLot) {
                    const updatedCars = [...lot.cars];
                    updatedCars[action.payload.position - 1] = action.payload.plateNumber;
                    return { ...lot, cars: updatedCars };
                }
                return lot;
            });
        default:
            return state;
    }
};

const ParkingLotProvider = ({ children }) => {
    const [parkingLots, dispatch] = useReducer(parkingLotReducer, []);

    return (
        <ParkingLotContext.Provider value={{ parkingLots, dispatch }}>
            {children}
        </ParkingLotContext.Provider>
    );
};

export { ParkingLotContext, ParkingLotProvider };