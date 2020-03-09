import React from 'react';
import { Container, Row, Card, CardImg, CardText, CardBody, CardTitle, CardGroup, CardSubtitle } from 'reactstrap';
import hungry from './hungry.png'


export const Portfolio = (props) => {

    return (
      <div className="grey">
          <Container  >
            <a className= "name" id="portfolio"><h1>PROJECTS</h1></a>
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

              </Card>
              <Card>

              </Card>
            </CardGroup>
          </Container>
      </div>
    )
  }

export default Portfolio;
