import React from 'react';
import { FaVideo } from 'react-icons/fa';
import CardGroup from 'react-bootstrap/CardGroup';
import Card from 'react-bootstrap/Card';

const Services = () => {

    return (
        <div className='container'>
            <div className='text-center'>
                <h1>At A Glance-Our Services</h1>
                <caption className='d-flex justify-content-center align-items-center'>Included in these Courses</caption>
            </div>
            {/*  card services */}
            <CardGroup>
            <Card className="text-center my-5" style={{backgroundColor: '#0a0f1d', color: "#f1f1f1"}}>
                <Card.Header><FaVideo className='fs-1 text-primary' /></Card.Header>
                <Card.Body>
                    <Card.Title>12 Module 135+ Videos</Card.Title>
                    <Card.Text>
The entire course is divided into 12 modules and 135+ videos so that you can learn step by step.
                    </Card.Text>
                </Card.Body>
            </Card>                
            <Card className="text-center my-5" style={{backgroundColor: '#0a0f1d', color: "#f1f1f1"}}>
                <Card.Header><FaVideo className='fs-1 text-primary' /></Card.Header>
                <Card.Body>
                    <Card.Title>12 Module 135+ Videos</Card.Title>
                    <Card.Text>
The entire course is divided into 12 modules and 135+ videos so that you can learn step by step.
                    </Card.Text>
                </Card.Body>
            </Card>                
            <Card className="text-center my-5" style={{backgroundColor: '#0a0f1d', color: "#f1f1f1"}}>
                <Card.Header><FaVideo className='fs-1 text-primary' /></Card.Header>
                <Card.Body>
                    <Card.Title>12 Module 135+ Videos</Card.Title>
                    <Card.Text>
The entire course is divided into 12 modules and 135+ videos so that you can learn step by step.
                    </Card.Text>
                </Card.Body>
            </Card>                
            </CardGroup>
            <CardGroup>
            <Card className="text-center my-5" style={{backgroundColor: '#0a0f1d', color: "#f1f1f1"}}>
                <Card.Header><FaVideo className='fs-1 text-primary' /></Card.Header>
                <Card.Body>
                    <Card.Title>12 Module 135+ Videos</Card.Title>
                    <Card.Text>
The entire course is divided into 12 modules and 135+ videos so that you can learn step by step.
                    </Card.Text>
                </Card.Body>
            </Card>                
            <Card className="text-center my-5" style={{backgroundColor: '#0a0f1d', color: "#f1f1f1"}}>
                <Card.Header><FaVideo className='fs-1 text-primary' /></Card.Header>
                <Card.Body>
                    <Card.Title>12 Module 135+ Videos</Card.Title>
                    <Card.Text>
The entire course is divided into 12 modules and 135+ videos so that you can learn step by step.
                    </Card.Text>
                </Card.Body>
            </Card>                
            <Card className="text-center my-5" style={{backgroundColor: '#0a0f1d', color: "#f1f1f1"}}>
                <Card.Header><FaVideo className='fs-1 text-primary' /></Card.Header>
                <Card.Body>
                    <Card.Title>12 Module 135+ Videos</Card.Title>
                    <Card.Text>
The entire course is divided into 12 modules and 135+ videos so that you can learn step by step.
                    </Card.Text>
                </Card.Body>
            </Card>                
            </CardGroup>

        </div>
    );
};

export default Services;