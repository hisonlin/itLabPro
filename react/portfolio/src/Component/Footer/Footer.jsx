import React from 'react'
import PropTypes from 'prop-types'
import './Footer.css'
import { useNavigate } from 'react-router-dom'

const Footer = props => {
    const navigate = useNavigate()

    const handleClick = () => {
        navigate('/portfolio/contact')
    }


    return (
        <>
            <div className='footerContainer' onClick={() => handleClick()}>
                <div className='firstSentence'>HAVE A PROJECT?</div>
                <div className='secondSentence'>LET'S TALK.</div>
                <div className='thirdSentence'>I am always on the hunt for new challenges.</div>
            </div>
            <div className='copyright'>
                <div style={{ display: "flex", justifyContent: "center", gap: "10px" }}>
                    <a href="https://www.linkedin.com/in/hisonlin/">
                        <img src="/LinkedIn_icon.png" alt="Linkedin" width={"25px"} height={"25px"} />
                    </a>
                    <a href="https://github.com/hisonlin">
                        <img src="/Github_icon.png" alt="Github" width={"25px"} height={"25px"} />
                    </a>
                    <a href="https://m.facebook.com/hison.lin">
                        <img src="/Facebook_icon.png" alt="Facebook" width={"25px"} height={"25px"} />
                    </a>
                </div>
                <div >© HISON LIN 2024</div>
            </div>
        </>

    )
}

Footer.propTypes = {

}

export default Footer
