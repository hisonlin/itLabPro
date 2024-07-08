import './App.css';
import Weather from "./Weather";
import Time from "./Time";
import Counter from "./Counter";
import {useEffect, useState} from "react";
import Clock from "./Clock";
import SearchBar from "./SearchBar";

function App() {
    const [numberFromWeather,setNumberFromWeather] = useState(0)
    const [searchValue, setSearchValue] = useState("");
    const [buttonValue, setButtonValue] = useState("Hide")
    const sendNumberToParent = (number) => {
        setNumberFromWeather(number)
    }
    const [showClock,   setShowClock] = useState(true)
    useEffect(() => {
        const interval = setInterval(() => {
            setShowClock(false)
        }, 5000);
        return () => {
            clearInterval(interval);
        }
    }, []);

    const getSearchValueFromChild = (value) => {
        setSearchValue(value)
    }

    const handleClick = () => {
        const newValue = setTimeout(() => {
            if (buttonValue === "Hide") {
                setButtonValue("Show")
            } else {
                setButtonValue("Hide")
            }
        }, 2000);
        return () => {
            clearTimeout(newValue)
        }
    }

    return (
        <div className="App">
            <Weather sendNumberToParent={sendNumberToParent}/>
            <Time />
            <Counter numberFromParent ={numberFromWeather}/>
            {/*{showClock && <Clock/>}*/}
            <Clock/>
            {buttonValue==="Hide"?<SearchBar getSearchValue={getSearchValueFromChild}/>:null}
            <div>Value from search bar: {searchValue}</div>
            <button onClick={handleClick}>{buttonValue}</button>
        </div>

    );
}

export default App;
