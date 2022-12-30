import React from "react";
import Card from 'react-bootstrap/Card';


function Home() {
    return (
        <>
            <div>
                <div className="center">
                    <h1>Welcome!</h1>
                    <div className="subset">
                        <Card>
                            <Card.Header>Welcome To My Portfolio</Card.Header>
                            <Card.Body>
                                <Card.Title>Here you will find...</Card.Title>
                                <Card.Text>
                                    You will find examples of both school work and personal projects.
                                     While the personal projects have yet to be started they have been mapped out.
                                     As i continue to learn and grow as a developer i hope to showcase more of my works. Feel free to contact me via GitHub.
                                </Card.Text>
                            </Card.Body>
                        </Card>

                    </div>
                </div>
            </div>
        </>
    )
}
export default Home;