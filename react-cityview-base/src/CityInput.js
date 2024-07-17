import './CityInput.scss'
import {
    fetchImageActionAsync,
    fetchImageAPIAwait,
    fetchImagePromiseAll, fetchImageWithWrongKey,
    getCity,
    getPage,
} from "./actions/action";
import {useDispatch, useSelector} from "react-redux";

const CityInput = () => {
    const dispatch = useDispatch();
    const index = useSelector(state => state.cityViewReducer.index)
    const city = useSelector(state => state.cityViewReducer.city)
    const images = useSelector(state => state.cityViewReducer.imgLibrary)
    const error = useSelector(state => state.cityViewReducer.error)

    const cbInput = (e) => {
        let newCity = e.target.value.trim().toLowerCase();
        //if(e.key === 'Enter')
        e.key === 'Enter' &&
        newCity !== city &&
        (() => {
            dispatch(getCity(newCity))
            dispatch(getPage(1))
            dispatch(fetchImageActionAsync(newCity, 1));
        })();
    };

    return (
        <>
            <h2 className={'cityName'}>NewCity: {city}
                <br/>
                <span>Image Index: {index}</span>
            </h2>
            <div className={'searchBar'}>
                <input type="text"
                       placeholder="Enter city name"
                       onKeyDown={cbInput}
                       id={'inputCity'}
                />
                <br/>
                {(images.length === 0 || error) && (
                    <div className={'alertBox'}>
                        {error ? error : 'No Image Found'}
                    </div>
                )}
            </div>
            {/*<button onClick={() => {*/}
            {/*    dispatch(fetchImageAPIAwait())*/}
            {/*}}>*/}
            {/*    Fetch using async/await*/}
            {/*</button>*/}

            {/*<button onClick={() => {*/}
            {/*    dispatch(fetchImagePromiseAll())*/}
            {/*}}>*/}
            {/*    Fetch two city using Promise.all*/}
            {/*</button>*/}

            {/*<button onClick={() => {*/}
            {/*    dispatch(fetchImageWithWrongKey())*/}
            {/*}}>*/}
            {/*    Fetch images with wrong key*/}
            {/*</button>*/}
        </>
    );
};

export default CityInput;