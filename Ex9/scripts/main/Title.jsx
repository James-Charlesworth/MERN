import React from 'react';

export default class Title extends React.Component{
	
	render(){
		
		return(
			<div className="top-bar-title">
				<span data-responsive-toggle="menu">
					<button type="button" className="menu-icon" data-toggle />
				</span>
				<h1>a STAR WARS Fansite</h1>
			</div>
		);
	}
}