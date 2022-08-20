import React from 'react';
import { FaGoogle } from  'react-icons/fa';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBInput
}
from 'mdb-react-ui-kit';

function Login() {
  return (
    <MDBContainer fluid>

      <MDBRow className='d-flex justify-content-center align-items-center h-100'>
        <MDBCol col='12'>

          <MDBCard className='bg-dark text-white my-5 mx-auto' style={{borderRadius: '1rem', maxWidth: '400px'}}>
            <MDBCardBody className='p-5 d-flex flex-column align-items-center mx-auto w-100'>

              <h2 className="fw-bold mb-2 text-uppercase">Login</h2>
              <p className="text-white-50 mb-5">Please enter your login and password!</p>

              <MDBInput wrapperClass='mb-4 mx-5 w-100' labelClass='text-white' type='email' size="lg" placeholder='Email' />
              <MDBInput wrapperClass='mb-4 mx-5 w-100' labelClass='text-white' type='password' size="lg" placeholder='Password' />

              <Button className='btn btn-success mx-2 px-5'>
                Login
              </Button>

              <div className='d-flex justify-content-center align-items-center mt-3'>
                <Button className='btn btn-dark mx-2 px-5'>
                <FaGoogle />oogle
              </Button>
              </div>

              <div>
                <p className="mb-0">Don't have an account? <Link to='/signup' className="text-white-50 fw-bold">Sign Up</Link></p>

              </div>
            </MDBCardBody>
          </MDBCard>

        </MDBCol>
      </MDBRow>

    </MDBContainer>
  );
}

export default Login;