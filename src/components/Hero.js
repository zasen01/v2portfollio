import React from "react";
import Carousel from 'react-bootstrap/Carousel';
import heroImage from "../assets/images/hero.jpeg"


function heroComponent(){

    return (
        <Carousel>
          <Carousel.Item>
            <img
              className="d-block h-25 w-100 "
              src = {heroImage}
              alt="First slide"
            />
            <Carousel.Caption>
              <h3>Zasen01</h3>
              <p>Bootcamp Alumni, Hopeful Junior Full Stack Developer, Freelance Website Builder and Translator.</p>
            </Carousel.Caption>
          </Carousel.Item>
          </Carousel>
      );

    
    
}
export default heroComponent;