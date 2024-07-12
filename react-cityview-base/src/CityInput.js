import React, {useEffect, useState} from 'react';
import {DefaultCity, URL, unsplashKey} from "./consts";
import axios from "axios";
import './CityInput.scss'
import {fetchImageActionAsync, getCity, getPage} from "./actions/action";
import {useDispatch, useSelector} from "react-redux";

const CityInput = () => {
    const dispatch = useDispatch();
    const index = useSelector(state=>state.cityViewReducer.index)
    const city = useSelector(state=>state.cityViewReducer.city)

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
            </div>
        </>
    );
};

export default CityInput;