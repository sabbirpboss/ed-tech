import React from 'react';
import CardGroup from 'react-bootstrap/CardGroup';
import Card from 'react-bootstrap/Card';
import project1 from '../../../assets/projects/chat-application.jpeg';
import project2 from '../../../assets/projects/blog-ui.jpeg';
import project3 from '../../../assets/projects/expense-tracker-rtk.jpeg';
import project4 from '../../../assets/projects/expense-tracker-toolkit.jpeg';
import project5 from '../../../assets/projects/project-manager.jpeg';
import project6 from '../../../assets/projects/shopping-cart.jpeg';
import project7 from '../../../assets/projects/todo-application-rtk.jpeg';
import project8 from '../../../assets/projects/video-gallery-rtk.jpeg';
import project9 from '../../../assets/projects/video-gallery-toolkit.jpeg';

const Projects = () => {
    return (
        <div className='container'>
            <div className='text-center mt-5'>
                <h1>The projects that will be done in the course</h1>
                <caption className='d-flex justify-content-center align-items-center'>We will do ten projects together</caption>
            </div>
            {/* card projects */}
            <CardGroup className="my-3">
            <Card className="text-center my-2" style={{backgroundColor: '#0a0f1d', color: "#f1f1f1"}}>
                <Card.Header>
                <Card.Img variant="top" src={project1} />
                </Card.Header>
                <Card.Body>
                    <Card.Title>12 Module 135+ Videos</Card.Title>
                    <Card.Text>
The entire course is divided into 12 modules and 135+ videos so that you can learn step by step.
                    </Card.Text>
                </Card.Body>
            </Card>                
            <Card className="text-center my-2" style={{backgroundColor: '#0a0f1d', color: "#f1f1f1"}}>
                <Card.Header>
                     <Card.Img variant="top" src={project2} /></Card.Header>
                <Card.Body>
                    <Card.Title>30 hours 15GB recorded content</Card.Title>
                    <Card.Text>
Video size and duration are optimized taking into account time and bandwidth <br /> consumption.
                    </Card.Text>
                </Card.Body>
            </Card>                
            <Card className="text-center my-2" style={{backgroundColor: '#0a0f1d', color: "#f1f1f1"}}>
                <Card.Header>
                     <Card.Img variant="top" src={project3} />
                </Card.Header>
                <Card.Body>
                    <Card.Title>120+ quizzes</Card.Title>
                    <Card.Text>
There will be quizzes with explanations and answers at the end of each video so that you can check your progress as you learn.
                    </Card.Text>
                </Card.Body>
            </Card>                
            </CardGroup>
            <CardGroup>
            <Card className="text-center my-2" style={{backgroundColor: '#0a0f1d', color: "#f1f1f1"}}>
                <Card.Header>
                <Card.Img variant="top" src={project4} />
                </Card.Header>
                <Card.Body>
                    <Card.Title>12 Module 135+ Videos</Card.Title>
                    <Card.Text>
The entire course is divided into 12 modules and 135+ videos so that you can learn step by step.
                    </Card.Text>
                </Card.Body>
            </Card>                
            <Card className="text-center my-2" style={{backgroundColor: '#0a0f1d', color: "#f1f1f1"}}>
                <Card.Header>
                     <Card.Img variant="top" src={project5} /></Card.Header>
                <Card.Body>
                    <Card.Title>30 hours 15GB recorded content</Card.Title>
                    <Card.Text>
Video size and duration are optimized taking into account time and bandwidth <br /> consumption.
                    </Card.Text>
                </Card.Body>
            </Card>                
            <Card className="text-center my-2" style={{backgroundColor: '#0a0f1d', color: "#f1f1f1"}}>
                <Card.Header>
                     <Card.Img variant="top" src={project6} />
                </Card.Header>
                <Card.Body>
                    <Card.Title>120+ quizzes</Card.Title>
                    <Card.Text>
There will be quizzes with explanations and answers at the end of each video so that you can check your progress as you learn.
                    </Card.Text>
                </Card.Body>
            </Card>                
            </CardGroup>
            <CardGroup>
            <Card className="text-center my-2" style={{backgroundColor: '#0a0f1d', color: "#f1f1f1"}}>
                <Card.Header>
                <Card.Img variant="top" src={project7} />
                </Card.Header>
                <Card.Body>
                    <Card.Title>12 Module 135+ Videos</Card.Title>
                    <Card.Text>
The entire course is divided into 12 modules and 135+ videos so that you can learn step by step.
                    </Card.Text>
                </Card.Body>
            </Card>                
            <Card className="text-center my-2" style={{backgroundColor: '#0a0f1d', color: "#f1f1f1"}}>
                <Card.Header>
                     <Card.Img variant="top" src={project8} /></Card.Header>
                <Card.Body>
                    <Card.Title>30 hours 15GB recorded content</Card.Title>
                    <Card.Text>
Video size and duration are optimized taking into account time and bandwidth <br /> consumption.
                    </Card.Text>
                </Card.Body>
            </Card>                
            <Card className="text-center my-2" style={{backgroundColor: '#0a0f1d', color: "#f1f1f1"}}>
                <Card.Header>
                     <Card.Img variant="top" src={project9} />
                </Card.Header>
                <Card.Body>
                    <Card.Title>120+ quizzes</Card.Title>
                    <Card.Text>
There will be quizzes with explanations and answers at the end of each video so that you can check your progress as you learn.
                    </Card.Text>
                </Card.Body>
            </Card>                
            </CardGroup>
        </div>
    );
};

export default Projects;