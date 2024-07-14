import {
    unsplashKey,
    URL,
    FETCH_ALL_IMAGES,
    GET_IMAGES_INDEX,
    SELECTED_IMG,
    PAGE,
    CITY,
    LOADING,
    FETCH_TWO_CITY, ERROR
} from "../consts";
import axios from "axios";

export const getImagesIndex = (index) => {
    return {
        type: GET_IMAGES_INDEX,
        payload: index
    }
}

export const fetchImageActionAsync = (city, page) => (dispatch) => {
    console.log('From action', page)
    dispatch({
        type: LOADING,
        payload: true
    })
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
        dispatch({
            type: LOADING,
            payload: false

        })
        dispatch(
            {
                type: FETCH_ALL_IMAGES,
                payload: imageList
            }
        )

        dispatch(getSelectedImg(null))
        dispatch(getImagesIndex(0))
        dispatch({
            type: ERROR,
            payload: null
        })
    }).catch(err => {
        dispatch({
            type: LOADING,
            payload: false
        })
        console.log('fetch city http error!', err)
    })

}

export const getSelectedImg = (img) => {
    return {
        type: SELECTED_IMG,
        payload: img
    }
}

export const getCity = (city) => {
    return {
        type: CITY,
        payload: city
    }
}

export const getPage = (page) => {
    return {
        type: PAGE,
        payload: page
    }
}

export const fetchImageAPIAwait = () => async (dispatch) => {
    try {
        const res = await axios.get(URL, {
            params: {
                query: 'Toronto',
                orientation: 'landscape'
            },
            headers: {
                Authorization: `Client-ID ${unsplashKey}`
            }
        })
        let {data: {results}} = res
        let imageList = results.map(item => ({
            des: item.alt_description,
            regular: item.urls.regular,
            thumb: item.urls.thumb
        }))
        console.log('tidied data', imageList)
        dispatch(
            {
                type: FETCH_ALL_IMAGES,
                payload: imageList
            }
        )
    } catch (err) {
        console.log('fetch city http error!', err)
    }
}

export const fetchImagePromiseAll = () => dispatch => {
    const requests = [
        axios.get(URL, {
            params: {
                query: 'Nanjing',
                orientation: 'landscape'
            },
            headers: {
                Authorization: `Client-ID ${unsplashKey}`
            }
        }),
        axios.get(URL, {
            params: {
                query: 'Guangzhou',
                orientation: 'landscape'
            },
            headers: {
                Authorization: `Client-ID ${unsplashKey}`
            }
        })
    ];
    Promise.all(requests)
        .then(responses => {
            const [response1, response2] = responses;
            console.log('responses', response1, response2)
            dispatch({
                type: FETCH_TWO_CITY,
                payload: {response1, response2}
            })
        })
        .catch(error => {
            // handle errors
            console.error(error);
        })
};


export const fetchImageWithWrongKey = () => async (dispatch) => {
    try {
        const res = await axios.get(URL, {
            params: {
                query: 'Toronto',
                orientation: 'landscape'
            },
            headers: {
                Authorization: `Client-ID 123`
            }
        })
        let {data: {results}} = res
        let imageList = results.map(item => ({
            des: item.alt_description,
            regular: item.urls.regular,
            thumb: item.urls.thumb
        }))
        console.log('tidied data', imageList)
        dispatch(
            {
                type: FETCH_ALL_IMAGES,
                payload: imageList
            }
        )
    } catch (err) {
        console.log('fetch city http error!', err)
        dispatch({
            type: ERROR,
            payload: err.message
        })
    }
}

