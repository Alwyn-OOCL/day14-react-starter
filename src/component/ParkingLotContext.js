import React, { createContext, useReducer } from 'react';

const ParkingLotContext = createContext();

const parkingLotReducer = (state, action) => {
    switch (action.type) {
        case 'SET_PARKING_LOTS':
            return action.payload;
        case 'PARK_CAR':
            return state.map(lot => {
                if (lot.id === action.payload.parkingLot) {
                    console.log("action.payload.parkTime", action.payload.parkTime)
                    const updatedCars = [...lot.cars];
                    updatedCars[action.payload.position - 1] = {
                        plateNumber: action.payload.plateNumber,
                        parkTime: action.payload.parkTime
                    };
                    console.log("new",{ ...lot, cars: updatedCars })
                    return { ...lot, cars: updatedCars };
                }
                return lot;
            });
        case 'REMOVE_CAR':
            return state.map(lot => {
                const updatedCars = lot.cars.map(car => car === action.payload.plateNumber ? null : car);
                return { ...lot, cars: updatedCars };
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