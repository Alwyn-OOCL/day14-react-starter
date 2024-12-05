import React, { createContext, useReducer } from 'react';

const ParkingLotContext = createContext();

const parkingLotReducer = (state, action) => {
    switch (action.type) {
        case 'SET_PARKING_LOTS':
            return action.payload;
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