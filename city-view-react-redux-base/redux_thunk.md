## Thunk // middleware like redux-thunk or redux-saga
- There may be a delay in dispatching an action, so we use thunk middleware to handle async actions.
- Redux-thunk is a middleware that lets you call action creator that returns a function instead of an action object.

1. npm i redux-thunk
2. add applyMiddleware(thunk) in index.js
3. npm install --save-dev redux-devtools-extension
```javascript
import {thunk} from "redux-thunk";
import {applyMiddleware} from "redux";
import{composeWithDevTools} from "redux-devtools-extension";
```

### Without Thunk
```javascript

export const getImagesIndex=(index)=>{
    return {
        type: GET_IMAGES_INDEX,
        payload: index
    }
}
```
### With Thunk
```javascript
export const getImagesIndex=(index)=>{
    return (dispatch)=>{
        dispatch({
            type: GET_IMAGES_INDEX,
            payload: index
        })
    }
}
```
-async actions creator: return a function which returns an object(action)

-use async action creator in component
-same as regular action creator

-why use thunk?
-The purpose of using a thunk is to delay the dispatch of an action until a certain condition is met
 or until an asynchronous operation has been completed.
- This is useful when you need to wait for an API call to complete before dispatching an action.
- Make sure the API call is successful before dispatching an action.

## dispatch can be used in component


## homework
1. create an action to update the city in the axios
2. Add forward button and backward button, when click the button, the image will change to the next or previous image.