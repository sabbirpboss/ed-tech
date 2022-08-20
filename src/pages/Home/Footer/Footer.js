import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { FaFacebook, FaGithub, FaInstagram, FaLinkedin, FaYoutube } from 'react-icons/fa';

const Footer = () => {
    return (
        <div style={{backgroundColor: '#212529'}}>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="#home" style={{marginTop:'40px'}}>Ed-Tech</Navbar.Brand>
                </Container>
            </Navbar>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container >
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav" className='d-flex justify-content-between align-items-center'>
                        <Nav className="">
                            <Nav.Link href="#home" style={{paddingLeft: '0px'}}>Payment Status</Nav.Link>
                            <Nav.Link href="#projects">Email Verify</Nav.Link>
                            <Nav.Link href="#support">Public Support Group</Nav.Link>
                            <Nav.Link href="#faq">About Us</Nav.Link>
                            <Nav.Link href="#about">Communicate Us</Nav.Link>
                        </Nav>
                        <Nav style={{color: '#42c0f8'}}>
                           <ul style={{
                            textDecoration: 'none',
                            listStyle: 'none',
                            display: 'flex',
                            alignItems: 'center',
                            margin: '0px',
                            marginLeft: '10px'
                           }}>
                            <li style={{textDecoration: 'none',marginLeft: '10px'
                           }}><a href="#">  <FaFacebook /></a></li>
                            <li style={{textDecoration: 'none',marginLeft: '10px'
                           }}><a href="#">  <FaInstagram /></a></li>
                            <li style={{textDecoration: 'none',marginLeft: '10px'
                           }}><a href="#">  <FaYoutube /></a></li>
                            <li style={{textDecoration: 'none',marginLeft: '10px'
                           }}><a href="#">  <FaLinkedin /></a></li>
                            <li style={{textDecoration: 'none',marginLeft: '10px'
                           }}><a href="#">  <FaGithub /></a></li>
                           </ul>
          </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <hr className='container text-white opacity-25' />
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container >
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav" className='d-flex justify-content-between align-items-center'>
                        <Nav className="">
                            <Nav.Link href="#home" style={{paddingLeft: '0px'}}>
                            <p style={{color: '#42c0f8'}}>Copyright &copy;2022 Ed-Tech All right Reserves</p>
                            </Nav.Link>
                        </Nav>
                        <Nav style={{color: '#42c0f8'}}>
                           <ul style={{
                            listStyle: 'none',
                            display: 'flex',
                            alignItems: 'center',
                            margin: '0px',
                            marginLeft: '10px'
                           }}>
                            <li style={{textDecoration: 'none',marginLeft: '10px'
                           }}><a style={{textDecoration: 'none'}} href="#">Supported Browser</a></li>
                            <li style={{textDecoration: 'none',marginLeft: '10px'
                           }}><a style={{textDecoration: 'none'}} href="#">Condition</a></li>
                            <li style={{textDecoration: 'none',marginLeft: '10px'
                           }}><a style={{textDecoration: 'none'}} href="#">Privacy Policy</a></li>
                           </ul>
          </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Footer;