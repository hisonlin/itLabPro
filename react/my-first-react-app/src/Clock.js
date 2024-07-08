import React, {useEffect, useState} from 'react';

const Clock = () => {
    const [clock, setClock] = useState(new Date().toLocaleTimeString());
    const[stop, setStop] = useState(false);
    const[number, setNumber] = useState(10);

    //decrement the number by 1 every second
    //when the number reaches 0, the component will unmount
    useEffect(() => {
        const interval = setInterval(() => {
            setNumber(prev => {
                if(prev>0){
                    return prev - 1;
                }else {
                    return prev;
                }
            });
        }, 1000);
        return () => {
            clearInterval(interval);
        }

    }, []);


    useEffect(() => {
        console.log('Setting interval')
        let interval;
        if(!stop){
            interval = setInterval(() => {
                setClock(new Date().toLocaleTimeString());
            }, 1000);
        }
        return () => {
            clearInterval(interval);
            console.log('Clearing interval')
        }
    }, [stop]);

    useEffect(() => {
        const stopClock= setTimeout(() => setStop(true), 5000);
        return () => {
            clearTimeout(stopClock)
            console.log('Clearing timeout')
        }
    }, []);
    //it will clear the interval when the component is unmounted
    //the component will unmount when the user navigates to another page

    useEffect(() => {
        const handleClick = () => {
            console.log('Clicked')
        }

        //add event listener
        document.addEventListener('click', handleClick);

        //remove event listener when the component is unmounted
        return () => {
            console.log('Removing event listener')
            document.removeEventListener('click', handleClick);
        }
    }, []);

    return (
        <>
            <div>{clock}</div>
            <div>{number}</div>
        </>

    );
};

export default Clock;