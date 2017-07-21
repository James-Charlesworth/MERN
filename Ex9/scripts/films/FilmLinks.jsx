import React from 'react';
import {Link} from 'react-router';

export default class FilmLinks extends React.Component{
	
	render(){
		return(
			<nav>
				<ul className="vertical medium-horizontal menu items">
					<li>
						<Link to="/films/SW4" activeClassName="active">Episode 4</Link>
					</li>
					<li>
						<Link to="/films/SW5" activeClassName="active">Episode 5</Link>
					</li>
					<li>
						<Link to="/films/SW6" activeClassName="active">Episode 6</Link>
					</li>
				</ul>
			</nav>
		);
	}
}