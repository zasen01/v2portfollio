import React from "react";
import Accordion from 'react-bootstrap/Accordion';
import ListGroup from 'react-bootstrap/ListGroup';


function AboutMe() {
    return (
        <>
            <div>
                <div className="center">
                    <h1>About Me</h1>
                    <div className="subset">
                    <Accordion defaultActiveKey="0">
                        <Accordion.Item eventKey="0">
                            <Accordion.Header>Self Introduction</Accordion.Header>
                            <Accordion.Body>
                               Hello My online in the sphere of programming I am hoping to make myself known as Zasen01. 
                               I was looking for a career change and ended up enrolling in a Full Stack Developer bootcamp and it was one hard course.
                               I would say that I am a forever student. I love to learn new things and give almost anything an honest shot. 
                               My goals for the future are pretty simple, I want to work and be able to support myself. 
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="1">
                            <Accordion.Header>Programming Languages</Accordion.Header>
                            <Accordion.Body className="text-">
                                While I do not wish to disclose the details of my work history here I will say before the bootcamp i was primarily in sales.
                                During the course of the bootcamp I was exposed to and learned a lot of different programming languages and concepts such as the following.
                                <ListGroup as="ul">
                                <ListGroup.Item as="li">- Javascript</ListGroup.Item>
                                <ListGroup.Item as="li">- CSS/HTML</ListGroup.Item>
                                <ListGroup.Item as="li">- Angular.JS</ListGroup.Item>
                                <ListGroup.Item as="li">- Express</ListGroup.Item>
                                <ListGroup.Item as="li">- MySQL</ListGroup.Item>
                                <ListGroup.Item as="li">- React</ListGroup.Item>
                                <ListGroup.Item as="li">- Node</ListGroup.Item>
                                <ListGroup.Item as="li">- Sequlize </ListGroup.Item>
                                </ListGroup>

                                While the bootcamp may be over my learning has not stopped. In my freetime I continue to review materials and take in new knowledge.

                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
                    </div>

                </div>
            </div>

        </>
    )
}
export default AboutMe;