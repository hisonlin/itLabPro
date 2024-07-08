import React from 'react';
import './ImageList.scss'

const ImageList = ({images, updateMainBG}) => {
    console.log(images);
    const left = '<';
    const right = '>';
    return (
        <div className={'nav'}>
            <div className={'gallery'}>
                {images && images.map((img, index) => {
                    return <div key={index}
                                className={'carousel-item'}
                                onClick={()=>updateMainBG(img)}>
                        <img src={img.thumb} alt={img.des}/>
                    </div>
                })}
            </div>
        </div>
    );
};

export default ImageList;