import React from 'react';

const Car = ({ licensePlate }) => {
    return (
        <div style={{
            backgroundColor: '#b0f2b8',
            borderRadius: '5px',
            width: '100%',
            height: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
        }}>
            {licensePlate}
        </div>
    );
};

export default Car;