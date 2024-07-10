## Redux
- For global states management
- Redux is a predictable state container for JavaScript apps.
- Resolves "Props hell" or "Prop drilling"

## Redux Three principles
1. Single source of truth
    - The state of your whole application is stored in an object tree within a single store.
2. State is read-only
    - The only way to change the state is to emit an action, an object describing what happened.
3. Changes are made with pure functions 
    - To specify how the state tree is transformed by actions, you write pure reducers.
`https://redux.js.org/understanding/thinking-in-redux/three-principles`

## Three cores of Redux
- store(state), action, reducer  
`https://redux.js.org/tutorials/essentials/part-1-overview-concepts`

### Step 1: Install dependencies  
`npm i redux react-redux`

### Step 2: Add Provider in index.js(root)
- create a store and wrap the App component with Provider

```javascript
import {createStore} from "redux";
import {Provider} from "react-redux";
import reducers from "./reducers"

const reduxStore = createStore(reducers)

ReactDOM.render(
<Provider store={reduxStore}>
<App />
</Provider>,
document.getElementById("root")
);
```

### Step 3: Create reducers
- create a folder called reducers,inside create a file called reduces.js
- create an initial state object
- create reducers function that takes state and action as arguments
- use switch statement to check the action type and return the state
```javascript

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
```

### Step 4: Combine reducers
- create a file called index.js in the reducers folder
- import combineReducers from redux
```javascript
import {combineReducers} from "redux";
import {cityViewReducer} from "./cityViewReducer";

export default combineReducers(
    {
        cityViewReducer
    }
)
```

### Step 5: Create actions
- create a folder called actions, inside create a file called actions.js
- use function to create actions
```javascript

export const fetchImageAction=(imgLibrary)=>{
    return {
        type: FETCH_ALL_IMAGES,
        payload: imgLibrary
    }
}

export const getImagesIndex=(index)=>{
    return {
        type: GET_IMAGES_INDEX,
        payload: index
    }
}
```

### Step 6: Dispatch actions
- import useDispatch from react-redux
- import actions from actions.js
- use useDispatch hook to dispatch actions
- we can dispatch functions by an event listener or useEffect(e.g. fetch data from API)
```javascript
import {useDispatch} from "react-redux";
import {fetchImageAction} from "./actions/actions";

const dispatch = useDispatch()
const fetchCity = city =>
        axios.get(BasicUrl, {
           params: {
              query: city,
              orientation: 'landscape'
           },
           headers: {
              Authorization: `Client-ID ${AccessKey}`
           }
        }).then(res => {
           let {data: {results}} = res
           let imageList = results.map(item => ({
              des: item.alt_description,
              regular: item.urls.regular,
              thumb: item.urls.thumb
           }))
          dispatch(fetchImageAction(imageList)) 

        }).catch(err => console.log('fetch city http error!', err))
```
### Step 7: Consume state
- import useSelector from react-redux
- import the combined reducers
- use useSelector hook to consume the state
```javascript
import {useSelector} from "react-redux";
import {cityViewReducer} from "./reducers/cityViewReducer";

function App() {
   const images = useSelector(state => state.cityViewReducer.imgLibrary)
   return <div className="App">
     images.map((image, index)=>(
        <img src={image.thumb} key={index} onClick={()=>dispatch(getImagesIndex(index))}/>
      ))
   </div>
}
```
## Homework
Use redux to manage index of img. When click a certain image,
its index is shown in App
1. Create a global state to store index
2. Consume the state in UI
3. Create handler to dispatch
4. Create action creator to describe the change
5. Create a reducer to update the state