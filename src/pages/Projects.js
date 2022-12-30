import React from "react";
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
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
            link:"https://github.com/Plovato97/Magic-trav",
            deployed:"https://plovato97.github.io/Magic-trav/",
            description: "My first ever group project during the bootcamp. It was all about learning how API calls work and building something utilizing different APIs."

        },
        {
            id: 2,
            title: "Project 2",
            image: project2,
            link:"https://github.com/zasen01/smooth-ops",
            deployed:"https://operation-pokedex.herokuapp.com/",
            description: "The second bootcamp project was more advanced and we had started learning more and more about the backend side of Full Stack Development. This one was a real challange"

        },
        {
            id: 3,
            title: "Project 3",
            link:"https://github.com/ejackson1228/space-whY",
            deployed:"https://salty-wave-70415.herokuapp.com/",
            image: project3,
            description: "This is an entire full stack build combining both front and back end with different technologies we learned thoughout the course."
        }
    ]
    const futureProjects = [
        {
            id: 1,
            title: "Smokey Oaks K9",
            image: futureProject3,
            description: "I am working with a local dog trainer to do a rebuild of their existing website. We are hoping to impliment a client portal as well as payment processing."

        },
        {
            id: 2,
            title: "Tidal Retrievers",
            image: futureProject2,
            description: "This is a labrador breeder I adore and hope to in the future purchase from. The are an up and comming program so I am helping them get started by working side by side with the owner to bring their vision to life."

        },
        {
            id: 3,
            title: "Ah Dorkable Cosplay",
            image: futureProject1,
            description: "A close friend and crafter is trusting me to help her create a more professional looking portfolio for both her hobby and professional works. "
        },
        {
            id: 4,
            title: "Translation Portfolio",
            image: futureProject4,
            description: "My personal side project to document my translation work and progress better. I am hoping to continure to continue to learn more languages besides japanese and utilize them for my future career."
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
                                                {project.description}
                                            </Card.Text>
                                            <Button href={project.link} variant="dark">GitHub</Button> {' '}{' '}
                                            <Button href={project.deployed}>Deployed</Button>
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
                                                {project.description}
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