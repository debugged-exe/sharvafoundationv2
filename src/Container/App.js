import React, {Component} from 'react';
import './App.css';

import Navigation from '../Component/Navigation/Navigation.js';

import Featured from '../Component/Featured/Featured';

import Slider from '../Component/Slider/Slider.js';

import Logo from '../Images/logo.png';

import AboutUs from '../Component/AboutUs/AboutUs.js';

import Counter from '../Component/CounterUp/counter.jsx';

import '../Component/CounterUp/counterUp.css'

import OurGoals from '../Component/OurGoals/OurGoals.js';

import CategoryList from '../Component/Category/CategoryList';

import Testimonial from '../Component/Testimonial/Testimonial';

import RecentPost from '../Component/RecentPost/RecentPost.js';

import CovidEvent from '../Component/Events/CovidEvents.js';
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
import FoodEvent from '../Component/Events/FoodEvent';
import BloodEvent from '../Component/Events/BloodEvent';
import GreenEvent from '../Component/Events/GreenEvent';
import Testimonials from '../Component/Testimonial/Testimonial';

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
            <Counter />
            <Testimonial/>
            <CategoryList/>
            <OurGoals goal = {goal}/>
            <Featured/>
            <RecentPost/>
          </Route>

          <Route exact path="/covid-event">
            <CovidEvent/>
          </Route>

          <Route exact path="/food-event">
            <FoodEvent/>
          </Route>

          <Route exact path="/blood-event">
            <BloodEvent/>
          </Route>

          <Route exact path="/green-event">
            <GreenEvent/>
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
            <Slider />
            <Counter />
            <Testimonial/>
            <CategoryList/>
            <OurGoals goal = {goal}/>
            <Featured/>
            <RecentPost/>
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
