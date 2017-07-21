import React from 'react';
import ReactDOM from 'react-dom';


export default class Dice extends React.Component{
	constructor(){
		super();
		this.state = {
			number: Math.floor(6*Math.random())+1;
		}
	}
	render(){
		return(
			<div>
				{this.state.number}
			</div>
		);
	}
}