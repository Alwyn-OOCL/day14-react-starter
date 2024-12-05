import React, { useContext } from 'react';
import Car from './Car';
import { ParkingLotContext } from './ParkingLotContext';

const ParkingLotSituation = () => {
    const { parkingLots } = useContext(ParkingLotContext);

    const renderTable = (cars, capacity) => {
        const rows = Math.ceil(capacity / 3);
        const cols = 3;
        let table = [];
        for (let i = 0; i < rows; i++) {
            let row = [];
            for (let j = 0; j < cols; j++) {
                const index = i * cols + j;
                row.push(
                    <td key={index} style={{ border: '1px solid black', width: '60px', height: '30px', textAlign: 'center', padding: '5px' }}>
                        {cars[index] ? <Car licensePlate={cars[index]} /> : ''}
                    </td>
                );
            }
            table.push(<tr key={i}>{row}</tr>);
        }
        return table;
    };

    return (
        <div style={{ display: 'flex', justifyContent: 'space-around' }}>
            {parkingLots.map((lot, index) => {
                const capacity = lot.name === 'City Mall Garage' ? 12 : 9;
                return (
                    <div key={index} style={{ marginBottom: '20px', textAlign: 'center' }}>
                        <table style={{ borderCollapse: 'collapse' }}>
                            <tbody>
                                {renderTable(lot.cars, capacity)}
                            </tbody>
                        </table>
                        <h3>{lot.name}</h3>
                    </div>
                );
            })}
        </div>
    );
};

export default ParkingLotSituation;