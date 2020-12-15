import React,{useState}from 'react';
import {FaBars} from 'react-icons/fa';
import {FaTimes} from 'react-icons/fa';
import DropMenu from './DropMenu/DropMenu.js';
import './Navigation.css';
import 'tachyons';
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Link,
	useRouteMatch,
	useParams
  } from "react-router-dom";

const Navigation = ({src}) => 
{
	const [ham, setHam] = useState(false);

	const handleClick = () => {
		setHam(!ham);
	}

	return(
		<nav style = {{display: 'flex', justifyContent: 'start', alignItems: 'center'}} className = "vert-align shadow-1">
			<div className = "tc f3 link pa3 ml3 pointer logo" style = {{height: 80, width: 80}}>
				<img className = "ml2" src = {`${src}`} alt=' '></img>
			</div>
			<div className="f3 menu-icon">
			{
				ham ? <FaTimes onClick = {handleClick}/> : <FaBars onClick = {handleClick}/> 
			}
			</div>
<<<<<<< HEAD
			<div className = {ham ? 'mh4 nav-menu active' : 'mh4 nav-menu'}>
				<Link className = "tc f4 link ph3 mh1 pointer hov mt2" to="/" ><p>Home</p></Link>
				<Link className = "tc f4 link ph3 mh1 pointer hov mt2" to="/event"><p>Events</p></Link>
				<Link className = "tc f4 link ph3 mh1 pointer hov mt2" to="/joinus"><p>Join Us</p></Link>
				<p className = "tc f4 link ph3 mh1 pointer hov mt2">About Us</p>
				<Link className = "hov" to="/donate"><p className = "tc f4 link ph3 mh1 pv1 br2 pointer grow donate mt2">Donate</p></Link>
=======
			<div className = {ham ? 'nav-menu active' : 'nav-menu'}>
				<Link className = "tc f3 link ph3 mh1 pointer grow hov" to="/" ><p>Home</p></Link>
				<Link className = "tc f3 link ph3 mh1 pointer grow hov" to="/event"><p>Events</p></Link>
				<Link className = "tc f3 link ph3 mh1 pointer grow hov" to="/joinus"><p>Join Us</p></Link>
				<Link className = "tc f3 link ph3 mh1 pointer grow hov" to="/contact"><p>Contact Us</p></Link>
				<Link className = "tc f3 link ph3 mh1 pointer grow hov" to="/about"><p>About Us</p></Link>
				<Link className = "hov" to="/donate"><p className = "tc f3 link ph3 mh1 pv1 br2 pointer grow donate">Donate</p></Link>
>>>>>>> ae89bc7fe45a38b2caca47ef152e69f70738c8af
			</div>
		</nav>
	);
}

export default Navigation;