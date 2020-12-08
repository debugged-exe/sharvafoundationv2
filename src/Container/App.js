import React, {Component} from 'react';
import Navigation from '../Component/Navigation/Navigation.js';
import Slider from '../Component/Slider/Slider.js';
import Logo from '../Image/Logo.png';
import './App.css';

import Counter from '../Component/CounterUp/counter.jsx';
import '../Component/CounterUp/counterUp.css'

class App extends Component {
  render() {
    return(
      <div className="App">
        <Navigation src = {Logo}/>
        <Slider />
      </div>
    );
  }
}

export default App;
