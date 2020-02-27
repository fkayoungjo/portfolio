import React from 'react';
import { Jumbotron, Container } from 'reactstrap';


export const Jumbot = (props) => {

    return (
      <div>
        <Jumbotron className= 'jum' fluid >
          <Container fluid >
              <h1>Jordan Simon</h1>
              <h4>Software Engineer</h4>
          </Container>
        </Jumbotron>
      </div>
    )
  }

export default Jumbot;
