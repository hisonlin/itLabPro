import {CITY, DefaultCity, FETCH_ALL_IMAGES, GET_IMAGES_INDEX, PAGE, SELECTED_IMG} from "../consts";

const initialState = {
    imgLibrary: [],
    index: 0,
    selectedImg: null,
    city: DefaultCity,
    page: 1
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
        default:
            return state
    }
}