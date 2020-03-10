import React, {Component} from 'react';
import Navigation from './Navigation.js'
import Jumbot from './Jumbot.js'
import About from './About.js'
import Contact from './Contact.js'
import Portfolio from './Portfolio.js'
import Blog from './Blog.js'
import Skills from './Skills.js'


class App extends Component {

  state = {

  }

  render() {

    return (
      <div>
        <Jumbot/>
        <Navigation/>
        <About/>
        <Skills/>
        <Portfolio/>
        <Blog/>
        <Contact/>
      </div>
    )
  }
}


export default App;
