import React from 'react';
import { FaVideo, FaDesktop, FaQuestion, FaCode, FaUserFriends, FaSlidersH, FaArrowRight } from 'react-icons/fa';
import CardGroup from 'react-bootstrap/CardGroup';
import Card from 'react-bootstrap/Card';

const Services = () => {

    return (
        <div className='container'>
            <div className='text-center mt-5'>
                <h1>At A Glance <FaArrowRight style={{color: '#42c0f8', fontSize: '20px'}} /> Our Services</h1>
                <caption className='d-flex justify-content-center align-items-center'>Included in these Courses</caption>
            </div>
            {/*  card services */}
            <CardGroup>
            <Card className="text-center my-5" style={{backgroundColor: '#0a0f1d', color: "#f1f1f1"}}>
                <Card.Header><FaVideo style={{color: '#42c0f8'}} className='fs-1' /></Card.Header>
                <Card.Body>
                    <Card.Title>12 Module 135+ Videos</Card.Title>
                    <Card.Text>
The entire course is divided into 12 modules and 135+ videos so that you can learn step by step.
                    </Card.Text>
                </Card.Body>
            </Card>                
            <Card className="text-center my-5" style={{backgroundColor: '#0a0f1d', color: "#f1f1f1"}}>
                <Card.Header><FaDesktop style={{color: '#42c0f8'}} className='fs-1' /></Card.Header>
                <Card.Body>
                    <Card.Title>30 hours 15GB recorded content</Card.Title>
                    <Card.Text>
Video size and duration are optimized taking into account time and bandwidth <br /> consumption.
                    </Card.Text>
                </Card.Body>
            </Card>                
            <Card className="text-center my-5" style={{backgroundColor: '#0a0f1d', color: "#f1f1f1"}}>
                <Card.Header><FaQuestion style={{color: '#42c0f8'}} className='fs-1' /></Card.Header>
                <Card.Body>
                    <Card.Title>120+ quizzes</Card.Title>
                    <Card.Text>
There will be quizzes with explanations and answers at the end of each video so that you can check your progress as you learn.
                    </Card.Text>
                </Card.Body>
            </Card>                
            </CardGroup>
            <CardGroup>
            <Card className="text-center my-5" style={{backgroundColor: '#0a0f1d', color: "#f1f1f1"}}>
                <Card.Header><FaCode style={{color: '#42c0f8'}} className='fs-1' /></Card.Header>
                <Card.Body>
                    <Card.Title>10 assignments</Card.Title>
                    <Card.Text>
At the end of each module there will be large assignments that you will do on your own. Solution of each assignment will be given in live session.
                    </Card.Text>
                </Card.Body>
            </Card>                
            <Card className="text-center my-5" style={{backgroundColor: '#0a0f1d', color: "#f1f1f1"}}>
                <Card.Header><FaUserFriends style={{color: '#42c0f8'}} className='fs-1' /></Card.Header>
                <Card.Body>
                    <Card.Title>5 live sessions</Card.Title>
                    <Card.Text>
There will be weekly live sessions where we will discuss important topics and answer your questions.

                    </Card.Text>
                </Card.Body>
            </Card>                
            <Card className="text-center my-5" style={{backgroundColor: '#0a0f1d', color: "#f1f1f1"}}>
                <Card.Header><FaSlidersH style={{color: '#42c0f8'}} className='fs-1' /></Card.Header>
                <Card.Body>
                    <Card.Title>12 Module 135+ Videos</Card.Title>
                    <Card.Text>
                    10 projects
We have followed project based learning process throughout the course. In the course we will do 10 projects together.
                    </Card.Text>
                </Card.Body>
            </Card>                
            </CardGroup>

        </div>
    );
};

export default Services;