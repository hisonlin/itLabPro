import React from 'react';
import {Link} from "react-router-dom";

const i = () => {
  return (
    <div>
        <h1>404 Page Not Found</h1>
        <p>
            <Link to={'/'}>Let's go to home</Link>
        </p>
    </div>
  );
};

export default i;