import React from 'react'
import PropTypes from 'prop-types'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './Header.scss'
import { Offcanvas } from 'react-bootstrap';
import HeaderLogo from "../HeaderLogo/HeaderLogo";

const Header = props => {
    return (
        <div id='topBar'>
            <Navbar expand='sm' >
                <Container fluid id="headerContainer">
                    <Navbar.Brand className='gradient-text' href="/portfolio/" style={{ fontSize: '4vh'}}>
                        <HeaderLogo />
                    </Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Offcanvas
                        id={`offcanvasNavbar-expand-sm`}
                        aria-labelledby={`offcanvasNavbarLabel-expand-sm`}
                        placement="end"
                    >
                        <Offcanvas.Header closeButton>
                            <Offcanvas.Title id={`offcanvasNavbarLabel-expand-sm`}>
                                Hison Lin
                            </Offcanvas.Title>
                        </Offcanvas.Header>
                        <Offcanvas.Body>
                            <Nav className="justify-content-end flex-grow-1" style={{ fontSize: '2.5vh' }}>
                                <Nav.Link className="nav-link-item" href="/portfolio/about">About</Nav.Link>
                                <Nav.Link className="nav-link-item" href="/portfolio/projects">Projects</Nav.Link>
                                <Nav.Link className="nav-link-item" href="/portfolio/contact">Contact</Nav.Link>
                            </Nav>
                        </Offcanvas.Body>
                    </Navbar.Offcanvas>
                </Container>
            </Navbar>
        </div>
    )
}

Header.propTypes = {

}

export default Header
