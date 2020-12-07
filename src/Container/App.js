import React, {Component} from 'react';
import Navigation from '../Component/Navigation/Navigation.js';
import Logo from '../Image/Logo.png';
import './App.css';

class App extends Component {
  render() {
    return(
      <div className="App">
        <Navigation src = {Logo}/>
      </div>
    );
  }
}

export default App;