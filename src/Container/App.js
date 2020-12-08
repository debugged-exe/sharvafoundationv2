import React, {Component} from 'react';
import Navigation from '../Component/Navigation/Navigation.js';
import Logo from '../Image/Logo.png';
import './App.css';

import Counter from '../Component/CounterUp/counter.jsx';
import '../Component/CounterUp/counterUp.css'

import Testimonial from '../Component/Testimonial/Testimonial';
import AboutUs from '../Component/AboutUs/AboutUs.js';
class App extends Component {
  render() {
    return(
      <div className="App">
        <Navigation src = {Logo}/>
        <AboutUs/>
        <Counter />
        <Testimonial/>
      </div>
    );
  }
}

export default App;
