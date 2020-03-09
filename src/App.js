import React, {Component} from 'react';
import Navigation from './Navigation.js'
import Jumbot from './Jumbot.js'
import About from './About.js'
import Contact from './Contact.js'
import Portfolio from './Portfolio.js'


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
      </div>
    )
  }
}


export default App;
