import React,{useState}from 'react';
import {FaBars} from 'react-icons/fa';
import {FaTimes} from 'react-icons/fa'; 
import './Navigation.css';
import 'tachyons';
import {DropdownButton,Dropdown} from 'react-bootstrap'
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
			<div className = {ham ? 'mh4 nav-menu active' : 'mh4 nav-menu'}>
				<Link style={{outline:'none'}} className = "tc f4 link ph3 mh1 pointer hov mt3" to="/" ><p>Home</p></Link>
				<Link style={{outline:'none'}} className = "tc f4 link ph3 mh1 pointer hov mt3" to="/event"><p>Events</p></Link>
				<Link style={{outline:'none'}} className = "tc f4 link ph3 mh1 pointer hov mt3" to="/joinus"><p>Join Us</p></Link>
				<Link style={{outline:'none'}} className = "tc f4 link ph3 mh1 pointer hov mt3" to="/contact"><p>Contact Us</p></Link>
				<Link style={{outline:'none'}} className = "tc f4 link ph3 mh1 pointer hov mt3" to="/about"><p>About Us</p></Link>
				<Link style={{outline:'none'}} className = "tc f4 link ph3 mh1 pointer hov mt2 hov" to="/donate"><p className = "tc f4 link ph3 mh1 pv1 br2 pointer grow donate mt1">Donate</p></Link>
			</div>
		</nav>
	);
}

export default Navigation;