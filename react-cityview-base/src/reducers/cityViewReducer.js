import {
    CITY,
    DefaultCity, ERROR,
    FETCH_ALL_IMAGES,
    FETCH_TWO_CITY,
    GET_IMAGES_INDEX,
    LOADING,
    PAGE,
    SELECTED_IMG
} from "../consts";

const initialState = {
    imgLibrary: [],
    index: 0,
    selectedImg: null,
    city: DefaultCity,
    page: 1,
    isLoading: true,
    twoCity: null,
    error: null
}

export const cityViewReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_ALL_IMAGES:
            return {
                ...state,
                imgLibrary: action.payload
            }
        case GET_IMAGES_INDEX:
            return {
                ...state,
                index: action.payload
            }
        case SELECTED_IMG:
            return {
                ...state,
                selectedImg: action.payload
            }
        case CITY:
            return {
                ...state,
                city: action.payload
            }
        case PAGE:
            return {
                ...state,
                page: action.payload
            }
        case LOADING:
            return {
                ...state,
                isLoading: action.payload
            }
        case FETCH_TWO_CITY:
            return {
                ...state,
                twoCity: action.payload
            }
        case ERROR:
            return {
                ...state,
                error: action.payload
            }
        default:
            return state
    }
}