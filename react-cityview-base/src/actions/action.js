import {unsplashKey, URL, FETCH_ALL_IMAGES, GET_IMAGES_INDEX, SELECTED_IMG, PAGE, CITY} from "../consts";
import axios from "axios";

export const getImagesIndex=(index)=>{
    return {
        type: GET_IMAGES_INDEX,
        payload: index
    }
}

export const fetchImageActionAsync=(city, page)=>{
    console.log('From action', page)
    return (dispatch)=>{
            axios.get(URL, {
                params: {
                    query: city,
                    orientation: 'landscape',
                    page: page,
                },
                headers: {
                    Authorization: `Client-ID ${unsplashKey}`
                }
            }).then(res => {
                const totalPages = res.data.total_pages
                let {data: {results}} = res
                let imageList = results.map(item => ({
                    des: item.alt_description,
                    regular: item.urls.regular,
                    thumb: item.urls.thumb,
                    total: totalPages
                }))

                console.log('From axios', imageList)
                dispatch(
                    {
                        type: FETCH_ALL_IMAGES,
                        payload: imageList
                    }
                )

            }).catch(err => console.log('fetch city http error!', err))
    }
}

export const getSelectedImg=(img)=>{
    return {
        type: SELECTED_IMG,
        payload: img
    }
}

export const getCity=(city)=>{
    return {
        type: CITY,
        payload: city
    }
}

export const getPage=(page)=>{
    return {
        type: PAGE,
        payload: page
    }
}
