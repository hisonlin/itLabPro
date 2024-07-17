import React from 'react';
import {useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";

const ImagePage = () => {
 const selectedImg = useSelector(state => state.cityViewReducer.selectedImg);

 const navigate = useNavigate();

  return (
    <div>
      <h2>Selected Image</h2>
        <div>
            <img src={selectedImg.regular} alt={selectedImg.des} />
            <p>{selectedImg.des}</p>
            <button onClick={()=>{
                navigate('/')
            }}>Back</button>
        </div>
    </div>
  );
};

export default ImagePage;