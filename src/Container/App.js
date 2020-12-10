import React, {Component} from 'react';
import Navigation from '../Component/Navigation/Navigation.js';
import Slider from '../Component/Slider/Slider.js';
import Logo from '../Image/Logo.png';
import './App.css';

import Counter from '../Component/CounterUp/counter.jsx';
import '../Component/CounterUp/counterUp.css'

import Testimonial from '../Component/Testimonial/Testimonial';
import AboutUs from '../Component/AboutUs/AboutUs.js';
import Category from '../Component/Category/Category.js';
import OurGoals from '../Component/OurGoals/OurGoals.js';
import Event from '../Component/Events/Events.js';

import Footer from '../Component/Footer/Footer';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";

class App extends Component {
  constructor()
  {
    super();
    this.state = {
      goal: {
        total: 40000,
        complete: 29000
      }
    }
  }
  render() {

    const {goal} = this.state;

    return(
          <Router>
      <div className="App">
        <Switch>
          <Route exact path="/">
            <Navigation src = {Logo}/>
            <Slider />
            <AboutUs/>
            <Counter />
            <OurGoals goal = {goal}/>
            <Category/>
            <Testimonial/>
            <Footer/>
          </Route>
          <Route exact path="/event">
            <Navigation src = {Logo}/>
            <Event/>
            <Footer/>
          </Route>
        </Switch>
      </div>
        </Router>
    );
  }
}

export default App;
