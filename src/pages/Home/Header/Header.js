import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from './../../../firebase.init';
import { signOut } from "firebase/auth";

function CollapsibleExample() {

  const [user] = useAuthState(auth);

  const logout = () => {
    signOut(auth);
  };

  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home">Ed-Tech</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="col-6 offset-3">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#services">Services</Nav.Link>
            <Nav.Link href="#projects">Projects</Nav.Link>
            <Nav.Link href="#support">Support</Nav.Link>
            <Nav.Link href="#faq">FAQ</Nav.Link>
            <Nav.Link href="#about">About</Nav.Link>
          </Nav>
          <Nav>
            {
              user ? <><Nav.Link className='text-white'><img className='w-25 h-100 rounded-circle me-1' src={user.photoURL} alt="" />{user.displayName}</Nav.Link><button className="bg-info border-0 rounded px-3" onClick={logout}>
              SignOut
            </button></>
              :
              <>
              <Nav.Link className='w-50 h-50 mt-1 text-center text-bg-secondary rounded-pill text-white'><Link style={{color: '#0a0f1d'}} className='text-decoration-none' to="/login">Log In</Link></Nav.Link>
              <Nav.Link className='w-50 h-50 mt-1 text-center text-bg-secondary rounded-pill text-white'><Link style={{color: '#0a0f1d'}} className='text-decoration-none' to="/signup">SignUp</Link></Nav.Link>
              </>
            }
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default CollapsibleExample;