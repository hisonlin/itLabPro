import React, {useEffect, useState} from 'react';
import './ImageList.scss'
import {useDispatch, useSelector} from "react-redux";
import {fetchImageActionAsync, getImagesIndex, getPage, getSelectedImg} from "./actions/action";
import {DefaultCity} from "./consts";

const ImageList = () => {
    const images = useSelector(state => state.cityViewReducer.imgLibrary)
    console.log(images);
    const city = useSelector(state => state.cityViewReducer.city)
    const page = useSelector(state => state.cityViewReducer.page)

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchImageActionAsync(city, page));
    }, [city,page]);

    const left = '<';
    const right = '>';

    const nextPage = () => {
        if (page < images[0].total) {
           dispatch(getPage(page + 1));
        }
    };

    const prevPage=()=>{
        if(page>1){
           dispatch(getPage(page-1));
        }

    }

    return (
        <div className={'nav'}>
            <button className="btnNav" id="prev" onClick={prevPage}>
                {left}
            </button>
            <div className={'gallery'}>
                {images && images.map((img, index) => {
                    return <div key={index}
                                className={'carousel-item'}
                                onClick={() => {
                                    dispatch(getSelectedImg(img));
                                    dispatch(getImagesIndex(index))
                                }}>
                        <img src={img.thumb} alt={img.des}/>
                    </div>
                })}

            </div>
            <button className="btnNav" id="next" onClick={nextPage}>{right}</button>
        </div>
    )
        ;
};

export default ImageList;