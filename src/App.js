import React, {Component} from 'react';
import Navigation from './Navigation.js'
import Jumbot from './Jumbot.js'
import About from './About.js'
import Contact from './Contact.js'
import Portfolio from './Portfolio.js'
import Blog from './Blog.js'


class App extends Component {

  state = {

  }

  render() {

    return (
      <div>
        <Jumbot/>
        <Navigation/>
        <About/>
        <Portfolio/>
        <Blog/>
        <Contact/>
      </div>
    )
  }
}


export default App;
