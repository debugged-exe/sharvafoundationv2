import React, {Component} from 'react';
import './App.css';

import Navigation from '../Component/Navigation/Navigation.js';

import Slider from '../Component/Slider/Slider.js';

import Logo from '../Image/Logo.png';

import AboutUs from '../Component/AboutUs/AboutUs.js';

import Counter from '../Component/CounterUp/counter.jsx';

import '../Component/CounterUp/counterUp.css'

import OurGoals from '../Component/OurGoals/OurGoals.js';

import CategoryList from '../Component/Category/CategoryList';

import Testimonial from '../Component/Testimonial/Testimonial';

import RecentPost from '../Component/RecentPost/RecentPost.js';

import Event from '../Component/Events/Events.js';
import JoinUs from '../Component/JoinUs/JoinUs.js';

import Contact from '../Component/Contact/Contact';
import Map from '../Component/Map/Map';

import Footer from '../Component/Footer/Footer';
import Donate from '../Component/Donate/Donate.js';
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
      <Navigation src = {Logo}/>

        <Switch>
          <Route exact path="/">
            <Slider />
            <AboutUs/>
            <Counter />
            <OurGoals goal = {goal}/>
            <CategoryList/>
            <Testimonial/>
            <RecentPost/>
            <Contact/>
            <Map/>
          </Route>

          <Route exact path="/event">
            <Event/>
          </Route>

           <Route exact path="/joinus">
           <div>
            <JoinUs/>
            </div>
          </Route>

          <Route exact path="/contact">
           <div>
            <Contact/>
            <Map/>
            </div>
          </Route>

          <Route exact path="/about">
           <div style={{marginTop:100}}>
            <AboutUs/>
            <Counter />
            <OurGoals goal = {goal}/>
            <CategoryList/>
            </div>
          </Route>

          <Route exact path="/donate">
           <div>
            <Donate/>
            </div>
          </Route>
        </Switch>

      <Footer/>
      </div>
      
        </Router>
    );
  }
}

export default App;
