import React, {Component} from 'react';
import Navigation from './Navigation.js'
import Jumbot from './Jumbot.js'
import About from './About.js'


class App extends Component {

  state = {

  }

  render() {

    return (
      <div>
        <Navigation/>
        <Jumbot/>
        <About/>
      </div>
    )
  }
}


export default App;
