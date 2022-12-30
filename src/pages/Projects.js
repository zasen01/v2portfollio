import React from "react";
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs'
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import project1 from '../assets/screenshots/project1.png';
import project2 from '../assets/screenshots/project2.png';
import project3 from '../assets/screenshots/project3.png';
import futureProject1 from "../assets/images/dee.jpg";
import futureProject2 from "../assets/images/tidal.jpg";
import futureProject3 from "../assets/images/sok9.jpg";
import futureProject4 from "../assets/images/portfolio.jpg";

function Projects() {
    const myprojects = [

        {
            id: 1,
            title: "Project 1",
            image: project1,
            description: ""

        },
        {
            id: 2,
            title: "Project 2",
            image: project2,
            description: ""

        },
        {
            id: 3,
            title: "Project 3",
            image: project3,
            description: ""
        },
        {
            id: 4,
            title: "Mern",
            description: ""

        }
    ]
    const futureProjects = [
        {
            id: 1,
            title: "Smokey Oaks K9",
            image: futureProject3,
            description: ""

        },
        {
            id: 2,
            title: "Tidal Retrievers",
            image: futureProject2,
            description: ""

        },
        {
            id: 3,
            title: "Ah Dorkable Cosplay",
            image: futureProject1,
            description: ""
        },
        {
            id: 4,
            title: "Translation Portfolio",
            image: futureProject4,
            description: ""

        }
    ]

    return (
        <>
                <div className="center">
                    <h1>Projects</h1>

                    <Tabs
                        defaultActiveKey="Completed"
                        className="mb-3"
                    >
                        <Tab eventKey="Completed" title="Completed Projects">

                            <Row xs={1} md={2} className="g-4">
                                {myprojects.map((project, idx) => (

                                    <Col key={project.id}>
                                        <Card>
                                            <Card.Img variant="top" src={project.image} alt={project.title} />
                                            <Card.Body>
                                                <Card.Title>{project.title}</Card.Title>
                                                <Card.Text>
                                                    This is a longer card with supporting text below as a natural
                                                    lead-in to additional content. This content is a little bit
                                                    longer.
                                                </Card.Text>
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                ))}
                            </Row>

                        </Tab>
                        <Tab eventKey="Future" title="Future Projects">

                            <Row xs={1} md={2} className="g-4">
                                {futureProjects.map((project, idx) => (

                                    <Col key={project.id}>
                                        <Card>
                                            <Card.Img variant="top" src={project.image} alt={project.title} />
                                            <Card.Body>
                                                <Card.Title>{project.title}</Card.Title>
                                                <Card.Text>
                                                    This is a longer card with supporting text below as a natural
                                                    lead-in to additional content. This content is a little bit
                                                    longer.
                                                </Card.Text>
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                ))}
                            </Row>

                        </Tab>

                    </Tabs>
                </div>
        </>
    )
}
export default Projects;