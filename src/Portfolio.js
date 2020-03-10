import React from 'react';
import { Container,  Card, CardImg, CardText, CardBody, CardTitle, CardGroup, CardSubtitle } from 'reactstrap';
import hungry from './hungry.png'
import comingsoon from './comingsoon.jpg'

export const Portfolio = (props) => {

    return (
      <div id="portfolio">
          <Container className = "divs">
            <h1 className= "name">PROJECTS</h1>
            <CardGroup>
              <Card>
                <CardImg top width="100%" src={hungry} alt="hungrynow" />
                <CardBody>
                  <CardTitle className= "cardtext">Hungry Now</CardTitle>
                  <CardSubtitle className= "cardtext">Recipe/Restaurant finder web application (React.js, Redux, PostgreSQL, Rails, Reactstrap) </CardSubtitle>
                  <CardText><a href ="https://youtu.be/-jqgZddr4WI">Demo</a><br></br>
                  <a href ="https://github.com/fkayoungjo/HungryNow">Front End</a><br></br>
                  <a href =" https://github.com/fkayoungjo/HungryNow/tree/master/hungry-now-2-backend">Back End</a></CardText>
                </CardBody>
              </Card>
              <Card>
                <CardImg top width="100%" src={comingsoon} alt="coming soon" />
                <CardBody>
                  <CardTitle className= "cardtext"></CardTitle>
                  <CardSubtitle className= "cardtext"> </CardSubtitle>
                  <CardText>Demo<br></br>
                  Front End<br></br>
                  Back End</CardText>
                </CardBody>
              </Card>
              <Card>
                <CardImg top width="100%" src={comingsoon} alt="coming soon" />
                <CardBody>
                  <CardTitle className= "cardtext"></CardTitle>
                  <CardSubtitle className= "cardtext"> </CardSubtitle>
                  <CardText>Demo<br></br>
                  Front End<br></br>
                  Back End</CardText>
                </CardBody>
              </Card>
            </CardGroup>
          </Container>
      </div>
    )
  }

export default Portfolio;
