import React from 'react';
import './RecentCard.css';
import 'tachyons';

const RecentCard = ({id,heading,value}) => {
	return(
		<>
		<a href = {`/event/#${id}`} style={{textDecoration: "none"}}>
			<div className='recent-card'>
                <img src='https://images.unsplash.com/photo-1507587396692-5afe1f777676?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=334&q=80' alt='' />
                <div className='info'>
                    <h1>{heading}</h1>
                    <p className="f5">{value}</p>
                </div>
            </div>
		</a>
		</>
	);
}

export default RecentCard;