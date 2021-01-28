import React,{useState}from 'react';
import {FaBars} from 'react-icons/fa';
import {FaTimes} from 'react-icons/fa'; 
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
		<div>
			<div className='dropmenus pa4 pv0 f4 pl3 mt2'>
				<ul style={{textDecoration:'none', listStyle:'none'}} className='flex flex-column'>
					<li className='pointer point'>Food</li>
					<li className='pointer point'>Health</li>
					<li className='pointer point'>Blood Donation</li>
					<li className='pointer point'>Project Green</li>
					<li className='pointer point'>Covid-19</li>
				</ul>
			</div>
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
				<Link style={{outline:'none'}} className = "tc f4 link ph3 mh1 pointer mt2" to="/donate"><p className = "tc f4 link ph3 mh1 pv1 br2 pointer grow donate mt1">Donate</p></Link>
			</div>
		</nav>
		</div>
	);
}

export default Navigation;