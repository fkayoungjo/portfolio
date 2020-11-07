import React from 'react';
import { Jumbotron, Container } from 'reactstrap';
import profile from './profile.jpeg'


export const Jumbot = (props) => {

    return (
      <div>
        <Jumbotron className= 'jum' fluid >
          <Container fluid >
            <img className= "profile" width="250" height="250" src={profile} alt="profile"/>
            <h1 className = "name">Jordan Simon</h1>
            <h4 className = "role">Front End Engineer</h4>
          </Container>
        </Jumbotron>
      </div>
    )
  }

export default Jumbot;
