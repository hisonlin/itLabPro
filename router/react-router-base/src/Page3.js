import React from 'react';
import {useNavigate, useParams} from "react-router-dom";

const Page3 = (props) => {
    console.log('pros',props);
    let page3= useParams();
    console.log('page3',page3);
    let navigate = useNavigate();
  return (
    <div>
        <h3>Page 3: song name is {page3.name} by {props.singerID}</h3>
        <button onClick={()=>navigate(`/page4/${props.singerID}`)} className={'btn btn-primary'}>Go to Page 4</button>
    </div>
  );
};

export default Page3;