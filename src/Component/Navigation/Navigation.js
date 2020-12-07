import React from 'react';
import './Navigation.css';
import 'tachyons';

const Navigation = ({src}) => 
{
	return(
		<nav style = {{display: 'flex', justifyContent: 'start', alignItems: 'center'}} className = "shadow-1">
			<div className = "tc f3 link pa3 ml3 pointer logo" style = {{height: 80, width: 80}}>
				<img src = {`${src}`}></img>
			</div>
			<p className = "tc f3 link ph3 mh1 pointer grow hov">Home</p>
			<p className = "tc f3 link ph3 mh1 pointer grow hov">Events</p>
			<p className = "tc f3 link ph3 mh1 pointer grow hov">Join Us</p>
			<p className = "tc f3 link ph3 mh1 pointer grow hov">About Us</p>
			<p className = "tc f3 link ph3 mh1 pointer grow hov">Contact Us</p>
			<p className = "tc f3 link ph3 mh1 pv1 br2 pointer grow donate">Donate</p>
		</nav>
	);
}

export default Navigation;