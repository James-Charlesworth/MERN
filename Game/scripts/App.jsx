import React from 'react';
import ReactDOM from 'react-dom';
import Player from './Player';


export default class App extends React.Component{
	render(){
		return(
			<div>
				<Player id='ai1' />
				<Player id='hum' />
			</div>
		);
	}
}