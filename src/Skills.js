import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import boot from './boot.png';
import css from './css.png';
import git from './git.png';
import html from './html.png';
import javascript from './javascript.png';
import rails from './rails.png';
import react from './react.png';
import sql from './sql.png';






export const Skills = (props) => {

    return (
      <div className="grey" id= "skills">
      <Container className = "divs">
      <h1 className= "name">SKILLS</h1>
        <img src={boot} alt="boot" width="120" height="120"/>
        <img src={git} alt="git" width="140" height="140"/>
        <img src={html} alt="html" width="140" height="140"/>
        <img src={javascript} alt="javascript" width="140" height="140"/>
        <img src={rails} alt="rails" width="140" height="140"/>
        <img src={react} alt="react" width="140" height="140"/>
        <img src={sql} alt="sql" width="140" height="140"/>
        <img src={css} alt="css" width="120" height="120"/>
      </Container>
      </div>
    )
  }

export default Skills;
