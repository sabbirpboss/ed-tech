import Accordion from 'react-bootstrap/Accordion';
import {FaQuoteLeft} from 'react-icons/fa';
import './FAQ.css';

function FAQ() {
  return (
<div className="container my-5 d-flex justify-content-between align-items-center">
<div className='my-5 w-50 pe-1'>
    <FaQuoteLeft style={{fontSize: '100px', color: '#42c0f8'}} />
                <h1>Frequently asked questions</h1>
                <caption className='d-flex justify-content-center align-items-center'>We have listed here the answers to some of your common questions. We request you to read this list once before asking questions. Then you don't have to wait for our reply and save your precious time.</caption>
</div>
<Accordion defaultActiveKey="0" className='ed-accordion w-50'>
      <Accordion.Item eventKey="0">
        <Accordion.Header>What do you need to know in advance to do the course?</Accordion.Header>
        <Accordion.Body>
        Basic HTML, CSS, Basic JavaScript, Modern (>ES6) JavaScript, DOM, React JS, npm, Git/GitHub concept and working experience in VSCode editor is required to do the course.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>How will the course videos be given?</Accordion.Header>
        <Accordion.Body>
        Course videos will be pre-recorded. You can watch the videos at any time by logging in with the login information provided after you enroll. 1-2 modules will be released every week and each module will contain 10-12 videos. You have to finish watching these videos in the first 5 days of the week so that you can submit the end-of-module assignments in the remaining 2 days.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2">
        <Accordion.Header>How to participate in the course tests?</Accordion.Header>
        <Accordion.Body>
        Each video will have quizzes and you have to answer the quizzes. Besides, there will be one major/medium assignment at the end of each module and you have to complete the assignment within 36 hours and submit the GitHub repository link of the source code. Besides, a final exam will be conducted online at the very end of the entire course. The final result will be determined by adding up the marks obtained in all quizzes, assignments and tests.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="3">
        <Accordion.Header>How long will the course last?</Accordion.Header>
        <Accordion.Body>
        The course will run for six weeks ie one and a half months (45 days). In case of any major disaster or unavoidable situation, the course duration may be extended for a few days.</Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="4">
        <Accordion.Header>What do you need to do the course?</Accordion.Header>
        <Accordion.Body>
        First of all it will require your dedicated time and sincere hard work and perseverance. If you cannot provide these, then you will not benefit from enrolling in this course. You will also need a laptop or computer with Google Chrome browser, Node.js and VS Code editor installed.Next you will need an internet connection of at least 2-10 Mbps. If you have a broadband internet connection, you can watch the videos well. You can watch the videos from mobile browser if you want but we never recommend that because while learning it is very important to code in real code editor which is never done well in mobile browser.</Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="5">
        <Accordion.Header>How much is the course fee?</Accordion.Header>
        <Accordion.Body>
        Our Learn MERN Like A Pro! - course fee is fixed at a one-time fee of BDt. 5,999 (five thousand nine hundred and ninety nine) only.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="6">
        <Accordion.Header>Does the course fee have to be paid in full before the course?</Accordion.Header>
        <Accordion.Body>
        yes The course fee must be paid in full at the beginning of the course. Login information will be given to you only after payment of course fee. Any arrears of course fee or request in this regard will not be entertained.</Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="7">
        <Accordion.Header>My question is not answered here. Where to ask questions?</Accordion.Header>
        <Accordion.Body>
        If you want, you can inbox us on our Facebook page or post in the public group by writing your question in detail and adding necessary references. Also our support center number - +8801999999999 will be open for you from 10:00 am to 10:00 pm.</Accordion.Body>
      </Accordion.Item>
    </Accordion>
</div>
  );
}

export default FAQ;