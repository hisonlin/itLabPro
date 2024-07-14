import './App.scss';
import CityInput from "./CityInput";
import React, {useEffect} from "react";
import ImageList from "./ImageList";
import { useSelector} from "react-redux";
import loading from "./assets/spinning-loading.gif";
import unknown from "./assets/unknown.jpg";

function App() {
    const images = useSelector(state => state.cityViewReducer.imgLibrary)
    const selectedImg = useSelector(state => state.cityViewReducer.selectedImg)
    const isLoading = useSelector(state => state.cityViewReducer.isLoading)
    const background = selectedImg || images[0];
    console.log('From App', selectedImg)

    useEffect(() => {
        document.title = !!background && background?.des && background.des ?
            background.des.charAt(0).toUpperCase() + background.des.slice(1) : 'Loading...';
    }, [background])

    const backgroundStyle = isLoading
        ? `url('${loading}') no-repeat center center/cover fixed`
        : background
            ? `url('${background.regular}') no-repeat center center/cover fixed`
            : `url('${unknown}') no-repeat center center/cover fixed`;

    return (
        <div className="App" style={{background: backgroundStyle}}>
            <CityInput/>
            <ImageList/>
        </div>
    );
}

export default App;
