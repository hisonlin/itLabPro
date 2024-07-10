import "./ImageList.scss"
import {useDispatch, useSelector} from "react-redux";
import {GET_IMAGES_INDEX} from "./consts";
import {getImagesIndex} from "./actions/action";

const ImageList = ({images}) => {
    const imageLibrary = useSelector(state => state.cityViewReducer.imgLibrary)
    console.log('images got from Redux', imageLibrary)
    console.log('images got from ImageList', images)
    const dispatch = useDispatch()
    return(
        <div className="gallery">
            {
                // images && images.map((img, index) => {
                imageLibrary && imageLibrary.map((img, index) => {
                    return <div
                        className="imgContainer"
                        key={index}
                        style={{background: `url('${img.thumb}') no-repeat center center fixed`}}
                        onClick={() => {
                            console.log('dispatch index', index)
                            dispatch(getImagesIndex(index))
                        }}>
                    </div>
                })
            }
        </div>
    )
}

export default ImageList