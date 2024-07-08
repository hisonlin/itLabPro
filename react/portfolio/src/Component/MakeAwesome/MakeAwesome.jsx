import React from 'react'
import PropTypes from 'prop-types'
import './MakeAwesome.css'

const MakeAwesome = props => {
    return (
        <div id='container'>
            Make
            <div id='flip'>
                <div><div>wOrK</div></div>
                <div><div>lifeStyle</div></div>
                <div><div>Everything</div></div>
            </div>
            AweSoMe!
        </div>
    )
}

MakeAwesome.propTypes = {

}

export default MakeAwesome
