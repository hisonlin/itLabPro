import {useEffect, useState} from "react";
import "./CityInput.scss";
import { DefaultCity} from "./consts";
import {useDispatch} from "react-redux";
import {fetchImageAction, fetchImageActionAsync, fetchImageAPIAwait} from "./actions/action";

const CityInput = () => {
    const [city, setCity] = useState(DefaultCity)
    const dispatch = useDispatch()

    //event handler for key down
    const cbInput = (evt) => {
        let newCity = evt.target.value.trim().toLowerCase()
        evt.key === 'Enter' &&
        newCity !== city && setCity(newCity)
    }

    useEffect(() => {
        dispatch(fetchImageActionAsync(city))
    }, [city]);

    return (
        <div className="searchBar">
            <input
                className="inputCity"
                type="text"
                placeholder="Search City here ..."
                onKeyDown={cbInput}
            />
            {/*{JSON.stringify(images)}*/}
            <button onClick={()=>{
                console.log('Redux action')
                dispatch(fetchImageAction())

            }}>Redux action</button>
            <button onClick={()=>{
                console.log('FetchAPI')
                dispatch(fetchImageActionAsync(city))
            }}>
                FetchAPI
            </button>

        </div>
    )
}

export default CityInput