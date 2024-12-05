import React from 'react';

const ParkingLotSituation = () => {
    const parkingLots = [
        { name: 'The Plaza Park', capacity: 9, cars: [true, true, false, false, false, false, false, false, false] },
        { name: 'City Mall Garage', capacity: 12, cars: [true, true, true, false, false, false, false, false, false, false, false, false] },
        { name: 'Office Tower Parking', capacity: 9, cars: [false, false, false, false, false, false, false, false, false] }
    ];

    const renderTable = (cars, rows, cols) => {
        let table = [];
        for (let i = 0; i < rows; i++) {
            let row = [];
            for (let j = 0; j < cols; j++) {
                const index = i * cols + j;
                row.push(
                    <td key={index} style={{ border: '1px solid black', width: '20px', height: '20px', textAlign: 'center' }}>
                        {cars[index] ? 'x' : ''}
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
                const rows = Math.ceil(lot.capacity / 3);
                const cols = lot.capacity / rows;
                return (
                    <div key={index} style={{ marginBottom: '20px', textAlign: 'center' }}>
                        <table style={{ borderCollapse: 'collapse' }}>
                            <tbody>
                                {renderTable(lot.cars, rows, cols)}
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