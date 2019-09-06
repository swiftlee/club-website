import React from 'react';
import "../../styles/index.scss";

const HomeCard = ({title, icon, description}) => {
	return(
		<div className="page-element">
			<h1 className="title" style={{color:"var(--primary-text-color)"}}>
				{title}
			</h1>
			<i className={"fas " + icon + " tagline-icon"}/>
			<p className="text" style={{color:"var(--secondary-text-color)"}}>
				{description}
			</p>
		</div>
	)
};

export default HomeCard;
