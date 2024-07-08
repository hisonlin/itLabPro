import React from 'react';

const History = ({equationFromInput}) => {
    return (
        <div style={{position:'absolute', left:'30%'}}>
            <h2>History</h2>
            {equationFromInput.map((equation, index) => {
                return <div key={index}>{equation}</div>
            })}
        </div>
    );
};

export default History;