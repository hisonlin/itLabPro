import './App.scss';
import CityInput from "./CityInput";
import {useEffect, useState} from "react";
import ImageList from "./ImageList";

function App() {
    const[images, setImages] = useState([]);
    const[background, setBackground] = useState('');

    const getImages = (imageList) => {
        setImages(imageList);
    }

    const updateMainBG = (img) => {
        setBackground(img);
    }

    useEffect(() => {
        images.length > 0 && setBackground(images[0])
    }, [images])

    useEffect(() => {
        document.title = !!background && background?.des && background.des?
            background.des.charAt(0).toUpperCase() + background.des.slice(1) :'Loading...';
    }, [background])

    return (
        <div className="App" style={{background:background&&`url('${background.regular}') no-repeat center center/cover fixed`}}>
            <CityInput getImages={getImages}/>
            <ImageList images={images} updateMainBG={updateMainBG}/>
        </div>
    );
}

export default App;
