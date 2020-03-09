import React from 'react';
import { Container} from 'reactstrap';
import medium from './medium.png'
import linkedin from './linkedin.png'
import git from './git.png'

export const Contact = (props) => {

    return (
      <div >
      <Container>
      <a className= "name" id="contact"><h1>CONTACT</h1></a>

      <img src={linkedin} alt="linkedin" width="40" height="40"/>
      <img src={git} alt="git" width="40" height="40"/>
      <img src={medium} alt="medium" width="40" height="40"/>

      </Container>
      </div>
    )
  }

export default Contact;
