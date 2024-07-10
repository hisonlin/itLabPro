import "./App.css";
import CityInput from "./CityInput";

import {useState} from "react";

import ImageList from "./ImageList";
import {useSelector} from "react-redux";

function App() {


    const [images, setImages] = useState([])
    const updateImages = (newImages) => setImages(newImages)
    const imgIndex = useSelector(state => state.cityViewReducer.index)
    console.log(imgIndex)

    return <div className="App">
        <CityInput cbUpdateImages={updateImages}/>
        <h1>Image Index: {imgIndex}</h1>
        <ImageList images={images}/>


    </div>
}

export default App;
