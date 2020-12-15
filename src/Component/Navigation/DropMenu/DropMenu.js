import React from 'react';
import 'tachyons';

const menuOptions = ["Covid-19", "Food", "Blood Donation", "Green Project"];

const DropMenu = () =>
{
	return(
		<>
			<ul>
				{menuOptions.map((item,index) => {
					return(
						<li key={index}>{item}</li>
					);
				})}
			</ul>
		</>
	);
}

export default DropMenu;