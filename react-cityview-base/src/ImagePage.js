import React from 'react';
import {useSelector} from "react-redux";

const ImagePage = () => {
 const selectedImg = useSelector(state => state.cityViewReducer.selectedImg);

  return (
    <div>
      <h2>Selected Image</h2>
        <div>
            <img src={selectedImg.regular} alt={selectedImg.des} />
            <p>{selectedImg.des}</p>
        </div>
    </div>
  );
};

export default ImagePage;