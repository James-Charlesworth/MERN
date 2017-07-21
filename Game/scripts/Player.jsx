import React from 'react';
import ReactDOM from 'react-dom';
import Dice from './Dice';

export default class Player extends React.Component{
	constructor(){
		super();
		this.state = {
			noOfDice: 2;
		}
	}
	render(){
		return(
			<span>
				<Dice />
				<Dice />
			</span>
		);
	}
}