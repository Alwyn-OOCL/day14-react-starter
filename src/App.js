import React from 'react';
import './App.css';
import ParkingLot from './component/ParkingLot';
import { ParkingLotProvider } from './component/ParkingLotContext';

const App = () => {
    return (
        <ParkingLotProvider>
            <div>
                <ParkingLot />
            </div>
        </ParkingLotProvider>
    );
};

export default App;