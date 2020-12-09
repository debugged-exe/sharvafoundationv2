import React,{useState}from 'react';
import {FaBars} from 'react-icons/fa';
import {FaTimes} from 'react-icons/fa';
import './Navigation.css';
import 'tachyons';

const Navigation = ({src}) => 
{
	const [ham, setHam] = useState(false);

	const handleClick = () => {
		setHam(!ham);
	}

	return(
		<nav style = {{display: 'flex', justifyContent: 'start', alignItems: 'center'}} className = "vert-align shadow-1">
			<div className = "tc f3 link pa3 ml3 pointer logo" style = {{height: 80, width: 80}}>
				<img src = {`${src}`} alt=' '></img>
			</div>
			<div className="f3 menu-icon">
			{
				ham ? <FaTimes onClick = {handleClick}/> : <FaBars onClick = {handleClick}/> 
			}
			</div>
			<div className = {ham ? 'nav-menu active' : 'nav-menu'}>
				<p className = "tc f3 link ph3 mh1 pointer grow hov">Home</p>
				<p className = "tc f3 link ph3 mh1 pointer grow hov">Events</p>
				<p className = "tc f3 link ph3 mh1 pointer grow hov">Join Us</p>
				<p className = "tc f3 link ph3 mh1 pointer grow hov">About Us</p>
				<p className = "tc f3 link ph3 mh1 pointer grow hov">Contact Us</p>
				<p className = "tc f3 link ph3 mh1 pv1 br2 pointer grow donate">Donate</p>
			</div>
		</nav>
	);
}

export default Navigation;