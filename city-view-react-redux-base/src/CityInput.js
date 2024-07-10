import {useEffect, useState} from "react";
import "./CityInput.scss";
import {AccessKey, BasicUrl, DefaultCity} from "./consts";
import axios from "axios";
import {useDispatch} from "react-redux";
import {fetchImageAction} from "./actions/action";

const CityInput = ({cbUpdateImages}) => {
    const [city, setCity] = useState(DefaultCity)
    const [images, setImages] = useState([])
    useEffect(() => fetchCity(city), [city])
    const dispatch = useDispatch()

    //event handler for key down
    const cbInput = (evt) => {
        let newCity = evt.target.value.trim().toLowerCase()
        evt.key === 'Enter' &&
        newCity !== city && setCity(newCity)
    }

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
            setImages(imageList)
            cbUpdateImages(imageList)
            console.log('tidied data', imageList)

        }).catch(err => console.log('fetch city http error!', err))


    return (
        <div className="searchBar">
            <input
                className="inputCity"
                type="text"
                placeholder="Search City here ..."
                onKeyDown={cbInput}
            />
            {/*{JSON.stringify(images)}*/}
            <button onClick={()=>{
                console.log('Redux action')
                dispatch(fetchImageAction())

            }}>Redux action</button>
        </div>
    )
}

export default CityInput