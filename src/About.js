import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import mehat from './mehat.jpeg'

export const About = (props) => {

    return (
      <div id="about">
      <Container className = "divs" >
        <h1 className= "name">ABOUT ME</h1>
      <Row>
        <Col sm={{ size: 'auto', offset: 0 }}><img width="281.25" height="316.75" src={mehat} alt="mehat"/></Col>
        <Col><p>Hey! I’m Jordan. I'm born and raised in this great city of New York. I'm a Front End Engineer, with some Backend chops, who brings my ideas to life through code. I’m driven and have a passion to learn, create, and have fun while doing it. I’ve transitioned to engineering to work creatively, build meaningful projects, and solve problems. Initially, I wasn’t sure about the transition but as soon as I completed my first project I knew this was for me. Seeing people's reaction gave me a sense of accomplishment and pride as I've never felt before. To see my vision coming to fruition on my laptop was surreal. In my last role as an operations manager, I became methodical, organized and good at managing my time. I’ve applied these skills during my time at the Flatiron School. With hard work and dedication I’ve become pretty good at Javascript, React, Redux and Rails. I’d like to use my skills in an opportunity as a Front End Engineer. Let's make something special!</p>
        <h6 className="interest">INTERESTS</h6>
        <Row className="interest">
          <Col>Health and Fitness</Col>
          <Col>Dallas Cowboys<span role="img" aria-labelledbjsx-a11y/accessible-emoji>😔</span></Col>
          <Col>Photography</Col>
          <Col>Fashion</Col>
        </Row>
        <Row className="interest">
          <Col>Music Production</Col>
          <Col>New York Knicks <span role="img" aria-labelledbjsx-a11y/accessible-emoji>😔</span></Col>
          <Col>Traveling</Col>
          <Col>Teaching</Col>
        </Row>
        </Col>
        </Row>
        </Container>
      </div>
    )
  }

export default About;
