import React from 'react';
import {IndexLink, Link} from 'react-router';

export default class MainNav extends React.Component{
	
	render(){
		return(
			<nav className="top-bar-right" id="menu">
				<h6 className="hide">Site Navigation</h6>
				<ul className="vertical medium-horizontal menu">
					<li>
						<IndexLink className="pageLink" to="/">Home</IndexLink>
					</li>
					<li>
						<IndexLink className="pageLink" to="/Films">Films</IndexLink>
					</li>
					<li>
						<IndexLink className="pageLink" to="/Actors">Actors</IndexLink>
					</li>
				</ul>
			</nav>
		);
	}
}