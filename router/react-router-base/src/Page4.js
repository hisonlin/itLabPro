import React from 'react';
import {useParams} from "react-router-dom";

const Page4 = () => {
    let page4 = useParams();
  return (
    <div>
        <h3>Page 4: </h3>
        <p>Page 4 with singer ID: {page4.singerID}</p>
    </div>
  );
};

export default Page4;