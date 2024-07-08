import "./App.css";
import CityInput from "./CityInput";

import {useState} from "react";

import ImageList from "./ImageList";

function App() {


    const [images, setImages] = useState([])
    const updateImages = (newImages) => setImages(newImages)

    return <div className="App">
        <CityInput cbUpdateImages={updateImages}/>
        <ImageList images={images}/>


    </div>
}

export default App;
