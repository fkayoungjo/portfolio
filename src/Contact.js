import React from 'react';
import { Container} from 'reactstrap';
import medium from './medium.png'
import linkedin from './linkedin.png'
import git from './git.png'
import email from './email.png'

export const Contact = (props) => {

    return (
      <div id="contact">
      <Container className = "divs">
      <h1 className= "name" >CONTACT</h1>

      <a href ="https://www.linkedin.com/in/jordansimondeveloper/" target="_blank" className="links"><img src={linkedin} alt="linkedin" width="40" height="40"/></a>
      <a href ="https://github.com/fkayoungjo" target="_blank" className="links"><img src={git} alt="git" width="40" height="40"/></a>
      <a href ="https://medium.com/@jordan.simon55" target="_blank" className="links"><img src={medium} alt="medium" width="40" height="40"/></a>
      <a href ="mailto:jordan.simon55@gmail.com?subject=Email from Website" className="links"><img src={email} alt="email" width="40" height="50"/></a>
      </Container>
      </div>
    )
  }

export default Contact;
