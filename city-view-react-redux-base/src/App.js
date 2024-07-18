import "./App.css";
import CityInput from "./CityInput";

import {useState} from "react";

import ImageList from "./ImageList";
import {useSelector} from "react-redux";

function App() {


    const [images, setImages] = useState([])
    const updateImages = (newImages) => setImages(newImages)
    const img = useSelector(state => state.cityViewReducer.imgLibrary)
    const imgIndex = useSelector(state => state.cityViewReducer.index)
    console.log(imgIndex)

    return <div className="App"
                style={{background: `url('${img[imgIndex]?.thumb}') no-repeat center center fixed`}}>
        {/*//Safe Navigation Operator*/}
        {/*// - The safe navigation operator `?` is used to avoid errors when trying to access properties of an object that*/}
        {/*is null or undefined.*/
            // to check is the property exist or not, if exist then return the value, if not then return undefined
        }
        <CityInput cbUpdateImages={updateImages}/>
        <h1>Image Index: {imgIndex}</h1>
        <ImageList images={images}/>


    </div>
}

export default App;
