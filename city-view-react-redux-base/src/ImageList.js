import "./ImageList.scss"

const ImageList = ({images}) => {
    console.log('images got from ImageList', images)
    return(
        <div className="gallery">
            {
                images && images.map((img, index) => {
                    return <div
                        className="imgContainer"
                        key={index}
                        style={{background: `url('${img.thumb}') no-repeat center center fixed`}}>
                    </div>
                })
            }
        </div>
    )
}

export default ImageList