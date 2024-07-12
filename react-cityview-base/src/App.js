import './App.scss';
import CityInput from "./CityInput";
import {useEffect} from "react";
import ImageList from "./ImageList";
import {useSelector} from "react-redux";

function App() {
    const images = useSelector(state => state.cityViewReducer.imgLibrary)
    const selectedImg = useSelector(state => state.cityViewReducer.selectedImg)
    const background = selectedImg || images[0];

    useEffect(() => {
        document.title = !!background && background?.des && background.des?
            background.des.charAt(0).toUpperCase() + background.des.slice(1) :'Loading...';
    }, [background])

    return (
        <div className="App" style={{background:background&&`url('${background.regular}') no-repeat center center/cover fixed`}}>
            <CityInput/>
            <ImageList />
        </div>
    );
}

export default App;
