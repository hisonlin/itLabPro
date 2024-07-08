import React, {useState} from 'react';

const Time = () => {
    const [time, setTime] = useState(new Date().toLocaleTimeString())
    return (
        <>
            <h1>{time}</h1>
            <button onClick={() => {
                setTime(new Date().toLocaleTimeString())
            }}>Get Time
            </button>

        </>
    );
};

export default Time;