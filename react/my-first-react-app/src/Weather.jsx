import React, {useEffect, useState} from 'react';
import Time from "./Time";

const Weather = ({sendNumberToParent}) => {
    const [count, setCount] = useState(0)
    let nonStateCount = 0
    console.log('count:', count)
    useEffect(() => {
        sendNumberToParent(count)
    }, [count]);
    return (
        <>
            <h1 onClick={() => {
                nonStateCount += 1
                console.log('nonStateCount:', nonStateCount)
                setCount((count) => {return count + 1})
                //setCount(count + 1)
                //setCount(count=>count+1)
                console.log('count:', count)

            }}>Vancouver</h1>
            {/*<h2>{count}</h2>*/}
            <div>This is the number from Weather: {count}</div>
        </>
    );
};


export default Weather;