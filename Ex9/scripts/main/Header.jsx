import React from 'react';
import Title from './Title';
import MainNav from'./MainNav';

export default class Header extends React.Component{
	
	
	render(){
		
		return(
			<div className="top-bar">
				<Title></Title>
				<MainNav></MainNav>
			</div>
		);
	}
}