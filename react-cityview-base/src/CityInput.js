import React, {useEffect, useState} from 'react';
import {DefaultCity, URL, unsplashKey} from "./consts";
import axios from "axios";
import './CityInput.scss'

const CityInput = ({getImages}) => {
    const [city, setCity] = useState(DefaultCity);
    console.log('city:', city)
    const [images, setImages] = useState([])
    console.log('images:', images)

    const cbInput = (e) => {
        let newCity = e.target.value.trim().toLowerCase();
        //if(e.key === 'Enter')
        e.key === 'Enter' &&
        newCity !== city &&
        (() => {
            setCity(newCity);//async
            fetchCity(newCity);
        })();
    };

    useEffect(() => {
        fetchCity(DefaultCity);

    }, []);

    const fetchCity = (newCity) => {
        axios.get(URL, {
            params: {
                query: newCity,
                orientation: 'landscape',
            },
            headers: {
                Authorization: `Client-ID ${unsplashKey}`
            }
        }).then(res => {
            console.log(res);
            let {data: {results}} = res;
            console.log(results);

            let imageList = results.map((item) => ({
                des: item.alt_description,
                regular: item.urls.regular,
                thumb: item.urls.thumb,
            }));
            console.log(imageList);
            setImages(imageList);
        }).catch(err => {
            console.log(err);
        });
    }

    useEffect(() => {
         getImages(images);
    }, [images]);

    return (
        <>
            <h2 className={'cityName'}>NewCity: {city}</h2>
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