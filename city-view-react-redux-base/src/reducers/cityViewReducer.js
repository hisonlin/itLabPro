import {FETCH_ALL_IMAGES, GET_IMAGES_INDEX} from "../consts";

const initialState = {
    imgLibrary: [],
    index: null
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
        default:
            return state
    }
}