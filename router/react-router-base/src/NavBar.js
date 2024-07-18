import React from 'react';
import {Link} from "react-router-dom";
import './NavBar.css';

const NavBar = () => {
    let name = "ABC"
  return (
    <div>
        <nav>
            <Link to={"/page1"} className={'btn btn-primary'}>Page 1</Link>
            <Link to={"/page2"} className={'btn btn-primary'}>Page 2</Link>
            <Link to={`/page3/${name}`} className={'btn btn-primary'}>Page 3</Link>
        </nav>
    </div>
  );
};

export default NavBar;