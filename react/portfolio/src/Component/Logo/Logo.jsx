import React from 'react'
import PropTypes from 'prop-types'
import './Logo.css'
import { useEffect } from 'react';

const Logo = props => {

    return (
        <div className="container">
            <div className="box">

                <div className="title">
                    <span className="block"></span>
                    <h1>Hison Lin<span></span></h1>
                </div>

                <div className="role">
                    <div className="block"></div>
                    <p>full-stack dev</p>
                </div>

            </div>
        </div>
    )
};

Logo.propTypes = {

}

export default Logo
